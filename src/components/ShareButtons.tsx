'use client'

import { Icon } from "@iconify/react/dist/iconify.js"

interface ShareButtonsProps {
  slug: string
  title: string
  author: string
}

export default function ShareButtons({ slug, title, author }: ShareButtonsProps) {
  const url = `https://www.sumandey.com/blogs/${slug}`
  const text = `Check out "${title}" by ${author}`

  return (
    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
      <span className="text-gray-400 text-sm">Share:</span>
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title, text, url })
            } else {
              navigator.clipboard.writeText(`${text} - ${url}`)
              alert('Link copied to clipboard!')
            }
          }}
          className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
          title="Share"
        >
          <Icon icon="mdi:share" className="w-4 h-4 text-gray-400" />
        </button>
        <button
          onClick={() => {
            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
            window.open(tweetUrl, '_blank')
          }}
          className="p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors border border-blue-500/20"
          title="Share on Twitter"
        >
          <Icon icon="mdi:twitter" className="w-4 h-4 text-blue-400" />
        </button>
        <button
          onClick={() => {
            const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
            window.open(linkedinUrl, '_blank')
          }}
          className="p-2 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg transition-colors border border-blue-600/20"
          title="Share on LinkedIn"
        >
          <Icon icon="mdi:linkedin" className="w-4 h-4 text-blue-600" />
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(url)
            alert('Link copied to clipboard!')
          }}
          className="p-2 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-colors border border-green-500/20"
          title="Copy Link"
        >
          <Icon icon="mdi:link" className="w-4 h-4 text-green-400" />
        </button>
      </div>
    </div>
  )
}