import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiAmazonwebservices,
  SiAndroid,
  SiApachecordova,
  SiDocker,
  SiFirebase,
  SiFormik,
  SiGithub,
  SiGraphql,
  SiHackthebox,
  SiJirasoftware,
  SiLinux,
  SiPrisma,
  SiRedux,
  SiSap,
  SiSimpleicons,
  SiSwagger,
  SiVite,
  SiAdobeacrobatreader,
  SiReacthookform,
} from "react-icons/si";

type TechItemProps = {
  icon: React.ReactNode;
  label: string;
};

const TechItem = ({ icon, label }: TechItemProps) => (
  <li className='flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow hover:scale-105 transform transition'>
    {icon}
    <span className='mt-2 text-lg text-gray-300'>{label}</span>
  </li>
);

type HighlightItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const HighlightItem = ({ icon, title, description }: HighlightItemProps) => (
  <div className='bg-gray-800 p-5 rounded-lg shadow flex items-start gap-4 hover:scale-[1.02] transform transition w-full sm:w-[48%]'>
    <div className='text-purple-400 text-3xl'>{icon}</div>
    <div>
      <h4 className='text-white font-bold text-lg'>{title}</h4>
      <p className='text-gray-300 text-sm mt-1 leading-relaxed'>{description}</p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <main className='w-full h-full flex flex-col gap-14 text-white'>
        {/* Page Title */}
        <section className='text-center'>
          <h1 className='text-5xl font-bold mb-3'>
            About <span className='text-purple-400'>Me</span>
          </h1>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            Solving real-world tech challenges through performance-first architecture, clean
            engineering, and solid teamwork.
          </p>
        </section>

        {/* Professional Overview */}
        <section className='max-w-4xl mx-auto space-y-6'>
          <div className='text-lg text-gray-300 leading-relaxed'>
            <p>
              I’m <strong className='text-white'>Suman Dey</strong>, a{" "}
              <span className='text-purple-400 font-medium'>Full Stack Developer</span> with over{" "}
              <strong>7 years</strong> of hands-on experience building and scaling secure,
              high-performing applications using cutting-edge web technologies.
            </p>
            <p className='mt-4'>
              From building custom UI frameworks with <strong>React.js</strong>,{" "}
              <strong>React Hook Form</strong>, <strong>React Query</strong>, to optimizing backend
              APIs using <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
              <strong>PostgreSQL</strong>, I focus on building solutions that are fast, modular, and
              maintainable.
            </p>
            <p className='mt-4'>
              I’ve led cross-functional teams at <strong>ROITech Consulting</strong>, delivered
              multi-module enterprise systems, architected resume search engines using stored
              procedures with trigram indexes, and designed workflows for PDF/Excel automation and
              launchpad integrations.
            </p>
            <p className='mt-4'>
              I also engineered scalable systems using <strong>worker threads</strong>, implemented{" "}
              <strong>CI/CD pipelines</strong>, and deployed cloud-native apps with{" "}
              <strong>AWS</strong> (S3, EC2), along with hybrid mobile apps using{" "}
              <strong>Planet9, SAPUI5, Cordova</strong>, and <strong>Firebase</strong>.
            </p>
            <p className='mt-4'>
              Every day, I aim to simplify complexity — whether that’s through better state
              management, DB optimization, or mentoring developers to build smarter systems.
            </p>
          </div>
        </section>

        {/* Personal Story */}
        <section className='max-w-4xl mx-auto space-y-4 text-lg text-gray-300 leading-relaxed'>
          <h2 className='text-2xl font-bold text-purple-400 mb-2'>My Journey</h2>
          <p>
            I didn’t start with fancy tools or a high-end machine — just a dusty old PC, a dial-up
            connection, and a curiosity to understand how the web worked. I still remember the
            thrill of building my first login screen using plain HTML and JavaScript — and how every
            small bug fix felt like solving a puzzle.
          </p>
          <p>
            Over the years, this curiosity evolved into a deep passion for crafting seamless user
            experiences and architecting clean backend systems. I’m a self-learner by nature, and
            I’ve spent late nights figuring out multi-threading in Node.js or decoding how React
            reconciles updates just for the sake of better performance.
          </p>
          <p>
            I've faced high-pressure deadlines, late-night production issues, and massive refactors
            — but nothing beats the satisfaction of seeing a product go live and perform reliably
            under real-world stress. For me, it's not just about coding — it’s about impact.
          </p>
          <p>
            What keeps me going isn’t just the tech — it’s the people, the stories behind the apps,
            and the trust teams place in well-built systems. And I aim to honor that trust with
            every line of code I write.
          </p>
        </section>

        {/* Work Experience */}
        <section className=''>
          <h2 className='text-2xl font-bold text-purple-400 mb-4'>Work Experience</h2>
          <div className='flex flex-row gap-6 overflow-x-auto p-2'>
            <div className='min-w-[250px] bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transform transition'>
              <h3 className='text-xl font-bold text-white'>Team Lead & Architect</h3>
              <p className='text-purple-400'>ROITech Consulting</p>
              <span className='text-gray-400 text-sm'>2021 - Present</span>
            </div>
            <div className='min-w-[250px] bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transform transition'>
              <h3 className='text-xl font-bold text-white'>Full Stack Developer</h3>
              <p className='text-purple-400'>ROITech Consulting</p>
              <span className='text-gray-400 text-sm'>2019 - 2021</span>
            </div>
            <div className='min-w-[250px] bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transform transition'>
              <h3 className='text-xl font-bold text-white'>SAP UI5 / Hybrid App Developer</h3>
              <p className='text-purple-400'>ROITech Consulting</p>
              <span className='text-gray-400 text-sm'>2018 - 2019</span>
            </div>
          </div>
          <div className='flex justify-end mt-4'>
            <Link
              href='/experience'
              className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-bold transition'
            >
              See More
            </Link>
          </div>
        </section>
        {/* Professional Highlights */}
        <section className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold mb-6 text-purple-400'>✨ Professional Highlights</h2>
          <div className='flex flex-wrap gap-4 justify-between'>
            <HighlightItem
              icon={<SiPostgresql />}
              title='Resume Search Engine'
              description='Built a high-performance resume filter using PostgreSQL functions with trigram indexes, pagination, and dynamic filters.'
            />
            <HighlightItem
              icon={<SiNodedotjs />}
              title='Worker Thread Scaling'
              description='Handled large file processing and AI tasks with worker threads and cluster modules for max concurrency and fault tolerance.'
            />
            <HighlightItem
              icon={<SiAmazonwebservices />}
              title='AWS Integration'
              description='Deployed apps using S3 for storage and EC2 for compute. Handled uploads, archiving, backups, and file cleanup automation.'
            />
            <HighlightItem
              icon={<SiReacthookform />}
              title='Complex Forms'
              description='Built dynamic forms using React Hook Form with validation schema, nested fields, and live previews.'
            />
            <HighlightItem
              icon={<SiSwagger />}
              title='OpenAPI + Swagger'
              description='Documented APIs using Swagger and OpenAPI spec to improve collaboration between frontend and QA teams.'
            />
            <HighlightItem
              icon={<SiGithub />}
              title='CI/CD Pipelines'
              description='Implemented pipelines with environment-aware config, stored proc sync, and safe rollbacks for production deploys.'
            />
            <HighlightItem
              icon={<SiVite />}
              title='Vite Migration'
              description='Refactored large-scale projects from Webpack to Vite for 3x faster dev builds and cleaner modular code structure.'
            />
            <HighlightItem
              icon={<SiTypescript />}
              title='Type-Safe Architecture'
              description='Enforced type safety and API contract stability using TypeScript across frontend, backend, and DB layers.'
            />
            <HighlightItem
              icon={<SiSap />}
              title='Enterprise SAP Projects'
              description='Built custom launchpads, e-signature flows, and hybrid mobile SAPUI5 apps on the Planet9 ecosystem.'
            />
            <HighlightItem
              icon={<SiAdobeacrobatreader />}
              title='PDF & Excel Automation'
              description='Engineered PDF generation, Excel import/export, copy-paste formatting — all from script level.'
            />
            <HighlightItem
              icon={<SiAndroid />}
              title='Cordova + Native SDKs'
              description='Built barcode scanner and Honeywell printer plugins for Cordova with native Android SDK integration.'
            />
            <HighlightItem
              icon={<SiJirasoftware />}
              title='Team Leadership'
              description='Led multiple project teams, conducted KT sessions, performed PR reviews, and improved onboarding documentation.'
            />
          </div>
        </section>

        {/* Tech Stack Snapshot */}
        {/* Tech Stack Snapshot */}
        <section className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold mb-4 text-purple-400'>🧰 Tech Stack I Love</h2>
          <ul className='flex gap-4 flex-wrap'>
            {/* Core Frontend */}
            <TechItem
              icon={<SiTypescript size={40} className='text-blue-500' />}
              label='TypeScript'
            />
            <TechItem
              icon={<SiJavascript size={40} className='text-yellow-500' />}
              label='JavaScript'
            />
            <TechItem icon={<SiReact size={40} className='text-blue-400' />} label='React.js' />
            <TechItem icon={<SiNextdotjs size={40} className='text-black' />} label='Next.js' />
            <TechItem
              icon={<SiTailwindcss size={40} className='text-sky-500' />}
              label='Tailwind CSS'
            />
            <TechItem
              icon={<SiFramer size={40} className='text-pink-500' />}
              label='Framer Motion'
            />

            {/* Backend & Infra */}
            <TechItem icon={<SiNodedotjs size={40} className='text-green-600' />} label='Node.js' />
            <TechItem icon={<SiExpress size={40} className='text-gray-300' />} label='Express.js' />
            <TechItem
              icon={<SiPostgresql size={40} className='text-blue-600' />}
              label='PostgreSQL'
            />
            <TechItem
              icon={<SiAmazonwebservices size={40} className='text-orange-500' />}
              label='AWS (S3, EC2)'
            />

            {/* Tooling & Libraries */}
            <TechItem icon={<SiVite size={40} className='text-purple-400' />} label='Vite.js' />
            <TechItem
              icon={<SiSwagger size={40} className='text-yellow-400' />}
              label='Swagger / OpenAPI'
            />
            <TechItem
              icon={<SiGraphql size={40} className='text-pink-400' />}
              label='GraphQL (basic)'
            />
            <TechItem
              icon={<SiPrisma size={40} className='text-indigo-400' />}
              label='TypeORM / Prisma'
            />
            <TechItem
              icon={<SiRedux size={40} className='text-purple-500' />}
              label='React Query'
            />
            <TechItem
              icon={<SiFormik size={40} className='text-teal-400' />}
              label='React Hook Form'
            />
            <TechItem
              icon={<SiSimpleicons size={40} className='text-white' />}
              label='React Table'
            />
            <TechItem
              icon={<SiDocker size={40} className='text-blue-400' />}
              label='Docker (used in CI/CD)'
            />

            {/* SAP, Hybrid & Mobile */}
            <TechItem icon={<SiSap size={40} className='text-blue-500' />} label='SAPUI5 / Fiori' />
            <TechItem
              icon={<SiAndroid size={40} className='text-green-500' />}
              label='Android SDK'
            />
            <TechItem
              icon={<SiFirebase size={40} className='text-yellow-500' />}
              label='Firebase Auth/Storage'
            />
            <TechItem
              icon={<SiApachecordova size={40} className='text-red-500' />}
              label='Cordova Plugins'
            />
            <TechItem
              icon={<SiHackthebox size={40} className='text-pink-400' />}
              label='Planet9 (Custom Platform)'
            />

            {/* Dev Experience */}

            <TechItem icon={<SiGithub size={40} className='text-white' />} label='Git & GitHub' />
            <TechItem
              icon={<SiLinux size={40} className='text-yellow-200' />}
              label='Linux / Bash'
            />
            <TechItem
              icon={<SiJirasoftware size={40} className='text-blue-400' />}
              label='Jira / Agile'
            />
          </ul>
        </section>

        {/* Final Call to Action */}
        <section className='text-center mt-10'>
          <Link
            href='/projects'
            className='bg-purple-600 text-white px-10 py-3 rounded-3xl font-bold hover:bg-purple-700 transition'
          >
            Explore My Projects
          </Link>
        </section>
      </main>
    </>
  );
}
