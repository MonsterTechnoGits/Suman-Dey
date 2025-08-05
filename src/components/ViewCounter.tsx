'use client'

import { useEffect, useState } from 'react'

interface ViewCounterProps {
  slug: string
}

interface CountAPIResponse {
  value: number
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  const [viewCount, setViewCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const incrementView = async () => {
      if (!mounted) return
      
      try {
        setIsLoading(true)
        setError(null)
        
        // Check if this session has already viewed this post
        const sessionKey = `viewed_${slug}_${Date.now().toString().slice(0, -5)}` // 5-minute sessions
        const hasViewedInSession = sessionStorage.getItem(sessionKey)
        
        const namespace = 'sumandey.com'
        const key = `blog-${slug}`
        
        let apiUrl: string
        
        if (hasViewedInSession) {
          // Just get the count without incrementing
          apiUrl = `https://api.countapi.xyz/get/${namespace}/${key}`
        } else {
          // Increment the count
          apiUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`
          // Mark as viewed in this session
          sessionStorage.setItem(sessionKey, 'true')
        }
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data: CountAPIResponse = await response.json()
        setViewCount(data.value || 0)
        
      } catch (err) {
        console.error('Failed to fetch view count:', err)
        setError('Unable to load view count')
        
        // Fallback to localStorage for offline functionality
        const localKey = `blog_view_${slug}`
        const sessionKey = `viewed_${slug}_session`
        
        // Check if already viewed in this session
        const hasViewedInSession = sessionStorage.getItem(sessionKey)
        
        let localCount = parseInt(localStorage.getItem(localKey) || '0')
        
        if (!hasViewedInSession) {
          localCount++
          localStorage.setItem(localKey, localCount.toString())
          sessionStorage.setItem(sessionKey, 'true')
        }
        
        setViewCount(localCount)
        
      } finally {
        setIsLoading(false)
      }
    }

    // Add a small delay to prevent rapid fire requests
    const timer = setTimeout(incrementView, 500)
    
    return () => clearTimeout(timer)
  }, [slug, mounted])

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span>👁️</span>
        <span>— views</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <span>👁️</span>
      <span>
        {isLoading ? (
          <span className="animate-pulse">Loading...</span>
        ) : error ? (
          <span className="text-red-400" title={error}>
            {viewCount} views
          </span>
        ) : (
          <span>{viewCount.toLocaleString()} views</span>
        )}
      </span>
    </div>
  )
}