import type { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogListJsonLd from "@/components/BlogListJsonLd";

export const metadata: Metadata = {
  title: "Technical Blog - Suman Dey | Full Stack Development Insights & Tutorials",
  description:
    "Discover modern web development through Suman Dey's technical blog. Expert insights on React, Node.js, PostgreSQL, TypeScript, and full stack development. Real-world tutorials, performance tips, and development best practices.",
  keywords: [
    "Suman Dey Blog",
    "Technical Blog",
    "Full Stack Development Blog",
    "React Tutorials",
    "Node.js Development",
    "PostgreSQL Optimization",
    "Modern Web Technologies",
    "JavaScript Best Practices",
    "TypeScript Guide",
    "Web Development Tutorials",
    "React Performance Optimization",
    "Next.js Development",
    "Programming Tips",
    "Code Examples",
    "Developer Insights",
    "Software Engineering Blog",
    "Web Development Articles",
    "Frontend Development",
    "Backend Development",
    "Database Design",
  ],
  authors: [{ name: "Suman Dey", url: "https://www.sumandey.com" }],
  creator: "Suman Dey",
  publisher: "Suman Dey",
  category: "Technology",
  classification: "Technical Blog",
  openGraph: {
    title: "Technical Blog - Suman Dey | Full Stack Development Insights",
    description:
      "Discover modern web development through expert insights on React, Node.js, PostgreSQL, and full stack development. Real-world tutorials and best practices.",
    url: "https://www.sumandey.com/blogs",
    type: "website",
    siteName: "Suman Dey - Full Stack Developer",
    locale: "en_US",
    images: [
      {
        url: "https://www.sumandey.com/suman-dey-image.png",
        width: 1200,
        height: 630,
        alt: "Suman Dey - Technical Blog featuring full stack development insights and tutorials",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@imsumandey",
    creator: "@imsumandey",
    title: "Technical Blog - Suman Dey | Full Stack Development",
    description:
      "Expert insights on React, Node.js, PostgreSQL, and modern web development. Real-world tutorials and programming best practices.",
    images: [
      {
        url: "https://www.sumandey.com/suman-dey-image.png",
        alt: "Suman Dey Technical Blog - Full Stack Development Insights",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.sumandey.com/blogs",
    types: {
      "application/rss+xml": [
        {
          url: "https://www.sumandey.com/blogs/rss.xml",
          title: "Suman Dey Technical Blog RSS Feed",
        },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "og:site_name": "Suman Dey - Full Stack Developer",
    "og:locale": "en_US",
    "og:type": "website",
    "article:author": "Suman Dey",
    "article:section": "Technology",
    "blog:author": "Suman Dey",
    "blog:language": "en-US",
    "blog:category": "Technology",
    rating: "General",
    "geo.region": "IN",
    "geo.country": "India",
  },
};

export default function BlogsPage() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured);

  if (posts.length === 0) {
    return (
      <div>
        <BlogListJsonLd posts={[]} />
        <div className='min-h-screen py-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='mb-12'>
              <Icon
                icon='material-symbols:edit-document-outline'
                className='text-white/60 text-8xl mx-auto mb-8'
              />
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                My Blog is Coming Soon!
              </h1>
              <p className='text-gray-300 text-lg md:text-xl max-w-2xl mx-auto'>
                I&apos;m really excited to share my thoughts and experiences about full stack
                development, the latest web technologies, and all the lessons I&apos;ve learned
                along the way. Stay tuned!
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12'>
              <h2 className='text-2xl font-bold text-white mb-6'>
                What I&apos;m Planning to Share
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='text-left'>
                  <h3 className='text-lg font-semibold text-blue-300 mb-3'>
                    Behind-the-Scenes Stories
                  </h3>
                  <ul className='text-gray-300 space-y-2'>
                    <li>• Real challenges I&apos;ve faced with React & Node.js</li>
                    <li>• How I optimize PostgreSQL for better performance</li>
                    <li>• My take on the latest JavaScript frameworks</li>
                    <li>• Architecture decisions that actually work</li>
                  </ul>
                </div>
                <div className='text-left'>
                  <h3 className='text-lg font-semibold text-green-300 mb-3'>Hands-On Learning</h3>
                  <ul className='text-gray-300 space-y-2'>
                    <li>• Projects we&apos;ll build together step-by-step</li>
                    <li>• How I solve tricky problems in my daily work</li>
                    <li>• Code examples from real projects</li>
                    <li>• Honest insights about working in tech</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/10'>
              <h3 className='text-xl font-bold text-white mb-4'>Let&apos;s Stay Connected!</h3>
              <p className='text-gray-300 mb-6'>
                While I&apos;m putting together the blog, you can catch me on YouTube where I share
                video tutorials, or connect with me on social media. I love chatting with fellow
                developers!
              </p>
              <div className='flex flex-wrap gap-4 justify-center'>
                <a
                  href='https://youtube.com/MonsterTechno'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full hover:bg-red-500/30 transition-colors'
                >
                  <Icon icon='mdi:youtube' className='text-lg' />
                  YouTube
                </a>
                <a
                  href='https://www.linkedin.com/in/imsumandey/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full hover:bg-blue-500/30 transition-colors'
                >
                  <Icon icon='mdi:linkedin' className='text-lg' />
                  LinkedIn
                </a>
                <a
                  href='https://github.com/MonsterTechnoGits'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-gray-500/20 text-gray-300 px-4 py-2 rounded-full hover:bg-gray-500/30 transition-colors'
                >
                  <Icon icon='mdi:github' className='text-lg' />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <BlogListJsonLd posts={posts} />

      {/* Breadcrumbs */}
      <nav aria-label='Breadcrumb'>
        <ol className='flex items-center space-x-2 text-sm text-gray-400'>
          <li>
            <Link href='/' className='hover:text-white transition-colors'>
              Home
            </Link>
          </li>
          <li className='flex items-center'>
            <Icon icon='mdi:chevron-right' className='w-4 h-4 mx-2' />
            <span className='text-white font-medium'>Blog</span>
          </li>
        </ol>
      </nav>

      <div className='min-h-screen pb-8 sm:pb-12'>
        <div className='px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <div className='text-center py-6 sm:py-8 lg:py-12'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4'>
                Technical{" "}
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Blog
                </span>
              </h1>
              <p className='text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6 px-4'>
                Insights on full stack development, modern web technologies, and lessons learned
                along the way
              </p>
              <div className='flex flex-wrap justify-center gap-3 sm:gap-4 text-sm text-gray-400'>
                <div className='flex items-center gap-2'>
                  <Icon icon='mdi:post' className='w-4 h-4' />
                  <span>{posts.length} articles</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Icon icon='mdi:star' className='w-4 h-4' />
                  <span>{featuredPosts.length} featured</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Icon icon='mdi:rss' className='w-4 h-4' />
                  <Link href='/blogs/rss.xml' className='hover:text-white transition-colors'>
                    RSS Feed
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <section className='mb-8 sm:mb-12'>
              <div className='flex items-center gap-3 mb-4 sm:mb-6'>
                <Icon icon='mdi:star' className='w-5 h-5 sm:w-6 sm:h-6 text-yellow-400' />
                <h2 className='text-xl sm:text-2xl lg:text-2xl font-bold text-white'>
                  Featured Articles
                </h2>
              </div>

              <div className='grid gap-4 sm:gap-6 lg:grid-cols-2'>
                {featuredPosts.slice(0, 2).map((post) => (
                  <article
                    key={post.slug}
                    className='group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20'
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                    <div className='relative z-10'>
                      <div className='flex items-center gap-3 mb-4'>
                        <span className='inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs sm:text-sm font-medium rounded-full border border-yellow-500/30'>
                          <Icon icon='mdi:star' className='w-3 h-3' />
                          Featured
                        </span>
                        <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-400'>
                          <Icon icon='mdi:calendar' className='w-4 h-4' />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      </div>

                      <h3 className='text-xl sm:text-2xl lg:text-1xl font-bold text-white mb-3 sm:mb-4 leading-tight'>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className='hover:text-blue-400 transition-colors'
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className='text-gray-300 text-base sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2'>
                        {post.excerpt}
                      </p>

                      <div className='flex flex-wrap gap-2 mb-4 sm:mb-6'>
                        {post.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className='px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400'>
                          <div className='flex items-center gap-1'>
                            <Icon icon='mdi:clock-outline' className='w-4 h-4' />
                            <span>{post.readTime}</span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Icon icon='mdi:account' className='w-4 h-4' />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <Link
                          href={`/blogs/${post.slug}`}
                          className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium transition-all duration-300 hover:gap-3 group/link'
                        >
                          Read Article
                          <Icon
                            icon='mdi:arrow-right'
                            className='w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/link:translate-x-1'
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Posts Section */}
          <section>
            <div className='flex items-center gap-3 mb-4 sm:mb-6'>
              <Icon
                icon='mdi:format-list-bulleted'
                className='w-5 h-5 sm:w-6 sm:h-6 text-blue-400'
              />
              <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white'>
                {featuredPosts.length > 0 ? "All Articles" : "Latest Articles"}
              </h2>
            </div>

            <div className='grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className='group bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 flex flex-col h-full'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='flex-1 flex flex-col'>
                    <div className='flex items-center justify-between mb-3 sm:mb-4'>
                      <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-400'>
                        <Icon icon='mdi:calendar' className='w-4 h-4' />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      {post.featured && (
                        <span className='inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full'>
                          <Icon icon='mdi:star' className='w-3 h-3' />
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2 leading-tight'>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className='hover:text-blue-400 transition-colors'
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className='text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-1'>
                      {post.excerpt}
                    </p>

                    {post.tags.length > 0 && (
                      <div className='flex flex-wrap gap-2 mb-3 sm:mb-4'>
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className='px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30'
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className='px-2 py-1 text-xs text-gray-400 bg-gray-500/10 rounded-full border border-gray-500/30'>
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className='flex items-center justify-between pt-3 sm:pt-4 border-t border-white/5'>
                    <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-400'>
                      <Icon icon='mdi:clock-outline' className='w-4 h-4' />
                      <span>{post.readTime}</span>
                    </div>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium transition-all duration-300 hover:gap-3 group/link'
                    >
                      Read more
                      <Icon
                        icon='mdi:arrow-right'
                        className='w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1'
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter/RSS Section */}
          <section className='mt-8 sm:mt-12 text-center'>
            <div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-white/10'>
              <Icon
                icon='mdi:rss'
                className='w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4'
              />
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4'>
                Stay Updated
              </h3>
              <p className='text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-4'>
                Subscribe to my RSS feed to get notified about new articles on full stack
                development, web technologies, and programming insights.
              </p>
              <div className='flex flex-wrap gap-3 sm:gap-4 justify-center'>
                <Link
                  href='/blogs/rss.xml'
                  className='inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-blue-500/30 transition-colors text-sm sm:text-base font-medium'
                >
                  <Icon icon='mdi:rss' className='w-4 h-4 sm:w-5 sm:h-5' />
                  RSS Feed
                </Link>
                <a
                  href='https://www.linkedin.com/in/imsumandey/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-gray-500/20 text-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-gray-500/30 transition-colors text-sm sm:text-base font-medium'
                >
                  <Icon icon='mdi:linkedin' className='w-4 h-4 sm:w-5 sm:h-5' />
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
