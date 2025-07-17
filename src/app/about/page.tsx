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

// SEO-optimized metadata for about page
export const metadata: Metadata = {
  title: "About Suman Dey | Senior Full Stack Developer & Team Lead at ROITech",
  description:
    "Learn about Suman Dey, a Senior Full Stack Developer with 7+ years of experience in React, Node.js, TypeScript, and AWS. Currently Team Lead at ROITech Consulting, specializing in scalable web applications and enterprise solutions.",
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
  ],
  openGraph: {
    title: "About Suman Dey | Senior Full Stack Developer & Team Lead",
    description:
      "Discover the journey of Suman Dey, a Senior Full Stack Developer with expertise in React, Node.js, and modern web technologies. Learn about his 7+ years of experience and leadership at ROITech Consulting.",
    url: "https://www.sumandey.com/about",
    type: "profile",
    images: [
      {
        url: "/suman-dey-image.png",
        width: 1200,
        height: 630,
        alt: "Suman Dey - Senior Full Stack Developer About Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Suman Dey | Senior Full Stack Developer & Team Lead",
    description:
      "Learn about Suman Dey's journey as a Senior Full Stack Developer with expertise in React, Node.js, and modern web technologies.",
    images: ["/suman-dey-image.png"],
  },
  alternates: {
    canonical: "https://www.sumandey.com/about",
  },
};

// Structured data for about page
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Suman Dey",
  description:
    "Learn about Suman Dey, a Senior Full Stack Developer with 7+ years of experience in React, Node.js, TypeScript, and AWS.",
  url: "https://www.sumandey.com/about",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.sumandey.com/#person",
    name: "Suman Dey",
    jobTitle: "Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 7+ years of experience specializing in React, Node.js, TypeScript, and modern web technologies. Currently serving as Team Lead at ROITech Consulting.",
    worksFor: {
      "@type": "Organization",
      name: "ROITech Consulting",
      url: "https://www.roitech.biz",
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
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationalCategory: "Software Engineering",
    },
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
        <header className='text-center'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3'>
            About <span className='text-purple-400'>Suman Dey</span>
          </h1>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            Senior Full Stack Developer with 7+ years of experience building scalable web applications with React, Node.js, and modern technologies
          </p>
        </header>

        {/* Professional Summary - SEO optimized */}
        <section className='max-w-4xl mx-auto space-y-6' itemScope itemType="https://schema.org/Person">
          <h2 className='text-2xl font-bold text-purple-400 mb-4 sr-only'>Professional Background</h2>
          <div className='text-lg text-gray-300 leading-relaxed'>
            <p>
              I&apos;m <strong className='text-white' itemProp="name">Suman Dey</strong>, a{" "}
              <span className='text-purple-400 font-medium' itemProp="jobTitle">Senior Full Stack Developer</span> with over{" "}
              <strong>7 years</strong> of hands-on experience building and scaling secure,
              high-performing web applications using cutting-edge technologies including <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>.
            </p>
            <p className='mt-4'>
              Specializing in modern JavaScript frameworks, I excel at creating responsive user interfaces with <strong>React.js</strong>,{" "}
              <strong>React Hook Form</strong>, and <strong>React Query</strong>, while architecting robust backend systems using{" "}
              <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>PostgreSQL</strong>. My focus is on building solutions that are performant, scalable, and maintainable.
            </p>
            <p className='mt-4'>
              Currently serving as <strong>Team Lead & Technical Architect</strong> at{" "}
              <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <strong itemProp="name">ROITech Consulting</strong>
              </span>, I&apos;ve successfully delivered enterprise-grade systems, including high-performance resume search engines using PostgreSQL trigram indexes, and designed automated workflows for PDF/Excel processing and system integrations.
            </p>
            <p className='mt-4'>
              My expertise extends to cloud technologies with <strong>AWS</strong> (S3, EC2), implementing <strong>CI/CD pipelines</strong>, and developing hybrid mobile applications using <strong>SAPUI5</strong>, <strong>Cordova</strong>, and <strong>Firebase</strong>. I&apos;m passionate about leveraging modern development practices to create scalable, production-ready applications.
            </p>
          </div>
        </section>

        {/* Professional Journey - Enhanced for SEO */}
        <section className='max-w-4xl mx-auto space-y-4 text-lg text-gray-300 leading-relaxed'>
          <h2 className='text-2xl font-bold text-purple-400 mb-4'>My Development Journey</h2>
          <p>
            My journey in software development began with curiosity and a basic PC with dial-up internet. I still remember the excitement of creating my first interactive login form with HTML and JavaScript — each successfully resolved bug felt like solving a complex puzzle that fueled my passion for programming.
          </p>
          <p>
            This initial curiosity evolved into expertise in full-stack development, where I discovered my strength in creating seamless user experiences through frontend technologies like <strong>React.js</strong> and <strong>TypeScript</strong>, while architecting scalable backend systems. As a self-motivated learner, I&apos;ve dedicated countless hours mastering advanced concepts like Node.js multi-threading and React&apos;s reconciliation algorithm to optimize application performance.
          </p>
          <p>
            Throughout my career, I&apos;ve navigated high-pressure production environments, managed complex system refactors, and led development teams through challenging projects. The satisfaction of launching applications that perform reliably under real-world conditions drives my commitment to quality code and robust architecture.
          </p>
          <p>
            What motivates me most isn&apos;t just the technology — it&apos;s the impact on users and the trust that teams place in well-engineered systems. This responsibility drives me to write clean, maintainable code and mentor fellow developers in best practices.
          </p>
        </section>

        {/* Professional Experience - Modern & Professional */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
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
        <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
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
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
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
            <h3 className='text-2xl font-bold mb-4 text-white'>Technology Stack</h3>
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
        <section className='text-center mt-10'>
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