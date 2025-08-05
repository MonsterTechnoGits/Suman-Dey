'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useState, useEffect } from 'react';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

interface MDXContentProps {
  content: string;
}

// Component prop types
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  [key: string]: unknown;
}

// Custom components for MDX
const components = {
  // Custom code block component
  pre: ({ children, ...props }: ComponentProps) => (
    <pre 
      className="!bg-gray-900 !text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 border border-white/10 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 shadow-lg"
      {...props}
    >
      {children}
    </pre>
  ),
  
  // Custom code component for inline and block code
  code: ({ children, className, ...props }: ComponentProps) => {
    // Check if this is inside a pre tag (code block)
    const isCodeBlock = className && (className.includes('language-') || className.startsWith('hljs'));
    
    if (isCodeBlock) {
      return (
        <code className={`${className} text-sm font-mono leading-relaxed block`} {...props}>
          {children}
        </code>
      );
    }
    
    // For inline code
    return (
      <code 
        className="bg-gray-800/80 text-blue-300 px-2 py-1 rounded text-sm font-mono border border-blue-500/30 shadow-sm"
        {...props}
      >
        {children}
      </code>
    );
  },

  // Custom headings with styling
  h1: ({ children, ...props }: ComponentProps) => (
    <h1 
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 mt-8 border-b border-white/20 pb-4 flex items-center gap-3"
      {...props}
    >
      <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }: ComponentProps) => (
    <h2 
      className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 mt-8 flex items-center gap-3"
      {...props}
    >
      <span className="w-1.5 h-7 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }: ComponentProps) => (
    <h3 
      className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 mt-6 flex items-center gap-2"
      {...props}
    >
      <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
      {children}
    </h3>
  ),

  // Custom paragraph styling
  p: ({ children, ...props }: ComponentProps) => (
    <p className="text-gray-300 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),

  // Custom list styling
  ul: ({ children, ...props }: ComponentProps) => (
    <ul className="mb-6 space-y-2 pl-4" {...props}>
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }: ComponentProps) => (
    <ol className="mb-6 space-y-2 pl-4 list-decimal list-inside" {...props}>
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }: ComponentProps) => (
    <li className="text-gray-300 leading-relaxed relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-400 before:font-bold" {...props}>
      {children}
    </li>
  ),

  // Custom link styling
  a: ({ children, href, ...props }: ComponentProps) => (
    <a 
      href={href}
      className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-all duration-200 hover:decoration-2" 
      target="_blank" 
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),

  // Custom blockquote
  blockquote: ({ children, ...props }: ComponentProps) => (
    <blockquote 
      className="border-l-4 border-blue-400 pl-4 italic text-gray-300 my-6 bg-blue-900/10 py-2 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Custom table styling
  table: ({ children, ...props }: ComponentProps) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse border border-white/20 rounded-lg overflow-hidden" {...props}>
        {children}
      </table>
    </div>
  ),
  
  thead: ({ children, ...props }: ComponentProps) => (
    <thead className="bg-white/10" {...props}>
      {children}
    </thead>
  ),
  
  th: ({ children, ...props }: ComponentProps) => (
    <th className="border border-white/20 px-4 py-3 text-white font-semibold text-left" {...props}>
      {children}
    </th>
  ),
  
  td: ({ children, ...props }: ComponentProps) => (
    <td className="border border-white/20 px-4 py-3 text-gray-300" {...props}>
      {children}
    </td>
  ),

  // Custom horizontal rule
  hr: ({ ...props }: ComponentProps) => (
    <hr className="border-white/30 my-8" {...props} />
  ),

  // Custom strong/bold
  strong: ({ children, ...props }: ComponentProps) => (
    <strong className="text-white font-semibold" {...props}>
      {children}
    </strong>
  ),

  // Custom emphasis/italic
  em: ({ children, ...props }: ComponentProps) => (
    <em className="text-gray-200 italic" {...props}>
      {children}
    </em>
  ),
};

export default function MDXContent({ content }: MDXContentProps) {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const processMDX = async () => {
      if (!content || !mounted) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const mdxSource = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [rehypeHighlight, { 
                detect: true,
                ignoreMissing: true
              }]
            ],
          },
          parseFrontmatter: false,
        });

        setMdxContent(mdxSource);
      } catch (err) {
        console.error('MDX processing error:', err);
        setError('Failed to process content');
      } finally {
        setIsLoading(false);
      }
    };

    processMDX();
  }, [content, mounted]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="prose prose-invert max-w-none">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-800 rounded w-3/4"></div>
          <div className="h-4 bg-gray-800 rounded w-full"></div>
          <div className="h-4 bg-gray-800 rounded w-5/6"></div>
          <div className="h-32 bg-gray-900 rounded"></div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="prose prose-invert max-w-none">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
          <span className="ml-3 text-gray-400">Processing content...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="prose prose-invert max-w-none">
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400 mb-0">⚠️ {error}</p>
        </div>
      </div>
    );
  }

  if (!mdxContent) {
    return (
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400">No content available.</p>
      </div>
    );
  }

  return (
    <div className="prose prose-invert max-w-none overflow-hidden">
      <MDXRemote {...mdxContent} components={components} />
    </div>
  );
}