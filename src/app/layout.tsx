import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ProfileCard from "@/components/ProfileCard";
import ClickSpark from "@/components/reactbits/ClickSpark";
import Noise from "@/components/reactbits/Noise";
import Particles from "@/components/reactbits/Particles";
import ClientInteractiveDock from "@/components/ClientInteractiveDock";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Base URL for generating absolute URLs in metadata
  metadataBase: new URL("https://www.sumandey.com"),
  title: "Suman Dey - Senior Full Stack Developer",
  description:
    "Explore the portfolio of Suman Dey, a Senior Full Stack Developer specializing in modern web technologies like JavaScript, React, Node.js, and TypeScript. With a strong focus on UI/UX design and scalable software solutions, discover innovative projects, detailed case studies, and a commitment to excellence.",
  openGraph: {
    title: "Suman Dey - Senior Full Stack Developer",
    description:
      "Discover Suman Dey’s expertise in modern web technologies, including JavaScript, React, Node.js, and TypeScript. Explore innovative projects, detailed case studies, and insights into scalable software solutions and UI/UX design.",
    url: "https://www.sumandey.com",
    type: "website",
    siteName: "Suman Dey",
    images: [
      {
        url: "/suman-dey-image.png",
        width: 800,
        height: 600,
        alt: "Suman Dey Portfolio Image",
      },
    ],
  },
  // Twitter card metadata for enhanced social sharing
  twitter: {
    card: "summary_large_image",
    title: "Suman Dey - Senior Full Stack Developer",
    description:
      "Explore the portfolio of Suman Dey - a developer specializing in modern web technologies, UI/UX design, and scalable software solutions.",
    images: ["/suman-dey-image.png"],
  },
  authors: [{ name: "Suman Dey", url: "https://www.sumandey.com" }],
  keywords: [
    "Suman Dey",
    "Full Stack Developer",
    "Web Developer",
    "UI/UX Design",
    "Software Solutions",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "Senior Developer",
    "Scalable Software",
    "Modern Web Technologies",
  ],
  creator: "Suman Dey",
  applicationName: "Suman Dey - Senior Full Stack Developer",
  category: "Portfolio",
  // Directives for search engine crawlers
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
  // Set theme color for browsers on mobile devices
  themeColor: "#ffffff",
  // Define canonical URL to avoid duplicate content issues
  alternates: {
    canonical: "https://www.sumandey.com",
  },
};

// Define the JSON-LD structured data for your Google search card
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suman Dey",
  url: "https://www.sumandey.com",
  image: "https://www.sumandey.com/suman-dey-image.png",
  jobTitle: "Senior Full Stack Developer",
  description:
    "Suman Dey is a seasoned Senior Full Stack Developer with a proven track record in modern web technologies, UI/UX design, and scalable software solutions. He specializes in creating responsive and intuitive applications using JavaScript, React, Node.js, and TypeScript. His work emphasizes performance, user-centric design, and agile development practices, underscoring his commitment to innovation and excellence in a rapidly evolving digital landscape.",
  sameAs: [
    "https://github.com/MonsterTechnoGits",
    "https://www.linkedin.com/in/imsumandey/",
    "https://www.facebook.com/ImSumanDeyy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* Inject structured data for Google search card */}
      <Script id='structured-data' strategy='beforeInteractive' type='application/ld+json'>
        {JSON.stringify(structuredData)}
      </Script>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='w-full h-screen bg-black relative'>
            {/* Particles component placed behind the overlay */}
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={500}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={200}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            >
              <div className='w-full h-screen absolute top-0 z-10'>
                <ClickSpark
                  sparkColor='#fff'
                  sparkSize={10}
                  sparkRadius={15}
                  sparkCount={8}
                  duration={400}
                >
                  <div className='w-full h-full flex flex-col md:flex-row justify-center items-center px-20 py-20 gap-10'>
                    <ProfileCard />
                    <div className='w-full h-full rounded-3xl bg-[#1212127e] backdrop-blur-2xl'>
                      <Noise
                        patternSize={250}
                        patternScaleX={1}
                        patternScaleY={1}
                        patternRefreshInterval={2}
                        patternAlpha={15}
                      >
                        <main className='w-full h-full flex flex-col justify-center items-center gap-3 relative z-10'>
                          {children}
                          <ClientInteractiveDock />
                        </main>
                      </Noise>
                    </div>
                  </div>
                </ClickSpark>
              </div>
            </Particles>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
