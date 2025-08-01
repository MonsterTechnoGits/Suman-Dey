import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClickSpark from "@/components/reactbits/ClickSpark";
import Particles from "@/components/reactbits/Particles";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollDirectionIndicator from "@/components/ScrollDirectionIndicator";
import ConditionalLayout from "@/components/ConditionalLayout";

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
  alternates: {
    canonical: "https://www.sumandey.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

// Enhanced schema for Google Knowledge Panel with more professional details
const personSchema = {
  "@context": "https://schema.org",
  "@type": ["Person", "CreativeWork"],
  "@id": "https://www.sumandey.com/#person",
  name: "Suman Dey",
  alternateName: ["Suman", "ImSumanDey", "MonsterTechno"],
  url: "https://www.sumandey.com",
  mainEntityOfPage: "https://www.sumandey.com",
  image: {
    "@type": "ImageObject",
    url: "https://www.sumandey.com/suman-dey-image.png",
    width: 400,
    height: 400,
    caption: "Suman Dey - Senior Full Stack Developer",
  },
  jobTitle: "Senior Full Stack Developer",
  description:
    "Suman Dey is a passionate Senior Full Stack Developer with over 7 years of experience building sleek, scalable web applications. His expertise lies in creating high-performance, user-friendly digital solutions that merge modern design with robust backend functionality, specializing in React.js, Node.js, TypeScript, and modern cloud technologies.",
  birthDate: "1997-09-21",
  birthPlace: {
    "@type": "Place",
    name: "Contai, West Bengal, India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Contai",
      addressRegion: "West Bengal",
      addressCountry: "India",
    },
  },
  nationality: {
    "@type": "Country",
    name: "India",
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
    "Software Engineering",
    "Web Development",
    "Programming",
    "Technology Consulting",
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
    address: {
      "@type": "PostalAddress",
      addressRegion: "West Bengal",
      addressCountry: "India",
    },
  },
  worksFor: {
    "@type": "Organization",
    name: "ROITech Consulting",
    url: "https://www.roitech.biz",
    description:
      "IT consulting firm specializing in enterprise software solutions, web development, and digital transformation services.",
    foundingLocation: "India",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationalCategory: "15-1254.00",
    description:
      "Develops both frontend and backend components of web applications using modern JavaScript frameworks and technologies.",
    skills: "React.js, Node.js, TypeScript, JavaScript, PostgreSQL, AWS, CI/CD, Team Leadership",
    responsibilities: [
      "Designing and developing scalable web applications",
      "Leading cross-functional development teams",
      "Mentoring junior developers",
      "Architecting robust backend systems",
      "Creating intuitive user interfaces",
    ],
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
  expertise: [
    "Full Stack Web Development",
    "React.js Development",
    "Node.js Backend Development",
    "TypeScript Programming",
    "JavaScript Programming",
    "Database Design and Management",
    "Cloud Technologies",
    "Team Leadership",
    "Software Architecture",
  ],
  seeks: "Challenging full stack development projects and technical leadership opportunities",
};

// Professional Service schema for business queries
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.sumandey.com/#service",
  name: "Suman Dey - Full Stack Development Services",
  description: "Professional full stack web development services specializing in React.js, Node.js, TypeScript, and modern web technologies.",
  url: "https://www.sumandey.com",
  provider: {
    "@id": "https://www.sumandey.com/#person"
  },
  areaServed: [
    {
      "@type": "Country", 
      name: "India"
    },
    {
      "@type": "Place",
      name: "Global Remote"
    }
  ],
  serviceType: [
    "Full Stack Web Development",
    "React.js Development", 
    "Node.js Backend Development",
    "TypeScript Programming",
    "Web Application Architecture",
    "Technical Consulting",
    "Team Leadership",
    "Code Review and Optimization"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Web Application Development",
          description: "End-to-end web application development using React.js, Node.js, and TypeScript"
        }
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Frontend Development",
          description: "Modern, responsive frontend development with React.js and TypeScript"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Backend API Development",
          description: "Scalable backend API development with Node.js and database integration"
        }
      }
    ]
  }
};

// FAQ Schema for common developer questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.sumandey.com/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Suman Dey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suman Dey is a Senior Full Stack Developer with over 7 years of experience building scalable web applications. He specializes in React.js, Node.js, TypeScript, and modern cloud technologies, currently working as a Team Lead at ROITech Consulting."
      }
    },
    {
      "@type": "Question", 
      name: "What does Suman Dey do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suman Dey develops high-performance, user-friendly web applications using modern technologies like React.js, Node.js, and TypeScript. He leads development teams, mentors junior developers, and provides technical consulting for enterprise software solutions."
      }
    },
    {
      "@type": "Question",
      name: "What technologies does Suman Dey work with?",
      acceptedAnswer: {
        "@type": "Answer", 
        text: "Suman Dey is expert in React.js, Node.js, TypeScript, JavaScript, PostgreSQL, AWS, Docker, CI/CD, Next.js, GraphQL, RESTful APIs, and SAPUI5. He also has experience in UI/UX design and cloud technologies."
      }
    },
    {
      "@type": "Question",
      name: "How to contact Suman Dey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Suman Dey through his website at https://www.sumandey.com/contact, LinkedIn at https://www.linkedin.com/in/imsumandey/, or follow his YouTube channel MonsterTechno for technical content."
      }
    }
  ]
};

// Create a professional WebPage schema as well
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.sumandey.com/#webpage",
  name: "Suman Dey | Senior Full Stack Developer & React Expert",
  description:
    "Portfolio of Senior Full Stack Developer Suman Dey, showcasing expertise in React, Node.js, TypeScript and modern web development.",
  url: "https://www.sumandey.com",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.sumandey.com/#website",
    url: "https://www.sumandey.com",
    name: "Suman Dey Portfolio",
    description: "Professional portfolio of Suman Dey - Senior Full Stack Developer",
    publisher: {
      "@id": "https://www.sumandey.com/#person"
    }
  },
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
      "@id": "https://www.sumandey.com/#person"
    },
  },
  potentialAction: [
    {
      "@type": "ReadAction",
      target: "https://www.sumandey.com"
    },
    {
      "@type": "SearchAction", 
      target: "https://www.sumandey.com/contact",
      "query-input": "required name=search_term_string"
    }
  ]
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
            __html: JSON.stringify(personSchema),
          }}
        />
        <Script
          id='webpage-schema'
          type='application/ld+json'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
        <Script
          id='professional-service-schema'
          type='application/ld+json'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <Script
          id='faq-schema'
          type='application/ld+json'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                    <ConditionalLayout>
                      {children}
                    </ConditionalLayout>
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
