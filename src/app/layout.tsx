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

// Important: Improved meta descriptions with primary keywords early in the text
export const metadata: Metadata = {
  metadataBase: new URL("https://www.sumandey.com"),
  title: "Suman Dey | Senior Full Stack Developer & React Expert",
  description:
    "Senior Full Stack Developer Suman Dey specializes in React, Node.js, TypeScript and modern JavaScript frameworks. Experienced in building responsive web applications, UI/UX design and scalable backend solutions.",
  openGraph: {
    title: "Suman Dey | Senior Full Stack Developer & React Expert",
    description:
      "Senior Full Stack Developer Suman Dey specializes in React, Node.js, TypeScript and modern JavaScript frameworks. View portfolio showcasing frontend development, backend architecture and full-stack projects.",
    url: "https://www.sumandey.com",
    type: "website",
    siteName: "Suman Dey Portfolio",
    images: [
      {
        url: "/suman-dey-image.png", // Updated to a more descriptive filename
        width: 1200, // Increased for better quality
        height: 630, // Standard OG image size
        alt: "Suman Dey - Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Dey | Senior Full Stack Developer & React Expert",
    description:
      "Senior Full Stack Developer specializing in React, Node.js, and modern JavaScript frameworks. Explore my frontend development and backend projects.",
    images: ["/suman-dey-image.png"],
    creator: "@SumanDey", // Add your Twitter handle if available
  },
  authors: [{ name: "Suman Dey", url: "https://www.sumandey.com" }],
  keywords: [
    "Suman Dey",
    "Senior Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Node.js Developer",
    "Full Stack Engineer",
    "Web Application Developer",
    "UI/UX Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Native Developer",
    "Modern Web Technologies",
  ],
  creator: "Suman Dey",
  applicationName: "Suman Dey Portfolio",
  category: "Technology",
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
  themeColor: "#121212",
  alternates: {
    canonical: "https://www.sumandey.com",
  },
};

// Enhanced schema for Google Knowledge Panel with more professional details
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suman Dey",
  url: "https://www.sumandey.com",
  image: "https://www.sumandey.com/suman-dey-image.png",
  jobTitle: "Senior Full Stack Developer",
  description:
    "Suman Dey is a Senior Full Stack Developer specializing in React, Node.js, TypeScript, and modern JavaScript frameworks. With extensive experience in both frontend and backend development, he creates responsive web applications with a focus on performance and user experience.",
  // Add your birth details here for better Knowledge Panel
  birthDate: "1997-09-21", // Replace with your actual birth date (YYYY-MM-DD format)
  birthPlace: {
    "@type": "Place",
    name: "Contai, West Bengal, India",
  },
  knowsAbout: [
    "React.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "UI/UX Design",
    "Web Application Architecture",
    "RESTful APIs",
    "GraphQL",
    "Next.js",
    "AWS",
    "PostgreSQL",
    "SAPUI5",
    "CI/CD",
    "Docker",
    "Team Leadership",
  ],
  sameAs: [
    "https://github.com/MonsterTechnoGits",
    "https://www.linkedin.com/in/imsumandey/",
    "https://www.facebook.com/ImSumanDeyy",
    "https://www.instagram.com/ImSumanDey",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Vidyasagar University",
    url: "https://www.vidyasagar.ac.in/",
  },
  worksFor: {
    "@type": "Organization",
    name: "ROITech Consulting",
    url: "https://www.roitech.biz", // Replace with actual company URL
    description: "IT consulting firm specializing in enterprise software solutions, web development, and digital transformation services.",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationalCategory: "Software Engineering",
    description: "Develops both frontend and backend components of web applications using modern JavaScript frameworks and technologies.",
    skills: "React.js, Node.js, TypeScript, JavaScript, PostgreSQL, AWS, CI/CD, Team Leadership",
  },
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "West Bengal",
    },
  },
  award: [
    "Team Lead & Technical Architect at ROITech Consulting",
    "7+ Years of Full Stack Development Experience",
    "50+ Successful Project Deployments",
    "Expert in Modern JavaScript Frameworks",
  ],
  accomplishment: [
    "Built high-performance resume search engine with PostgreSQL trigram indexes",
    "Architected scalable systems using Node.js worker threads",
    "Led cross-functional development teams and mentored junior developers",
    "Implemented CI/CD pipelines and AWS cloud deployments",
    "Developed enterprise SAP UI5 applications and hybrid mobile apps",
    "Optimized database performance and API response times",
  ],
  skills:
    "React.js, Node.js, TypeScript, JavaScript, Frontend Development, Backend Development, Full Stack Development, PostgreSQL, AWS, SAPUI5, CI/CD, Docker, Team Leadership",
};

// Create a professional WebPage schema as well
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Suman Dey | Senior Full Stack Developer & React Expert",
  description:
    "Portfolio of Senior Full Stack Developer Suman Dey, showcasing expertise in React, Node.js, TypeScript and modern web development.",
  url: "https://www.sumandey.com",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sumandey.com",
      },
    ],
  },
  mainEntity: {
    "@type": "ProfilePage",
    mainEntityOfPage: "https://www.sumandey.com",
    about: {
      "@id": "https://www.sumandey.com/about",
      "@type": "About",
      name: "Suman Dey",
      description:
        "Senior Full Stack Developer specializing in React, Node.js, TypeScript, and modern JavaScript frameworks. Explore my frontend development and backend projects.",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Properly placed Script components for structured data */}
        <Script
          id='person-schema'
          type='application/ld+json'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ ...personSchema, "@id": "https://www.sumandey.com/#person" }),
          }}
        />
        <Script
          id='webpage-schema'
          type='application/ld+json'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />

        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='w-full h-screen bg-black relative'>
            {/* Particles component placed behind the overlay */}
            <Particles
              particleColors={["#04D9FF", "#39FF14", "#BC13FE", "#FF6EC7", "#FFFF33"]}
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
                  <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 sm:py-10 lg:py-20 gap-4 sm:gap-6 lg:gap-10'>
                    <ProfileCard />
                    <div className='w-full h-full rounded-3xl bg-[#1212127e] backdrop-blur-2xl flex-1'>
                      <Noise
                        patternSize={250}
                        patternScaleX={1}
                        patternScaleY={1}
                        patternRefreshInterval={2}
                        patternAlpha={15}
                      >
                        <main className='w-full h-full relative z-10 overflow-auto'>
                          <div className='w-full px-4 sm:px-6 md:px-10 lg:px-20 pb-[110px] pt-6 sm:pt-10 lg:pt-20'>
                            {children}
                          </div>
                          <div className='fixed bottom-0 left-0 w-full z-50 h-[80px] sm:h-[100px] bg-gradient-to-t from-[#121212] via-[#121212d5] to-[#121212ea] rounded-b-3xl backdrop-blur-2xl'>
                            <ClientInteractiveDock />
                          </div>
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
