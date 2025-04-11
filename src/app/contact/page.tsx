import React from "react";

export default function ContactPage() {
  return (
    <main className='w-full h-full flex items-start justify-startx flex-col gap-10'>
    {/* Hero Section */}
    <section className='gap-2 flex flex-col'>
      <h1 className='text-6xl font-bold'>
      Let’s Create Something <span className='text-purple-400'>Amazing</span>
      </h1>
    
    </section>

    {/* Stats Section */}
    <section className='flex flex-wrap justify-center gap-6'>

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
      {/* <Link
        href='/contact'
        className='bg-primary text-primary-foreground px-10 py-3 rounded-3xl font-bold hover:bg-primary/80 ease-in-out'
      >
        Let's Talk
      </Link> */}
    </section>
  </main>
  );
}
