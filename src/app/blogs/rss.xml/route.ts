import { getAllPosts } from '@/lib/blog'

export async function GET() {
  const posts = getAllPosts()
  const baseUrl = 'https://www.sumandey.com'

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Suman Dey - Technical Blog</title>
    <description>Technical blog by Suman Dey featuring insights on full stack development, React, Node.js, PostgreSQL, and modern web technologies. Learn from real-world experiences and practical tutorials.</description>
    <link>${baseUrl}/blogs</link>
    <atom:link href="${baseUrl}/blogs/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <copyright>© ${new Date().getFullYear()} Suman Dey. All rights reserved.</copyright>
    <managingEditor>sumandey@example.com (Suman Dey)</managingEditor>
    <webMaster>sumandey@example.com (Suman Dey)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()}</pubDate>
    <ttl>1440</ttl>
    <generator>Next.js</generator>
    <image>
      <url>${baseUrl}/suman-dey-image.png</url>
      <title>Suman Dey</title>
      <link>${baseUrl}</link>
      <width>400</width>
      <height>400</height>
      <description>Suman Dey - Full Stack Developer</description>
    </image>
    ${posts
      .slice(0, 10)
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blogs/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blogs/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
      <category><![CDATA[Technology]]></category>
      ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('')}
      <content:encoded><![CDATA[
        <p>${post.excerpt}</p>
        <p><strong>Reading time:</strong> ${post.readTime}</p>
        <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
        <p><a href="${baseUrl}/blogs/${post.slug}">Read the full article on sumandey.com</a></p>
      ]]></content:encoded>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  })
}

export const dynamic = 'force-static'