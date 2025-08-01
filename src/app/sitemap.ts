import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sumandey.com'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/monster-techno`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

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