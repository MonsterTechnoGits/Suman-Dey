import { BlogPost } from '@/lib/blog'

interface BlogJsonLdProps {
  post: BlogPost
}

export default function BlogJsonLd({ post }: BlogJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://www.sumandey.com',
      sameAs: [
        'https://www.linkedin.com/in/imsumandey/',
        'https://github.com/MonsterTechnoGits',
        'https://youtube.com/MonsterTechno'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Suman Dey',
      url: 'https://www.sumandey.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sumandey.com/suman-dey-image.png',
        width: 400,
        height: 400
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://www.sumandey.com/blogs/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.sumandey.com/blogs/${post.slug}`
    },
    keywords: post.tags.join(', '),
    articleSection: 'Technology',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: 'Suman Dey Technical Blog',
      url: 'https://www.sumandey.com/blogs'
    },
    about: post.tags.map(tag => ({
      '@type': 'Thing',
      name: tag
    })),
    timeRequired: post.readTime,
    wordCount: post.content.split(' ').length,
    image: {
      '@type': 'ImageObject',
      url: 'https://www.sumandey.com/suman-dey-image.png',
      width: 1200,
      height: 630,
      caption: post.title
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}