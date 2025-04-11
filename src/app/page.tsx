import Head from "next/head";
import CountUp from "@/components/reactbits/CountUp";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <main className='w-full h-full flex items-start justify-startx flex-col gap-10'>
        {/* Hero Section */}
        <section className='gap-2 flex flex-col'>
          <h1 className='text-6xl font-bold'>
            Transforming Ideas into <span className='text-purple-400'>Innovation</span>
          </h1>
          <p className='text-lg text-gray-300'>
            I am a passionate full-stack developer with over 7 years of experience in building
            sleek, scalable web applications. My expertise lies in creating high-performance,
            user-friendly digital solutions that merge modern design with robust backend
            functionality. I specialize in crafting intuitive user experiences and solving complex
            technical challenges with clean, efficient code.
          </p>
          <p className='text-lg text-gray-300 mt-4'>
            Leveraging expertise in JavaScript, TypeScript, React, and Node.js, I build scalable
            applications that drive success. I continually optimize performance and maintain clean
            architecture using modern cloud technologies...
            <a href='/about' className='text-purple-400 underline'>
              {" "}
              Learn More
            </a>
          </p>
        </section>

        {/* Stats Section */}
        <section className='flex flex-wrap justify-center gap-6'>
          <article className='flex flex-col items-center gap-3'>
            <div className='text-5xl font-bold text-purple-400'>
              +
              <CountUp
                from={0}
                to={7}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
            </div>
            <p className='text-sm text-gray-400 uppercase'>
              Years of
              <br />
              Experience
            </p>
          </article>
          <article className='flex flex-col items-center gap-3'>
            <div className='text-5xl font-bold text-purple-400'>
              +
              <CountUp
                from={0}
                to={50}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
            </div>
            <p className='text-sm text-gray-400 uppercase'>
              Successful
              <br />
              Deployments
            </p>
          </article>
          <article className='flex flex-col items-center gap-3'>
            <div className='text-5xl font-bold text-purple-400'>
              +
              <CountUp
                from={0}
                to={10}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
            </div>
            <p className='text-sm text-gray-400 uppercase'>
              Technologies
              <br />
              Mastered
            </p>
          </article>
        </section>

        {/* Uncomment this section if you want to include AutoScroll with icons */}
        {/*
        <AutoScroll
          items={[
            <Icon icon={"skill-icons:react-dark"} className="size-14" />,
            <Icon icon={"skill-icons:nextjs-dark"} className="size-14" />,
            <Icon icon={"skill-icons:nodejs-dark"} className="size-14" />,
            <Icon icon={"skill-icons:github-dark"} className="size-14" />,
            <Icon icon={"skill-icons:javascript"} className="size-14" />,
            <Icon icon={"skill-icons:typescript"} className="size-14" />,
            <Icon icon={"skill-icons:expressjs-dark"} className="size-14" />,
            <Icon icon={"skill-icons:tailwindcss-dark"} className="size-14" />,
            <Icon icon={"skill-icons:androidstudio-dark"} className="size-14" />,
            <Icon icon={"skill-icons:vscode-dark"} className="size-14" />,
          ]}
        />
        */}

        {/* Call to Action */}
        <section>
          <Link
            href='/contact'
            className='bg-primary text-primary-foreground px-10 py-3 rounded-3xl font-bold hover:bg-primary/80 ease-in-out'
          >
            Let's Talk
          </Link>
        </section>
      </main>
    </>
  );
}
