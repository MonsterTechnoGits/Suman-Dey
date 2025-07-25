import type { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
  title: "Blog - Suman Dey | Coming Soon",
  description: "Technical blog by Suman Dey coming soon. Stay tuned for insights on full stack development, React, Node.js, PostgreSQL, and modern web technologies.",
  keywords: [
    "Suman Dey",
    "Suman Dey Blog",
    "Technical Blog",
    "Full Stack Development",
    "React",
    "Node.js",
    "PostgreSQL",
    "Modern Web Technologies",
    "Programming Blog",
    "Software Development"
  ],
  openGraph: {
    title: "Blog - Suman Dey | Coming Soon",
    description: "Technical blog by Suman Dey coming soon. Stay tuned for insights on full stack development, React, Node.js, PostgreSQL, and modern web technologies.",
    url: "https://www.sumandey.com/blogs",
    type: "website",
    siteName: "Suman Dey Portfolio",
    images: [
      {
        url: "https://www.sumandey.com/suman-dey-image.png",
        width: 1200,
        height: 630,
        alt: "Suman Dey - Technical Blog Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Suman Dey | Coming Soon",
    description: "Technical blog by Suman Dey coming soon. Stay tuned for insights on full stack development and modern web technologies.",
    images: ["https://www.sumandey.com/suman-dey-image.png"],
  },
  authors: [{ name: "Suman Dey", url: "https://www.sumandey.com" }],
  creator: "Suman Dey",
  alternates: {
    canonical: "https://www.sumandey.com/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Icon icon="material-symbols:edit-document-outline" className="text-white/60 text-8xl mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My Blog is Coming Soon!
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            I&apos;m really excited to share my thoughts and experiences about full stack development, the latest web technologies, and all the lessons I&apos;ve learned along the way. Stay tuned!
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What I&apos;m Planning to Share</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Behind-the-Scenes Stories</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Real challenges I&apos;ve faced with React & Node.js</li>
                <li>• How I optimize PostgreSQL for better performance</li>
                <li>• My take on the latest JavaScript frameworks</li>
                <li>• Architecture decisions that actually work</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-green-300 mb-3">Hands-On Learning</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Projects we&apos;ll build together step-by-step</li>
                <li>• How I solve tricky problems in my daily work</li>
                <li>• Code examples from real projects</li>
                <li>• Honest insights about working in tech</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Let&apos;s Stay Connected!</h3>
          <p className="text-gray-300 mb-6">
            While I&apos;m putting together the blog, you can catch me on YouTube where I share video tutorials, or connect with me on social media. I love chatting with fellow developers!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://youtube.com/MonsterTechno" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full hover:bg-red-500/30 transition-colors"
            >
              <Icon icon="mdi:youtube" className="text-lg" />
              YouTube
            </a>
            <a 
              href="https://www.linkedin.com/in/imsumandey/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full hover:bg-blue-500/30 transition-colors"
            >
              <Icon icon="mdi:linkedin" className="text-lg" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/MonsterTechnoGits" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-500/20 text-gray-300 px-4 py-2 rounded-full hover:bg-gray-500/30 transition-colors"
            >
              <Icon icon="mdi:github" className="text-lg" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}