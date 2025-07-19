import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

// SEO metadata for contact page
export const metadata: Metadata = {
  title: "Let's Connect! | Contact Suman Dey - Passionate Full Stack Developer",
  description: "Ready to bring your ideas to life? Let's connect! I'm Suman Dey, a passionate Senior Full Stack Developer who loves creating amazing digital experiences. Available for exciting projects and collaborations using React, Node.js, and TypeScript.",
  keywords: [
    "Contact Suman Dey",
    "Hire Full Stack Developer",
    "React Developer Contact",
    "Node.js Developer Hire",
    "Web Development Services",
    "Freelance Developer",
    "Technical Consultation",
    "Full Stack Engineer Contact",
    "JavaScript Developer Hire",
    "TypeScript Developer Services",
    "Project Collaboration",
    "Web Development Consultation",
  ],
  openGraph: {
    title: "Let's Connect! | Contact Suman Dey - Passionate Full Stack Developer",
    description: "Ready to create something amazing together? Let's connect! I'm passionate about turning ideas into beautiful, functional digital experiences. Always excited about new projects and collaborations.",
    url: "https://www.sumandey.com/contact",
    type: "website",
    images: [
      {
        url: "/suman-dey-image.png",
        width: 1200,
        height: 630,
        alt: "Let's Connect! Contact Suman Dey - Passionate Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Connect! | Contact Suman Dey - Passionate Full Stack Developer",
    description: "Ready to create something amazing together? Let's connect and bring your ideas to life with passion and expertise!",
    images: ["/suman-dey-image.png"],
  },
  alternates: {
    canonical: "https://www.sumandey.com/contact",
  },
};

// Contact page structured data
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Suman Dey",
  description: "Get in touch with Suman Dey, Senior Full Stack Developer. Available for freelance projects, consulting, and collaboration opportunities.",
  url: "https://www.sumandey.com/contact",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.sumandey.com/#person",
    name: "Suman Dey",
    jobTitle: "Senior Full Stack Developer",
    email: "imsumandey@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional Services",
      availableLanguage: ["English", "Hindi", "Bengali"],
      areaServed: "Worldwide",
      serviceType: "Web Development",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "West Bengal",
    },
    sameAs: [
      "https://github.com/MonsterTechnoGits",
      "https://www.linkedin.com/in/imsumandey/",
      "https://www.facebook.com/ImSumanDeyy",
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
        name: "Contact",
        item: "https://www.sumandey.com/contact",
      },
    ],
  },
};

const ContactInfoItem = ({ icon, title, info, link }: { icon: React.ReactNode; title: string; info: string; link?: string }) => (
  <div className='group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10'>
    <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />
    
    <div className='relative z-10 flex items-center gap-4'>
      <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600/30 group-hover:to-purple-600/20 transition-all duration-300'>
        <div className='text-purple-400 text-xl group-hover:text-purple-300 transition-colors duration-300'>
          {icon}
        </div>
      </div>
      
      <div className='flex-1 min-w-0'>
        <h3 className='text-white font-semibold text-lg mb-1 group-hover:text-purple-100 transition-colors duration-300'>
          {title}
        </h3>
        {link ? (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-purple-400 transition-colors duration-300 break-all'
          >
            {info}
          </a>
        ) : (
          <p className='text-gray-300 group-hover:text-gray-200 transition-colors duration-300 break-all'>
            {info}
          </p>
        )}
      </div>
    </div>
  </div>
);

export default function ContactPage() {

  return (
    <>
      <Script
        id='contact-page-schema'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      
      <main className='w-full h-full flex flex-col gap-16 text-white'>
        {/* Hero Section */}
        <header className='text-center space-y-6'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
            Let&apos;s Create Something <span className='text-purple-400'>Amazing Together!</span>
          </h1>
          <div className='max-w-3xl mx-auto space-y-4'>
            <p className='text-xl text-gray-300 leading-relaxed'>
              Hi there! 👋 I&apos;m genuinely excited about the possibility of working together. There&apos;s nothing I love more than collaborating with passionate people to create <strong className='text-white'>digital experiences</strong> that actually make a difference.
            </p>
            <p className='text-lg text-gray-400 leading-relaxed'>
              Whether you&apos;re dreaming up a complete web application, need some technical guidance, or just want to chat about an idea you&apos;ve been mulling over, I&apos;d love to hear from you. Let&apos;s turn that spark of an idea into something real!
            </p>
          </div>
        </header>

        {/* Contact Information Cards */}
        <section className='w-full max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl font-bold text-purple-400 mb-4'>Ways to Connect</h2>
            <p className='text-gray-400'>
              Choose whatever feels most comfortable for you - I&apos;m always happy to chat!
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
            <ContactInfoItem
              icon={<FaEnvelope />}
              title='Email'
              info='aboutsumandey@gmail.com'
              link='mailto:aboutsumandey@gmail.com'
            />
            <ContactInfoItem
              icon={<FaMapMarkerAlt />}
              title='Location'
              info='West Bengal, India'
            />
            <ContactInfoItem
              icon={<FaLinkedin />}
              title='LinkedIn'
              info='linkedin.com/in/imsumandey'
              link='https://www.linkedin.com/in/imsumandey/'
            />
            <ContactInfoItem
              icon={<FaGithub />}
              title='GitHub'
              info='github.com/MonsterTechnoGits'
              link='https://github.com/MonsterTechnoGits'
            />
          </div>
        </section>

        {/* Contact Form */}
        <section className='w-full max-w-2xl mx-auto'>
          <ContactForm />
        </section>

        {/* Call to Action */}
        <section className='text-center mt-16'>
          <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 lg:p-12 rounded-2xl border border-gray-700'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Excited to Start Something <span className='text-purple-400'>New Together?</span>
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              I&apos;m always open to exciting freelance projects, interesting consulting opportunities, and meaningful collaborations. If you think we&apos;d work well together, let&apos;s make it happen!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/resume-suman-dey.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'
              >
                Check Out My Resume
              </a>
              <a
                href='https://www.linkedin.com/in/imsumandey/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105'
              >
                Let&apos;s Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
