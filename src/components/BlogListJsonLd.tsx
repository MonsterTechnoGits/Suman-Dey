import { BlogPost } from '@/lib/blog'

interface BlogListJsonLdProps {
  posts: BlogPost[]
}

export default function BlogListJsonLd({ posts }: BlogListJsonLdProps) {
  const latestPosts = posts.slice(0, 3)
  
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Suman Dey Technical Blog',
      description: 'Technical blog by Suman Dey featuring insights on full stack development, React, Node.js, PostgreSQL, and modern web technologies.',
      url: 'https://www.sumandey.com/blogs',
      author: {
        '@type': 'Person',
        name: 'Suman Dey',
        url: 'https://www.sumandey.com',
        sameAs: [
          'https://www.linkedin.com/in/imsumandey/',
          'https://github.com/MonsterTechnoGits',
          'https://youtube.com/MonsterTechno'
        ],
        jobTitle: 'Full Stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance'
        }
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
      inLanguage: 'en-US',
      about: [
        {
          '@type': 'Thing',
          name: 'Web Development'
        },
        {
          '@type': 'Thing',
          name: 'Full Stack Development'
        },
        {
          '@type': 'Thing',
          name: 'React'
        },
        {
          '@type': 'Thing',
          name: 'Node.js'
        },
        {
          '@type': 'Thing',
          name: 'JavaScript'
        },
        {
          '@type': 'Thing',
          name: 'TypeScript'
        }
      ],
      blogPost: posts.map(post => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: `https://www.sumandey.com/blogs/${post.slug}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Person',
          name: post.author
        },
        keywords: post.tags.join(', '),
        wordCount: post.content.split(' ').length,
        timeRequired: post.readTime,
        articleSection: 'Technology',
        isPartOf: {
          '@type': 'Blog',
          name: 'Suman Dey Technical Blog',
          url: 'https://www.sumandey.com/blogs'
        }
      })),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.sumandey.com/blogs'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Latest Blog Posts - Suman Dey',
      description: 'Latest technical articles and tutorials by Suman Dey',
      url: 'https://www.sumandey.com/blogs',
      numberOfItems: latestPosts.length,
      itemListElement: latestPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          '@id': `https://www.sumandey.com/blogs/${post.slug}`,
          url: `https://www.sumandey.com/blogs/${post.slug}`,
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            '@type': 'Person',
            name: post.author,
            url: 'https://www.sumandey.com'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Suman Dey',
            url: 'https://www.sumandey.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.sumandey.com/suman-dey-image.png'
            }
          },
          image: {
            '@type': 'ImageObject',
            url: 'https://www.sumandey.com/suman-dey-image.png',
            width: 1200,
            height: 630
          },
          keywords: post.tags.join(', '),
          articleSection: 'Technology',
          timeRequired: post.readTime,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.sumandey.com/blogs/${post.slug}`
          }
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Suman Dey - Full Stack Developer',
      url: 'https://www.sumandey.com',
      description: 'Portfolio and technical blog of Suman Dey, Full Stack Developer specializing in React, Node.js, and modern web technologies',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.sumandey.com/blogs?search={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      },
      author: {
        '@type': 'Person',
        name: 'Suman Dey',
        url: 'https://www.sumandey.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Suman Dey',
        url: 'https://www.sumandey.com'
      }
    }
  ]

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}