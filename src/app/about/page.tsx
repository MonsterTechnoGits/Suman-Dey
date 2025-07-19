import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiAmazonwebservices,
  SiDocker,
  SiGithub,
  SiSap,
  SiSwagger,
  SiVite,
  SiReacthookform,
} from "react-icons/si";

// SEO-optimized metadata for about page - Wiki-style for fast indexing
export const metadata: Metadata = {
  title: "About Suman Dey | Passionate Senior Full Stack Developer & Tech Leader",
  description:
    "Meet Suman Dey - a passionate Senior Full Stack Developer who absolutely loves creating sleek, scalable web applications. With 7+ years crafting digital experiences using React.js, Node.js, and TypeScript, I transform complex challenges into user-friendly solutions.",
  keywords: [
    "Suman Dey About",
    "Senior Full Stack Developer Background",
    "React Developer Experience",
    "Node.js Expert Biography",
    "TypeScript Professional",
    "ROITech Team Lead",
    "Full Stack Engineer Story",
    "Web Development Career",
    "JavaScript Expert About",
    "AWS Developer Background",
    "PostgreSQL Specialist",
    "Enterprise Software Developer",
    "Tech Lead Experience",
    "Software Architecture Expert",
    "Suman Dey Wiki",
    "Full Stack Developer Profile",
    "Software Engineer Biography",
    "React.js Expert",
    "Web Developer Portfolio",
  ],
  openGraph: {
    title: "About Suman Dey | Passionate Senior Full Stack Developer & Tech Leader",
    description:
      "Discover the journey of Suman Dey - a passionate developer who transforms complex challenges into user-friendly solutions. From curiosity-driven beginnings to leading tech teams, explore his 7+ years of crafting digital experiences.",
    url: "https://www.sumandey.com/about",
    type: "profile",
    siteName: "Suman Dey - Full Stack Developer",
    locale: "en_US",
    images: [
      {
        url: "/suman-dey-image.png",
        width: 1200,
        height: 630,
        alt: "Suman Dey - Passionate Senior Full Stack Developer About Page",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Suman Dey | Passionate Senior Full Stack Developer & Tech Leader", 
    description:
      "Meet Suman Dey - passionate about crafting digital experiences that solve real problems. Discover his journey from curious kid to senior developer leading teams.",
    images: ["/suman-dey-image.png"],
    creator: "@sumandey",
    site: "@sumandey",
  },
  alternates: {
    canonical: "https://www.sumandey.com/about",
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
  authors: [{ name: "Suman Dey", url: "https://www.sumandey.com" }],
  creator: "Suman Dey",
  publisher: "Suman Dey",
  category: "Technology",
  classification: "Professional Profile",
  other: {
    "article:author": "Suman Dey",
    "article:section": "Technology",
    "profile:first_name": "Suman",
    "profile:last_name": "Dey",
    "profile:username": "sumandey",
  },
};

// Enhanced structured data for wiki-style indexing
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Suman Dey",
  headline: "Suman Dey - Passionate Senior Full Stack Developer & Tech Leader",
  description:
    "Meet Suman Dey - a passionate developer who transforms complex challenges into user-friendly solutions. Discover his journey from curious beginnings to tech leadership.",
  url: "https://www.sumandey.com/about",
  dateModified: new Date().toISOString(),
  datePublished: "2024-01-01T00:00:00Z",
  author: {
    "@type": "Person",
    name: "Suman Dey",
    url: "https://www.sumandey.com",
  },
  publisher: {
    "@type": "Person",
    name: "Suman Dey",
    url: "https://www.sumandey.com",
  },
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Suman Dey Portfolio",
    url: "https://www.sumandey.com",
  },
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.sumandey.com/#person",
    name: "Suman Dey",
    alternateName: ["Suman", "SumanDey"],
    jobTitle: ["Senior Full Stack Developer", "Team Lead", "Technical Architect"],
    description:
      "Passionate Senior Full Stack Developer who absolutely loves crafting digital experiences. With 7+ years transforming complex challenges into user-friendly solutions using React, Node.js, and TypeScript. Currently leading teams at ROITech Consulting.",
    url: "https://www.sumandey.com",
    sameAs: [
      "https://linkedin.com/in/sumandey",
      "https://github.com/sumandey",
      "https://twitter.com/sumandey",
    ],
    worksFor: {
      "@type": "Organization",
      name: "ROITech Consulting",
      url: "https://www.roitech.biz",
      department: "Software Development",
    },
    knowsAbout: [
      "React.js Development",
      "Node.js Backend Development", 
      "TypeScript Programming",
      "JavaScript Frameworks",
      "AWS Cloud Services",
      "PostgreSQL Database",
      "Full Stack Architecture",
      "Team Leadership",
      "CI/CD Pipelines",
      "Enterprise Software",
      "Software Engineering",
      "Web Development",
      "API Development",
      "Database Design",
      "System Architecture",
      "DevOps",
      "Agile Development",
      "Code Review",
      "Technical Leadership",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationalCategory: "Software Engineering",
      responsibilities: [
        "Full-stack web application development",
        "Team leadership and mentorship",
        "System architecture design",
        "Code review and quality assurance",
        "DevOps and deployment automation",
      ],
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Science Education",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "7+ Years Full Stack Development Experience",
        credentialCategory: "Professional Experience",
      },
      {
        "@type": "EducationalOccupationalCredential", 
        name: "Team Leadership Experience",
        credentialCategory: "Management",
      },
    ],
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
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.sumandey.com/about",
      },
    ],
  },
  speakableSpecification: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".highlight"],
  },
};

type TechItemProps = {
  icon: React.ReactNode;
  label: string;
};

const TechItem = ({ icon, label }: TechItemProps) => (
  <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10'>
    <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
    <div className='relative z-10 flex flex-col items-center text-center space-y-3'>
      <div className='p-3 rounded-xl bg-gray-800 group-hover:bg-purple-600/20 transition-colors duration-300'>
        {icon}
      </div>
      <span className='font-medium text-gray-300 group-hover:text-white transition-colors duration-300'>
        {label}
      </span>
    </div>
  </div>
);

type HighlightItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const HighlightItem = ({ icon, title, description }: HighlightItemProps) => (
  <article className='group relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10'>
    {/* Gradient overlay */}
    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
    
    {/* Animated left border */}
    <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
    
    <div className='relative z-10 flex items-start gap-6'>
      {/* Icon container */}
      <div className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600/30 group-hover:to-purple-600/20 transition-all duration-300'>
        <div className='text-purple-400 text-2xl group-hover:text-purple-300 transition-colors duration-300' aria-hidden="true">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className='flex-1 min-w-0'>
        <h3 className='text-white font-bold text-xl mb-3 group-hover:text-purple-100 transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>
          {description}
        </p>
      </div>
    </div>
    
    {/* Subtle glow effect */}
    <div className='absolute -inset-px bg-gradient-to-r from-purple-600/10 via-transparent to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />
  </article>
);

export default function AboutPage() {
  return (
    <>
      <Script
        id='about-page-schema'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      
      <main className='w-full h-full flex flex-col gap-14 text-white'>
        {/* Hero Section with SEO-optimized headings */}
        <header className='text-center' itemScope itemType="https://schema.org/Person">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3' itemProp="name">
            About <span className='text-purple-400'>Suman Dey</span>
          </h1>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto' itemProp="description">
            Passionate Senior Full Stack Developer who loves crafting digital experiences that solve real problems - transforming complex challenges into elegant solutions for over 7 years
          </p>
        </header>

        {/* Professional Summary - Humanized and Professional */}
        <section className='max-w-4xl mx-auto space-y-6' itemScope itemType="https://schema.org/Person">
          <h2 className='text-2xl font-bold text-purple-400 mb-4'>Who I Am</h2>
          <div className='text-lg text-gray-300 leading-relaxed'>
            <p itemProp="description">
              Hi there! I&apos;m <strong className='text-white' itemProp="name">Suman Dey</strong>, a passionate{" "}
              <span className='text-purple-400 font-medium' itemProp="jobTitle">Senior Full Stack Developer</span> who absolutely loves what I do. For over{" "}
              <strong>7 years</strong>, I&apos;ve been crafting digital experiences that not only look great but perform exceptionally well. My journey has taken me deep into the world of modern web technologies, with <strong itemProp="knowsAbout">React.js</strong>, <strong itemProp="knowsAbout">Node.js</strong>, and <strong itemProp="knowsAbout">TypeScript</strong> becoming my trusted companions along the way.
            </p>
            <p className='mt-4'>
              What drives me every day is the opportunity to transform complex business challenges into elegant, user-friendly solutions. Whether I&apos;m building intuitive interfaces with <strong itemProp="knowsAbout">React.js</strong> and modern tools like{" "}
              <strong itemProp="knowsAbout">React Hook Form</strong>, or architecting scalable backend systems with{" "}
              <strong itemProp="knowsAbout">Node.js</strong> and <strong itemProp="knowsAbout">PostgreSQL</strong>, I always keep the end user in mind. After all, technology should make life easier, not more complicated.
            </p>
            <p className='mt-4'>
              In my current role as <strong>Team Lead & Technical Architect</strong> at{" "}
              <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <strong itemProp="name">ROITech Consulting</strong>
              </span>, I&apos;ve had the privilege of leading talented teams and delivering some really exciting projects. From building lightning-fast search engines using <strong itemProp="knowsAbout">PostgreSQL trigram indexes</strong> to creating seamless automation workflows, every project teaches me something new and pushes me to grow.
            </p>
            <p className='mt-4'>
              Beyond the core development work, I&apos;m genuinely fascinated by the entire ecosystem of modern software development. Cloud technologies with <strong itemProp="knowsAbout">AWS</strong>, streamlined <strong itemProp="knowsAbout">CI/CD pipelines</strong>, and even mobile development using <strong itemProp="knowsAbout">SAPUI5</strong> and <strong itemProp="knowsAbout">Firebase</strong> - each piece of the puzzle contributes to creating something meaningful. What excites me most is seeing how these technologies come together to solve real problems for real people.
            </p>
          </div>
        </section>

        {/* Personal Development Journey */}
        <section className='max-w-4xl mx-auto space-y-4 text-lg text-gray-300 leading-relaxed'>
          <h2 className='text-2xl font-bold text-purple-400 mb-4'>How It All Started</h2>
          <p>
            Picture this: a curious kid with a basic PC and painfully slow dial-up internet, spending hours trying to figure out why his HTML wasn&apos;t working. That was me about a decade ago! I still get that same rush of excitement when I remember creating my first interactive login form - it was just HTML and JavaScript, but when it actually worked, I felt like I had unlocked some kind of superpower. Every bug I fixed felt like solving a mystery, and honestly, that feeling hasn&apos;t changed much.
          </p>
          <p>
            What started as weekend tinkering gradually became my life&apos;s passion. I found myself naturally gravitating toward creating smooth, intuitive user experiences with <strong>React.js</strong> and <strong>TypeScript</strong> on the frontend, while getting equally excited about building the robust systems that power them behind the scenes. There&apos;s something deeply satisfying about creating something that works beautifully both for the person clicking buttons and for the servers handling thousands of requests.
          </p>
          <p>
            The real learning happened when I started facing those 2 AM production issues (we&apos;ve all been there, right?). Nothing teaches you about system architecture like debugging a performance bottleneck when users are depending on your application. Those high-pressure moments, the complex refactoring projects, and the responsibility of leading teams through tough technical challenges - they&apos;ve all shaped how I approach development today.
          </p>
          <p>
            But here&apos;s what really keeps me going: it&apos;s not just about writing clever code or using the latest framework. It&apos;s about the moment when someone tells you that the application you built actually made their work easier, or when a team member you&apos;ve mentored solves a problem in a way that makes you proud. Technology is just a tool - the real magic happens when that tool helps real people do amazing things.
          </p>
        </section>

      
        {/* Professional Experience - Modern & Professional */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8' itemScope itemType="https://schema.org/WorkHistory">
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4 text-purple-400'>Professional Experience</h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Career progression showcasing continuous growth and technical leadership in full-stack development
            </p>
          </div>
          
          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-600 hidden lg:block' />
            
            <div className='space-y-12'>
              {/* Current Role */}
              <article className='group relative lg:flex lg:items-center lg:gap-8' itemScope itemType="https://schema.org/WorkRole">
                {/* Timeline dot */}
                <div className='absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 hidden lg:block group-hover:bg-purple-400 transition-colors duration-300' />
                
                <div className='lg:w-32 lg:flex-shrink-0 lg:text-right'>
                  <time className='text-purple-400 font-semibold text-sm' itemProp="startDate" dateTime="2021">
                    2021 - Present
                  </time>
                </div>
                
                <div className='lg:flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10'>
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />
                  
                  <div className='relative z-10'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300' itemProp="roleName">
                          Team Lead & Technical Architect
                        </h3>
                        <p className='text-purple-400 font-semibold' itemProp="worksFor">ROITech Consulting</p>
                      </div>
                      <div className='w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-600/10 rounded-xl flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-purple-600/20 transition-all duration-300'>
                        <span className='text-purple-400 font-bold text-lg'>TL</span>
                      </div>
                    </div>
                    
                    <p className='text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300'>
                      Leading full-stack development teams, architecting scalable systems, and implementing modern DevOps practices for enterprise applications.
                    </p>
                    
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>Team Leadership</span>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>System Architecture</span>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>DevOps</span>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Previous Role */}
              <article className='group relative lg:flex lg:items-center lg:gap-8' itemScope itemType="https://schema.org/WorkRole">
                <div className='absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 hidden lg:block group-hover:bg-purple-400 transition-colors duration-300' />
                
                <div className='lg:w-32 lg:flex-shrink-0 lg:text-right'>
                  <time className='text-purple-400 font-semibold text-sm' itemProp="startDate" dateTime="2019">
                    2019 - 2021
                  </time>
                </div>
                
                <div className='lg:flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10'>
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />
                  
                  <div className='relative z-10'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300' itemProp="roleName">
                          Senior Full Stack Developer
                        </h3>
                        <p className='text-purple-400 font-semibold' itemProp="worksFor">ROITech Consulting</p>
                      </div>
                      <div className='w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-600/10 rounded-xl flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-purple-600/20 transition-all duration-300'>
                        <span className='text-purple-400 font-bold text-lg'>SR</span>
                      </div>
                    </div>
                    
                    <p className='text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300'>
                      Developed enterprise web applications using React.js, Node.js, and PostgreSQL with focus on performance optimization and scalability.
                    </p>
                    
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>React.js</span>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>Node.js</span>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Earlier Role */}
              <article className='group relative lg:flex lg:items-center lg:gap-8' itemScope itemType="https://schema.org/WorkRole">
                <div className='absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 hidden lg:block group-hover:bg-purple-400 transition-colors duration-300' />
                
                <div className='lg:w-32 lg:flex-shrink-0 lg:text-right'>
                  <time className='text-purple-400 font-semibold text-sm' itemProp="startDate" dateTime="2018">
                    2018 - 2019
                  </time>
                </div>
                
                <div className='lg:flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10'>
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />
                  
                  <div className='relative z-10'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300' itemProp="roleName">
                          SAP UI5 / Hybrid App Developer
                        </h3>
                        <p className='text-purple-400 font-semibold' itemProp="worksFor">ROITech Consulting</p>
                      </div>
                      <div className='w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-600/10 rounded-xl flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-purple-600/20 transition-all duration-300'>
                        <span className='text-purple-400 font-bold text-lg'>UI</span>
                      </div>
                    </div>
                    
                    <p className='text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300'>
                      Specialized in enterprise SAPUI5 applications and hybrid mobile development using Cordova and Firebase for cross-platform solutions.
                    </p>
                    
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>SAPUI5</span>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>Cordova</span>
                      <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium'>Firebase</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Technical Achievements - Modern Vertical List */}
        <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' itemScope itemType="https://schema.org/ItemList">
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4 text-purple-400'>Key Technical Achievements</h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Proven track record of delivering high-impact solutions that drive business growth and technical excellence
            </p>
          </div>
          
          <div className='space-y-6'>
            <HighlightItem
              icon={<SiPostgresql />}
              title='High-Performance Database Architecture'
              description='Designed and implemented resume search engines using PostgreSQL trigram indexes, achieving sub-second query performance with complex filtering and pagination.'
            />
            <HighlightItem
              icon={<SiNodedotjs />}
              title='Scalable Backend Systems'
              description='Architected Node.js applications using worker threads and cluster modules for processing large files and AI tasks with maximum concurrency and fault tolerance.'
            />
            <HighlightItem
              icon={<SiAmazonwebservices />}
              title='Cloud Infrastructure & DevOps'
              description='Implemented AWS cloud solutions using S3 for storage and EC2 for compute, with automated CI/CD pipelines for seamless deployment and monitoring.'
            />
            <HighlightItem
              icon={<SiReacthookform />}
              title='Advanced Frontend Development'
              description='Built complex React.js applications with dynamic forms using React Hook Form, implementing validation schemas, nested field handling, and real-time previews.'
            />
            <HighlightItem
              icon={<SiSwagger />}
              title='API Design & Documentation'
              description='Created comprehensive API documentation using Swagger and OpenAPI specifications, improving development team collaboration and reducing integration time.'
            />
            <HighlightItem
              icon={<SiGithub />}
              title='Development Team Leadership'
              description='Led multiple development teams, implemented code review processes, conducted knowledge transfer sessions, and established best practices for agile development.'
            />
            <HighlightItem
              icon={<SiVite />}
              title='Performance Optimization'
              description='Migrated large-scale applications from Webpack to Vite, achieving 3x faster build times and implementing modern bundling strategies for improved developer experience.'
            />
            <HighlightItem
              icon={<SiTypescript />}
              title='Type-Safe Application Architecture'
              description='Implemented comprehensive TypeScript solutions across frontend, backend, and database layers, ensuring type safety and reducing runtime errors by 80%.'
            />
            <HighlightItem
              icon={<SiSap />}
              title='Enterprise Software Solutions'
              description='Developed custom SAP launchpads, electronic signature workflows, and hybrid mobile applications using SAPUI5 and Planet9 ecosystem integration.'
            />
          </div>
        </section>

        {/* Technical Skills - Modern & Professional */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8' itemScope itemType="https://schema.org/ItemList">
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4 text-purple-400'>Technical Expertise</h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Mastering modern technologies to build scalable, performant applications
            </p>
          </div>
          
          {/* Skills Categories */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mr-4'>
                  <SiReact size={24} className='text-purple-400' />
                </div>
                <h3 className='text-xl font-semibold text-white'>Frontend</h3>
              </div>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  React.js & Next.js Development
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  TypeScript & JavaScript (ES6+)
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  Tailwind CSS & Responsive Design
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  State Management & Forms
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  Animation & UI/UX
                </li>
              </ul>
            </div>
            
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mr-4'>
                  <SiNodedotjs size={24} className='text-purple-400' />
                </div>
                <h3 className='text-xl font-semibold text-white'>Backend</h3>
              </div>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  Node.js & Express.js
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  PostgreSQL & Database Design
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  RESTful API Development
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  GraphQL Implementation
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  Microservices Architecture
                </li>
              </ul>
            </div>
            
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mr-4'>
                  <SiAmazonwebservices size={24} className='text-purple-400' />
                </div>
                <h3 className='text-xl font-semibold text-white'>DevOps & Cloud</h3>
              </div>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  AWS (S3, EC2, Lambda)
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  Docker & Containerization
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  CI/CD Pipeline Implementation
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  Git & Version Control
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
                  Linux & System Administration
                </li>
              </ul>
            </div>
          </div>
          
          {/* Technology Stack */}
          <div className='text-center mb-12'>
            <h3 className='text-2xl font-bold mb-4 text-white' id="technology-stack">Technology Stack</h3>
            <p className='text-gray-400'>
              Core technologies I use to build exceptional digital experiences
            </p>
          </div>
          
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
            <TechItem icon={<SiTypescript size={32} className='text-blue-500' />} label='TypeScript' />
            <TechItem icon={<SiJavascript size={32} className='text-yellow-500' />} label='JavaScript' />
            <TechItem icon={<SiReact size={32} className='text-blue-400' />} label='React.js' />
            <TechItem icon={<SiNextdotjs size={32} className='text-white' />} label='Next.js' />
            <TechItem icon={<SiNodedotjs size={32} className='text-green-600' />} label='Node.js' />
            <TechItem icon={<SiPostgresql size={32} className='text-blue-600' />} label='PostgreSQL' />
            <TechItem icon={<SiAmazonwebservices size={32} className='text-orange-500' />} label='AWS' />
            <TechItem icon={<SiDocker size={32} className='text-blue-400' />} label='Docker' />
            <TechItem icon={<SiGithub size={32} className='text-white' />} label='Git' />
            <TechItem icon={<SiTailwindcss size={32} className='text-sky-500' />} label='Tailwind' />
            <TechItem icon={<SiSwagger size={32} className='text-green-500' />} label='Swagger' />
            <TechItem icon={<SiVite size={32} className='text-purple-500' />} label='Vite' />
          </div>
        </section>

        {/* Call to Action - SEO optimized */}
        <section className='text-center mt-10' itemScope itemType="https://schema.org/ContactPoint">
          <h2 className='text-2xl font-bold text-purple-400 mb-4'>Ready to Collaborate?</h2>
          <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
            I&apos;m always interested in challenging projects and opportunities to create impactful software solutions. Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='/contact'
              className='bg-purple-600 text-white px-8 py-3 rounded-3xl font-bold hover:bg-purple-700 transition inline-flex items-center gap-2'
            >
              Get In Touch
            </Link>
            <Link
              href='/resume-suman-dey.pdf'
              target='_blank'
              className='border border-purple-600 text-purple-400 px-8 py-3 rounded-3xl font-bold hover:bg-purple-600 hover:text-white transition inline-flex items-center gap-2'
            >
              View Resume
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}