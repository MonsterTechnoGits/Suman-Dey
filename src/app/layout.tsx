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
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollDirectionIndicator from "@/components/ScrollDirectionIndicator";

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
  title: "Suman Dey | Senior Full Stack Developer & Modern Web Solutions Expert",
  description:
    "Passionate Senior Full Stack Developer with 7+ years of experience building sleek, scalable web applications. Expert in React.js, Node.js, TypeScript, and modern cloud technologies. Creating high-performance, user-friendly digital solutions that merge modern design with robust backend functionality.",
  openGraph: {
    title: "Suman Dey | Senior Full Stack Developer & Modern Web Solutions Expert",
    description:
      "Passionate Senior Full Stack Developer with 7+ years building sleek, scalable web applications. Specializing in React.js, Node.js, TypeScript & modern cloud technologies. View portfolio of high-performance digital solutions.",
    url: "https://www.sumandey.com",
    type: "website",
    siteName: "Suman Dey Portfolio",
    images: [
      {
        url: "https://www.sumandey.com/suman-dey-image.png",
        width: 1200,
        height: 630,
        alt: "Suman Dey - Senior Full Stack Developer & Modern Web Solutions Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Dey | Senior Full Stack Developer & Modern Web Solutions Expert",
    description:
      "Passionate Senior Full Stack Developer with 7+ years building sleek, scalable web applications. Expert in React.js, Node.js, TypeScript & modern cloud technologies.",
    images: ["https://www.sumandey.com/suman-dey-image.png"],
    creator: "@SumanDey",
  },
  authors: [{ name: "Suman Dey", url: "https://www.sumandey.com" }],
  keywords: [
    "Suman Dey",
    "Senior Full Stack Developer",
    "React.js Developer",
    "Node.js Expert", 
    "TypeScript Specialist",
    "Modern Web Solutions",
    "Scalable Web Applications",
    "High-Performance Applications",
    "Cloud Technologies",
    "Digital Solutions",
    "Frontend Development",
    "Backend Architecture",
    "Full Stack Engineer",
    "JavaScript Expert",
    "Web Application Developer",
    "User-Friendly Design",
    "Robust Backend Functionality",
    "Clean Efficient Code",
    "Technical Challenges",
    "Intuitive User Experiences",
    "MonsterTechno YouTube",
    "Tech Tutorial Videos",
    "Programming Education",
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
    "Suman Dey is a passionate Senior Full Stack Developer with over 7 years of experience building sleek, scalable web applications. His expertise lies in creating high-performance, user-friendly digital solutions that merge modern design with robust backend functionality, specializing in React.js, Node.js, TypeScript, and modern cloud technologies.",
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
    "https://youtube.com/MonsterTechno",
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
    description:
      "IT consulting firm specializing in enterprise software solutions, web development, and digital transformation services.",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationalCategory: "Software Engineering",
    description:
      "Develops both frontend and backend components of web applications using modern JavaScript frameworks and technologies.",
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
    "7+ years building sleek, scalable web applications with modern technologies",
    "Created high-performance, user-friendly digital solutions for 100+ projects",
    "Architected robust backend functionality merged with modern design",
    "Expert in React.js, Node.js, TypeScript, and modern cloud technologies",
    "Solved complex technical challenges with clean, efficient code",
    "Delivered intuitive user experiences across diverse industry verticals",
    "Led cross-functional development teams and mentored junior developers",
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
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest'></link>
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
          <SmoothScrollProvider>
            <div className='w-full h-screen bg-black relative'>
              {/* Scroll feedback components */}
              <ScrollProgressIndicator />
              <ScrollToTopButton />
              <ScrollDirectionIndicator />
              
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
                    <div className='w-full h-dvh flex flex-col lg:flex-row justify-center items-center px-2 sm:px-6 md:px-10 lg:px-10 xl:px-10 py-6 sm:py-10 lg:py-20 gap-4 sm:gap-6 lg:gap-5'>
                      <ProfileCard />
                      <div className='w-full h-full rounded-3xl bg-[#1212127e] backdrop-blur-2xl flex-1'>
                        <Noise
                          patternSize={250}
                          patternScaleX={1}
                          patternScaleY={1}
                          patternRefreshInterval={2}
                          patternAlpha={15}
                        >
                          <main className='w-full h-full flex flex-col items-center justify-start'>
                            <div className='scroll-container w-full px-4 sm:px-6 md:px-10 lg:px-20 pb-[110px] pt-6 sm:pt-10 lg:pt-20 overflow-auto scrollbar-dark scroll-smooth flex-1'>
                              {children}
                            </div>
                            <div className='relative w-full z-50 h-[80px] sm:h-[100px] bg-gradient-to-t from-[#121212] via-[#121212d5] to-[#121212ea] rounded-b-3xl backdrop-blur-2xl'>
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
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
