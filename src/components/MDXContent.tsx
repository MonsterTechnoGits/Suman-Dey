interface MDXContentProps {
  content: string
}

// Enhanced markdown-like content renderer with proper list support
function simpleMarkdownToHtml(markdown: string): string {
  let html = markdown

  // Headers (process first, before line-by-line processing)
  // Use more specific regex patterns with word boundaries
  html = html
    .replace(/^###\s+(.+)$/gm, '<h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 mt-6 flex items-center gap-2"><span class="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>$1</h3>')
    .replace(/^##\s+(.+)$/gm, '<h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 mt-8 flex items-center gap-3"><span class="w-1.5 h-7 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>$1</h2>')
    .replace(/^#\s+(.+)$/gm, '<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 mt-4 border-b border-white/10 pb-4">$1</h1>')

  // Code blocks (process before inline code)
  html = html.replace(/```([^`]+)```/g, '<pre class="bg-gray-900/50 backdrop-blur-sm text-gray-300 p-4 rounded-lg overflow-x-auto mb-6 border border-white/10 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"><code class="text-sm">$1</code></pre>')
  
  // Process lists
  // Handle unordered lists (bullet points)
  html = html.replace(/^(\s*)-\s+(.+)$/gm, (_, _indent, content) => {
    return `<li class="text-gray-300 leading-relaxed mb-2 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-400 before:font-bold">${content}</li>`
  })

  // Handle numbered lists
  html = html.replace(/^(\s*)\d+\.\s+(.+)$/gm, (_, _indent, content) => {
    return `<li class="text-gray-300 leading-relaxed mb-2 relative pl-6 list-decimal list-inside marker:text-blue-400 marker:font-bold">${content}</li>`
  })

  // Wrap consecutive list items in ul/ol tags
  html = html.replace(/((?:<li[^>]*>.*?<\/li>\s*)+)/g, (match) => {
    if (match.includes('list-decimal')) {
      return `<ol class="mb-6 space-y-1">${match}</ol>`
    } else {
      return `<ul class="mb-6 space-y-1">${match}</ul>`
    }
  })
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800/60 text-blue-300 px-2 py-1 rounded text-sm font-mono border border-blue-500/20">$1</code>')
  
  // Bold text
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
  
  // Italic text
  html = html.replace(/\*(.*?)\*/g, '<em class="text-gray-200 italic">$1</em>')
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-all duration-200 hover:decoration-2" target="_blank" rel="noopener noreferrer">$1</a>')
  
  // Handle line breaks and paragraphs
  const lines = html.split('\n')
  const result = []
  let inList = false
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Check if line is already processed (contains HTML tags)
    if (line.startsWith('<')) {
      if (line.startsWith('<ul') || line.startsWith('<ol')) {
        inList = true
      } else if (line.startsWith('</ul') || line.startsWith('</ol')) {
        inList = false
      }
      result.push(line)
    } else if (line === '') {
      // Empty line - add spacing if not in a list
      if (!inList) {
        result.push('')
      }
    } else {
      // Regular text line - wrap in paragraph if not empty and not already processed
      if (line && !line.startsWith('<')) {
        result.push(`<p class="text-gray-300 leading-relaxed mb-4">${line}</p>`)
      } else {
        result.push(line)
      }
    }
  }
  
  return result.join('\n')
}

export default function MDXContent({ content }: MDXContentProps) {
  if (!content) {
    return (
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400">No content available.</p>
      </div>
    )
  }

  try {
    const htmlContent = simpleMarkdownToHtml(content)
    
    return (
      <div 
        className="prose prose-invert max-w-none
          /* Typography */
          prose-headings:text-white prose-headings:font-bold
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-white prose-strong:font-semibold
          prose-em:text-gray-200
          prose-code:text-blue-300 prose-code:bg-gray-800/60 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          /* Lists */
          prose-ul:mb-6 prose-ul:space-y-1
          prose-ol:mb-6 prose-ol:space-y-1
          prose-li:text-gray-300 prose-li:leading-relaxed prose-li:mb-2
          /* Links */
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
          /* Blockquotes */
          prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-300
          /* Pre/Code blocks */
          prose-pre:bg-gray-900/50 prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-white/10
          /* Images */
          prose-img:rounded-lg prose-img:border prose-img:border-white/10
          /* Tables */
          prose-table:border-collapse prose-table:border prose-table:border-white/10
          prose-thead:bg-white/5
          prose-th:border prose-th:border-white/10 prose-th:px-4 prose-th:py-2 prose-th:text-white prose-th:font-semibold
          prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-2 prose-td:text-gray-300
          /* HR */
          prose-hr:border-white/20 prose-hr:my-8
        "
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )
  } catch (error) {
    console.error('Content rendering error:', error)
    return (
      <div className="prose prose-invert max-w-none">
        <p className="text-red-400">Error rendering content. Please try again later.</p>
      </div>
    )
  }
}