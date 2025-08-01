import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure URLs always end with a trailing slash for consistency
  trailingSlash: true,

  // Enforce React’s strict mode for highlighting potential issues early
  reactStrictMode: true,


  // Remove the Next.js header to prevent exposing framework details
  poweredByHeader: false,

  // Enable static export output for GitHub Pages deployment
  output: "export",


  // Future configuration options like rewrites, redirects, or experimental features
  // can be added here to further optimize SEO-friendly URL structures.
  
  // Configure MDX file extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX(nextConfig);
