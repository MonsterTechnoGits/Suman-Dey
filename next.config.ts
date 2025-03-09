import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure URLs always end with a trailing slash for consistency
  trailingSlash: true,

  // Enforce React’s strict mode for highlighting potential issues early
  reactStrictMode: true,

  // Enable SWC minification for faster builds and smaller bundles
  swcMinify: true,

  // Remove the Next.js header to prevent exposing framework details
  poweredByHeader: false,

  // Enable static export output for GitHub Pages deployment
  output: "export",

  // Custom HTTP headers to reinforce SEO and security best practices
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "all", // Ensures that search engines index your pages
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Additional headers can be added here if needed
        ],
      },
    ];
  },

  // Future configuration options like rewrites, redirects, or experimental features
  // can be added here to further optimize SEO-friendly URL structures.
};

export default nextConfig;
