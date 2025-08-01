import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from 'next/link'
import type { Metadata } from 'next'
import BlogJsonLd from '@/components/BlogJsonLd'
import MDXContent from '@/components/MDXContent'
import ShareButtons from '@/components/ShareButtons'
import ViewCounter from '@/components/ViewCounter'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params
    const post = getPostBySlug(resolvedParams.slug)
    
    if (!post) {
      return {
        title: 'Post Not Found - Suman Dey',
        description: 'The requested blog post could not be found.',
      }
    }

  const wordCount = post.content.split(' ').length
  const readingTime = Math.ceil(wordCount / 200)

  return {
    title: `${post.title} - Suman Dey | Full Stack Developer Blog`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      'Suman Dey',
      'Full Stack Developer',
      'React',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Web Development',
      'Programming',
      'Tutorial',
      'Tech Blog'
    ],
    authors: [{ 
      name: post.author, 
      url: 'https://www.sumandey.com' 
    }],
    creator: post.author,
    publisher: 'Suman Dey',
    category: 'Technology',
    classification: 'Technical Blog',
    openGraph: {
      title: `${post.title} - Suman Dey`,
      description: post.excerpt,
      url: `https://www.sumandey.com/blogs/${resolvedParams.slug}`,
      type: 'article',
      siteName: 'Suman Dey - Full Stack Developer',
      locale: 'en_US',
      images: [
        {
          url: 'https://www.sumandey.com/suman-dey-image.png',
          width: 1200,
          height: 630,
          alt: `${post.title} by ${post.author}`,
          type: 'image/png',
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      section: 'Technology',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@imsumandey',
      creator: '@imsumandey',
      title: `${post.title} - Suman Dey`,
      description: post.excerpt,
      images: [{
        url: 'https://www.sumandey.com/suman-dey-image.png',
        alt: `${post.title} by ${post.author}`,
        width: 1200,
        height: 630,
      }],
    },
    alternates: {
      canonical: `https://www.sumandey.com/blogs/${resolvedParams.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:author': post.author,
      'article:published_time': post.date,
      'article:modified_time': post.date,
      'article:section': 'Technology',
      'article:tag': post.tags.join(','),
      'reading-time': `${readingTime} minutes`,
      'word-count': wordCount.toString(),
    },
  }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Error Loading Post - Suman Dey',
      description: 'There was an error loading the requested blog post.',
    }
  }
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const resolvedParams = await params
    const post = getPostBySlug(resolvedParams.slug)

    if (!post) {
      notFound()
    }

    const allPosts = getAllPosts()
    const otherPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 5)

    return (
      <div>
        <BlogJsonLd post={post} />
        <div className="min-h-screen">
          <div className="">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main content */}
              <div className="lg:flex-1">
                {/* Back to blog link */}
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
                >
                  <Icon icon="mdi:arrow-left" className="text-base" />
                  Back to Blog
                </Link>

                {/* Article header */}
                <article className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <header className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                      {post.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <span>👤</span>
                        <span>{post.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span>⏱️</span>
                        <span>{post.readTime}</span>
                      </div>

                      <ViewCounter slug={resolvedParams.slug} />
                    </div>

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {post.excerpt && (
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    <ShareButtons 
                      slug={resolvedParams.slug}
                      title={post.title}
                      author={post.author}
                    />
                  </header>

                  {/* Article content */}
                  <MDXContent content={post.content} />
                </article>

                {/* Navigation to other posts */}
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-6 py-3 rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    ← View All Posts
                  </Link>
                </div>
              </div>

              {/* Right sidebar with other blogs */}
              <div className="lg:w-80">
                <div className="sticky">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">Other Posts</h3>
                    <div className="space-y-4">
                      {otherPosts.map((otherPost) => (
                        <Link
                          key={otherPost.slug}
                          href={`/blogs/${otherPost.slug}`}
                          className="block group"
                        >
                          <div className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/5 hover:border-white/20">
                            <h4 className="text-white font-medium text-sm mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                              {otherPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                              <Icon icon="mdi:calendar" className="w-3 h-3" />
                              <time dateTime={otherPost.date}>
                                {new Date(otherPost.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </time>
                              <span>•</span>
                              <Icon icon="mdi:clock-outline" className="w-3 h-3" />
                              <span>{otherPost.readTime}</span>
                            </div>
                            {otherPost.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {otherPost.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {otherPost.tags.length > 2 && (
                                  <span className="px-2 py-1 text-xs text-gray-400">
                                    +{otherPost.tags.length - 2}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {otherPosts.length === 0 && (
                      <p className="text-gray-400 text-sm">No other posts available yet.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error rendering blog post:', error)
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h1 className="text-3xl font-bold text-white mb-4">Error Loading Post</h1>
            <p className="text-gray-300">
              There was an error loading this blog post. Please try again later.
            </p>
          </div>
        </div>
      </div>
    )
  }
}