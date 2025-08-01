import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import fs from 'fs'
import path from 'path'

// Required for static export
export const dynamic = 'force-static'

function getStaticPages(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sumandey.com'
  const currentDate = new Date()
  const appDir = path.join(process.cwd(), 'src/app')
  
  const pages: MetadataRoute.Sitemap = []
  
  // Page priority mapping
  const pagePriorities: Record<string, { priority: number; changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }> = {
    '/': { priority: 1.0, changeFreq: 'weekly' },
    '/blogs': { priority: 0.9, changeFreq: 'weekly' },
    '/about': { priority: 0.8, changeFreq: 'monthly' },
    '/contact': { priority: 0.7, changeFreq: 'monthly' },
    '/monster-techno': { priority: 0.6, changeFreq: 'monthly' },
  }
  
  function scanDirectory(dir: string, basePath: string = '') {
    if (!fs.existsSync(dir)) return
    
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    // Check for page.tsx in current directory first
    if (fs.existsSync(path.join(dir, 'page.tsx'))) {
      const route = basePath === '' ? '/' : basePath
      const pageConfig = pagePriorities[route] || { priority: 0.5, changeFreq: 'monthly' as const }
      
      pages.push({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: pageConfig.changeFreq,
        priority: pageConfig.priority,
      })
    }
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      if (entry.isDirectory()) {
        // Skip dynamic routes, special folders, and API routes
        if (entry.name.startsWith('[') || 
            entry.name.startsWith('_') || 
            entry.name === 'api' ||
            entry.name === 'rss.xml') {
          continue
        }
        
        const newBasePath = basePath === '' ? `/${entry.name}` : `${basePath}/${entry.name}`
        
        // Recursively scan subdirectories
        scanDirectory(fullPath, newBasePath)
      }
    }
  }
  
  // Scan the app directory
  scanDirectory(appDir)
  
  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sumandey.com'
  
  // Get all static pages dynamically
  const staticPages = getStaticPages()

  // Get all blog posts dynamically with priority for latest posts
  const posts = getAllPosts()
  const blogPages = posts.map((post, index) => {
    let priority = 0.6
    
    // Higher priority for latest 3 posts
    if (index < 3) {
      priority = 0.9
    } else if (post.featured) {
      priority = 0.8
    } else if (index < 10) {
      priority = 0.7
    }
    
    return {
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: index < 5 ? 'weekly' as const : 'monthly' as const,
      priority,
    }
  })

  return [...staticPages, ...blogPages]
}