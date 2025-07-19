import { Metadata } from "next";
import CountUp from "@/components/reactbits/CountUp";
import Link from "next/link";
import RotatingText from "@/components/reactbits/RotatingText";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiGithub,
} from "react-icons/si";

// SEO metadata for homepage
export const metadata: Metadata = {
  title: "Suman Dey | Senior Full Stack Developer & Modern Web Solutions Expert",
  description:
    "Passionate Senior Full Stack Developer with 7+ years of experience building sleek, scalable web applications. Expert in React.js, Node.js, TypeScript, and modern cloud technologies. Creating high-performance, user-friendly digital solutions.",
  openGraph: {
    title: "Suman Dey | Senior Full Stack Developer & Modern Web Solutions Expert",
    description:
      "Passionate Senior Full Stack Developer with 7+ years building sleek, scalable web applications. Specializing in React.js, Node.js, TypeScript & modern cloud technologies. View portfolio of high-performance digital solutions.",
    url: "https://www.sumandey.com",
    type: "website",
    siteName: "Suman Dey Portfolio",
  },
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
  ],
  alternates: {
    canonical: "https://www.sumandey.com",
  },
};

const TechIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className='group flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'>
    <div className='text-purple-400 group-hover:text-purple-300 transition-colors duration-300'>
      {icon}
    </div>
    <span className='text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
      {label}
    </span>
  </div>
);

const StatCard = ({
  value,
  label,
  description,
}: {
  value: number;
  label: string;
  description: string;
}) => (
  <div className='group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10'>
    <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />

    <div className='relative z-10 text-center'>
      <div className='text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300'>
        +
        <CountUp
          from={0}
          to={value}
          separator=','
          direction='up'
          duration={2}
          className='count-up-text'
        />
      </div>
      <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300'>
        {label}
      </h3>
      <p className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
        {description}
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className='w-full h-full flex items-start justify-start flex-col gap-16'>
      {/* Hero Section - Modern & Professional */}
      <section className='space-y-8'>
        <div className='space-y-6'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold flex flex-wrap gap-2 sm:gap-3 justify-start items-center'>
            <span>Transforming Ideas into</span>
            <RotatingText
              texts={["Innovation", "Solutions", "Success"]}
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              mainClassName='px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg whitespace-nowrap bg-gradient-to-r from-purple-600 to-purple-400 text-white'
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </h1>

          <div className='space-y-4'>
            <p className='text-xl text-gray-300 leading-relaxed'>
              Hey there! 👋 I&apos;m a passionate{" "}
              <strong className='text-white'>Senior Full Stack Developer</strong> who&apos;s been
              crafting digital experiences for over{" "}
              <strong className='text-purple-400'>7 years</strong>. What I love most? Taking complex
              ideas and turning them into sleek, scalable web applications that people actually
              enjoy using. There&apos;s something magical about merging beautiful design with
              rock-solid backend functionality.
            </p>
            <p className='text-lg text-gray-400 leading-relaxed'>
              My playground includes <strong className='text-white'>React.js</strong>,{" "}
              <strong className='text-white'>Node.js</strong>,{" "}
              <strong className='text-white'>TypeScript</strong>, and modern cloud technologies.
              Whether I&apos;m building intuitive user interfaces or solving those tricky backend
              puzzles, I&apos;m all about writing clean, efficient code that makes both users and
              fellow developers happy.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 relative z-10'>
          <Link
            href='/contact'
            className='relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer'
          >
            Let&apos;s Work Together
          </Link>
          <Link
            href='/about'
            className='relative inline-flex items-center justify-center px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer'
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <ScrollAnimatedSection animationType='fadeInUp' threshold={0.2}>
        <section className='w-full'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl font-bold text-purple-400 mb-4'>Professional Impact</h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Delivering measurable results through technical excellence and innovative solutions
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <ScrollAnimatedSection animationType='slideUp' delay={100}>
              <StatCard
                value={7}
                label='Years of Experience'
                description='Building sleek, scalable web applications with modern technologies'
              />
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType='slideUp' delay={200}>
              <StatCard
                value={100}
                label='Projects Delivered'
                description='High-performance, user-friendly digital solutions created'
              />
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType='slideUp' delay={300}>
              <StatCard
                value={20}
                label='Technologies Mastered'
                description='Modern frameworks, cloud technologies, and development tools'
              />
            </ScrollAnimatedSection>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Core Technologies */}
      <ScrollAnimatedSection animationType='fadeInUp' threshold={0.2}>
        <section className='w-full'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl font-bold text-purple-400 mb-4'>Core Technologies</h2>
            <p className='text-gray-400'>
              Building exceptional applications with industry-leading tools
            </p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4'>
            {[
              { icon: <SiReact size={32} />, label: "React.js" },
              { icon: <SiNodedotjs size={32} />, label: "Node.js" },
              { icon: <SiTypescript size={32} />, label: "TypeScript" },
              { icon: <SiJavascript size={32} />, label: "JavaScript" },
              { icon: <SiPostgresql size={32} />, label: "PostgreSQL" },
              { icon: <SiAmazonwebservices size={32} />, label: "AWS" },
              { icon: <SiDocker size={32} />, label: "Docker" },
              { icon: <SiGithub size={32} />, label: "Git" },
            ].map((tech, index) => (
              <ScrollAnimatedSection
                key={tech.label}
                animationType='scale'
                delay={index * 50}
                threshold={0.1}
              >
                <TechIcon icon={tech.icon} label={tech.label} />
              </ScrollAnimatedSection>
            ))}
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Professional Focus */}
      <ScrollAnimatedSection animationType='fadeInUp' threshold={0.2}>
        <section className='w-full'>
          <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 lg:p-12 rounded-2xl border border-gray-700'>
            <div className='max-w-4xl mx-auto text-center space-y-6'>
              <h2 className='text-3xl font-bold text-white'>
                Transform Your Ideas Into <span className='text-purple-400'>Digital Reality</span>
              </h2>
              <p className='text-xl text-gray-300 leading-relaxed'>
                As a passionate Senior Full Stack Developer, I specialize in creating
                high-performance, user-friendly digital solutions that merge modern design with
                robust backend functionality. From scalable web applications to complex technical
                challenges, I deliver clean, efficient code that brings your vision to life with
                exceptional user experiences.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-8'>
                <ScrollAnimatedSection animationType='slideLeft' delay={200}>
                  <div className='space-y-2'>
                    <h3 className='text-lg font-semibold text-purple-400'>Frontend Excellence</h3>
                    <p className='text-gray-400'>
                      React.js, TypeScript, and modern UI/UX design creating intuitive user
                      interfaces
                    </p>
                  </div>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection animationType='slideRight' delay={300}>
                  <div className='space-y-2'>
                    <h3 className='text-lg font-semibold text-purple-400'>Backend Architecture</h3>
                    <p className='text-gray-400'>
                      Node.js, cloud technologies, and scalable system design for robust
                      functionality
                    </p>
                  </div>
                </ScrollAnimatedSection>
              </div>
              <ScrollAnimatedSection animationType='fadeIn' delay={400}>
                <div className='flex flex-col sm:flex-row gap-4 justify-center pt-6 relative z-10'>
                  <Link
                    href='/contact'
                    className='relative inline-flex items-center justify-center px-10 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer'
                  >
                    Start a Project
                  </Link>
                  <Link
                    href='/resume-suman-dey.pdf'
                    target='_blank'
                    className='relative inline-flex items-center justify-center px-10 py-4 border border-purple-600 text-purple-400 font-bold rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer'
                  >
                    View Resume
                  </Link>
                </div>
              </ScrollAnimatedSection>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>
    </main>
  );
}
