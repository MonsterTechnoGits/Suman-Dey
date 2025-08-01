import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blogs')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  readTime: string
  content: string
  featured?: boolean
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        author: matterResult.data.author || 'Suman Dey',
        tags: matterResult.data.tags || [],
        readTime: matterResult.data.readTime || '5 min read',
        content: matterResult.content,
        featured: matterResult.data.featured || false,
      } as BlogPost
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      console.log(`Post not found: ${fullPath}`)
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Validate required fields
    if (!matterResult.data.title) {
      console.error(`Missing title in post: ${slug}`)
      return null
    }

    const post = {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      author: matterResult.data.author || 'Suman Dey',
      tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : [],
      readTime: matterResult.data.readTime || '5 min read',
      content: matterResult.content || '',
      featured: Boolean(matterResult.data.featured),
    } as BlogPost

    console.log(`Successfully loaded post: ${slug}`)
    return post
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = new Set<string>()
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}