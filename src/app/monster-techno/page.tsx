import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  SiYoutube,
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

// SEO-optimized metadata for Monster Techno page
export const metadata: Metadata = {
  title: "Monster Techno | YouTube Channel & Tech Organization by Suman Dey",
  description:
    "Discover Monster Techno - Suman Dey's YouTube channel and tech organization focused on programming tutorials, web development education, and career growth through content creation. Learn React.js, Node.js, TypeScript and modern development practices.",
  keywords: [
    "Monster Techno",
    "MonsterTechno YouTube",
    "Suman Dey YouTube",
    "Programming Tutorials",
    "React.js Tutorials",
    "Node.js Education",
    "TypeScript Learning",
    "Web Development Channel",
    "Full Stack Tutorials",
    "JavaScript Education",
    "Coding Tutorials",
    "Tech Organization",
    "Developer Mentorship",
    "Programming Career Growth",
    "Open Source Projects",
  ],
  openGraph: {
    title: "Monster Techno | YouTube Channel & Tech Organization",
    description:
      "Explore Monster Techno - comprehensive programming tutorials, web development education, and career growth resources by Suman Dey. Master React.js, Node.js, and modern development.",
    url: "https://www.sumandey.com/monster-techno",
    type: "website",
    images: [
      {
        url: "/suman-dey-image.png",
        width: 1200,
        height: 630,
        alt: "Monster Techno - YouTube Channel and Tech Organization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monster Techno | YouTube Channel & Tech Organization",
    description:
      "Programming tutorials, web development education, and career growth through Monster Techno by Suman Dey.",
    images: ["/suman-dey-image.png"],
  },
  alternates: {
    canonical: "https://www.sumandey.com/monster-techno",
  },
};

// Structured data for Monster Techno page
const monsterTechnoSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Monster Techno",
  description:
    "Tech organization and YouTube channel focused on programming education, web development tutorials, and developer career growth.",
  url: "https://www.sumandey.com/monster-techno",
  founder: {
    "@type": "Person",
    name: "Suman Dey",
    jobTitle: "Senior Full Stack Developer",
    sameAs: [
      "https://github.com/MonsterTechnoGits",
      "https://youtube.com/MonsterTechno",
      "https://www.linkedin.com/in/imsumandey/",
    ],
  },
  sameAs: [
    "https://youtube.com/MonsterTechno",
    "https://github.com/MonsterTechnoGits",
  ],
  knowsAbout: [
    "React.js Development",
    "Node.js Programming",
    "TypeScript Education",
    "Full Stack Development",
    "JavaScript Frameworks",
    "Web Development Tutorials",
    "Programming Education",
    "Developer Mentorship",
  ],
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  color: string;
};

const FeatureCard = ({ icon, title, description, tags, color }: FeatureCardProps) => (
  <div className={`group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-${color}-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-${color}-500/10`}>
    <div className={`absolute inset-0 bg-gradient-to-br from-${color}-600/5 via-transparent to-${color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
    
    <div className='relative z-10'>
      <div className='flex items-center mb-6'>
        <div className={`w-16 h-16 bg-gradient-to-br from-${color}-600/20 to-${color}-600/10 rounded-xl flex items-center justify-center mr-4 group-hover:from-${color}-600/30 group-hover:to-${color}-600/20 transition-all duration-300`}>
          <div className={`text-${color}-400 text-2xl group-hover:text-${color}-300 transition-colors duration-300`}>
            {icon}
          </div>
        </div>
        <h3 className='text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300'>
          {title}
        </h3>
      </div>
      
      <p className='text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300'>
        {description}
      </p>
      
      <div className='flex flex-wrap gap-2'>
        {tags.map((tag, index) => (
          <span key={index} className={`px-3 py-1 bg-${color}-600/20 text-${color}-300 rounded-full text-xs font-medium`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  achievements: string[];
};

const TimelineItem = ({ year, title, description, achievements }: TimelineItemProps) => (
  <div className='group relative lg:flex lg:items-start lg:gap-8'>
    <div className='absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 hidden lg:block group-hover:bg-purple-400 transition-colors duration-300' />
    
    <div className='lg:w-20 lg:flex-shrink-0 lg:text-right mb-4 lg:mb-0'>
      <time className='text-purple-400 font-bold text-lg'>{year}</time>
    </div>
    
    <div className='lg:flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10'>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />
      
      <div className='relative z-10'>
        <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300'>
          {description}
        </p>
        
        <ul className='space-y-2'>
          {achievements.map((achievement, index) => (
            <li key={index} className='flex items-start text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
              <span className='w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0'></span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function MonsterTechnoPage() {
  return (
    <>
      <Script
        id='monster-techno-schema'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(monsterTechnoSchema) }}
      />
      
      <main className='w-full h-full flex flex-col gap-16 text-white'>
        {/* Hero Section */}
        <header className='text-center space-y-6'>
          <div className='flex items-center justify-center gap-4 mb-6'>
            <div className='w-20 h-20 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center'>
              <SiYoutube className='w-10 h-10 text-red-500' />
            </div>
            <div className='w-20 h-20 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center'>
              <svg className='w-10 h-10 text-purple-400' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
              </svg>
            </div>
          </div>
          
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            <span className='text-red-400'>Monster</span>
            <span className='text-purple-400'>Techno</span>
          </h1>
          
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            What started as my personal learning journal has grown into something I&apos;m really proud of - a place where passionate developers come together to learn, share, and grow. It&apos;s been an incredible journey!
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4'>
            <Link
              href='https://youtube.com/MonsterTechno'
              target='_blank'
              className='inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all duration-300 hover:scale-105'
            >
              <SiYoutube size={24} />
              Visit YouTube Channel
            </Link>
            <Link
              href='https://github.com/MonsterTechnoGits'
              target='_blank'
              className='inline-flex items-center gap-3 border border-purple-600 text-purple-400 px-8 py-4 rounded-2xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105'
            >
              <SiGithub size={24} />
              GitHub Organization
            </Link>
          </div>
        </header>

        {/* Mission Statement */}
        <section className='max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700'>
            <h2 className='text-3xl font-bold text-center mb-6 text-purple-400'>What Drives Me</h2>
            <p className='text-lg text-gray-300 leading-relaxed text-center'>
              I believe learning should be practical and fun, not overwhelming. My goal is simple: help fellow developers bridge that gap between textbook knowledge and real-world coding. Whether you&apos;re just starting out or looking to level up, I want to share everything I&apos;ve learned so we can all grow together.
            </p>
          </div>
        </section>

        {/* Core Offerings */}
        <section className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4 text-purple-400'>What We Offer</h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Comprehensive resources and content designed to accelerate your development journey
            </p>
          </div>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <FeatureCard
              icon={<SiYoutube />}
              title='YouTube Education'
              description='In-depth programming tutorials covering modern web development technologies, best practices, and real-world project implementations with step-by-step guidance.'
              tags={['Video Tutorials', 'Live Coding', 'Project Walkthroughs', 'Tech Explanations']}
              color='red'
            />
            
            <FeatureCard
              icon={<SiGithub />}
              title='Open Source Projects'
              description='Curated collection of open-source projects demonstrating industry-standard practices, clean code architecture, and modern development workflows.'
              tags={['Source Code', 'Documentation', 'Best Practices', 'Community Driven']}
              color='purple'
            />
            
            <FeatureCard
              icon={<SiReact />}
              title='Frontend Mastery'
              description='Comprehensive React.js ecosystem education including hooks, state management, performance optimization, and modern UI/UX development patterns.'
              tags={['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']}
              color='blue'
            />
            
            <FeatureCard
              icon={<SiNodedotjs />}
              title='Backend Excellence'
              description='Full-stack development education covering Node.js, API design, database management, authentication, and scalable architecture patterns.'
              tags={['Node.js', 'Express.js', 'PostgreSQL', 'API Design']}
              color='green'
            />
          </div>
        </section>

        {/* Technology Focus */}
        <section className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4 text-purple-400'>Technology Focus</h2>
            <p className='text-gray-400'>
              Modern technologies and frameworks that power today&apos;s web applications
            </p>
          </div>
          
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center'>
              <SiReact size={48} className='text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300' />
              <h3 className='font-semibold text-white'>React.js</h3>
              <p className='text-sm text-gray-400 mt-2'>Modern UI Development</p>
            </div>
            
            <div className='group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 text-center'>
              <SiNodedotjs size={48} className='text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300' />
              <h3 className='font-semibold text-white'>Node.js</h3>
              <p className='text-sm text-gray-400 mt-2'>Backend Development</p>
            </div>
            
            <div className='group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-600/50 transition-all duration-300 hover:scale-105 text-center'>
              <SiTypescript size={48} className='text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300' />
              <h3 className='font-semibold text-white'>TypeScript</h3>
              <p className='text-sm text-gray-400 mt-2'>Type-Safe Development</p>
            </div>
            
            <div className='group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 text-center'>
              <SiJavascript size={48} className='text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300' />
              <h3 className='font-semibold text-white'>JavaScript</h3>
              <p className='text-sm text-gray-400 mt-2'>Core Programming</p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4 text-purple-400'>Monster Techno Journey</h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              The evolution of content creation and community building that transformed into career opportunities
            </p>
          </div>
          
          <div className='relative'>
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-600 hidden lg:block' />
            
            <div className='space-y-12'>
              <TimelineItem
                year='2019'
                title='Channel Genesis'
                description='Started Monster Techno as a passion project to share programming knowledge and document my learning journey in web development.'
                achievements={[
                  'First programming tutorial published',
                  'Established consistent content creation schedule',
                  'Built initial subscriber base of fellow developers'
                ]}
              />
              
              <TimelineItem
                year='2020'
                title='Content Expansion'
                description='Expanded content scope to cover full-stack development, focusing on practical projects and real-world applications.'
                achievements={[
                  'Published comprehensive React.js tutorial series',
                  'Created Node.js backend development guides',
                  'Reached 1,000+ subscribers and growing community'
                ]}
              />
              
              <TimelineItem
                year='2021'
                title='Career Impact'
                description='Content creation began opening doors to professional opportunities and establishing industry recognition.'
                achievements={[
                  'Attracted attention from potential employers',
                  'Established thought leadership in full-stack development',
                  'Started receiving collaboration and job offers'
                ]}
              />
              
              <TimelineItem
                year='2022'
                title='Organization Growth'
                description='Formalized Monster Techno as a comprehensive tech organization with structured educational content and mentorship programs.'
                achievements={[
                  'Launched GitHub organization with curated projects',
                  'Started developer mentorship initiatives',
                  'Expanded content to advanced development topics'
                ]}
              />
              
              <TimelineItem
                year='2023'
                title='Professional Recognition'
                description='Monster Techno became a significant factor in career advancement, leading to senior roles and consulting opportunities.'
                achievements={[
                  'Secured Team Lead position partly due to demonstrated expertise',
                  'Established consulting opportunities through content reputation',
                  'Built network of industry professionals and collaborators'
                ]}
              />
              
              <TimelineItem
                year='2024'
                title='Continued Innovation'
                description='Ongoing expansion of educational content with focus on emerging technologies and advanced development practices.'
                achievements={[
                  'Covering latest React and Node.js ecosystem updates',
                  'Exploring AI integration in web development',
                  'Mentoring next generation of developers'
                ]}
              />
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4 text-purple-400'>Career Impact</h2>
            <p className='text-gray-400'>
              How Monster Techno transformed passion into professional success
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700'>
              <div className='text-4xl font-bold text-purple-400 mb-2'>5+</div>
              <h3 className='font-semibold text-white mb-2'>Years Creating</h3>
              <p className='text-gray-400 text-sm'>Consistent content creation and community building</p>
            </div>
            
            <div className='text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700'>
              <div className='text-4xl font-bold text-green-400 mb-2'>3x</div>
              <h3 className='font-semibold text-white mb-2'>Career Growth</h3>
              <p className='text-gray-400 text-sm'>Accelerated career progression through demonstrated expertise</p>
            </div>
            
            <div className='text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700'>
              <div className='text-4xl font-bold text-blue-400 mb-2'>10+</div>
              <h3 className='font-semibold text-white mb-2'>Opportunities</h3>
              <p className='text-gray-400 text-sm'>Job offers and consulting opportunities generated</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='text-center'>
          <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-12 rounded-3xl border border-gray-700'>
            <h2 className='text-3xl font-bold text-white mb-6'>
              Join the <span className='text-purple-400'>Monster Techno</span> Community
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
              Start your journey toward becoming a better developer. Subscribe to our channel, explore our projects, 
              and be part of a community that&apos;s passionate about building exceptional software.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='https://youtube.com/MonsterTechno'
                target='_blank'
                className='inline-flex items-center gap-3 bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all duration-300 hover:scale-105'
              >
                <SiYoutube size={24} />
                Subscribe Now
              </Link>
              <Link
                href='https://github.com/MonsterTechnoGits'
                target='_blank'
                className='inline-flex items-center gap-3 border border-purple-600 text-purple-400 px-10 py-4 rounded-2xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105'
              >
                <SiGithub size={24} />
                Explore Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}