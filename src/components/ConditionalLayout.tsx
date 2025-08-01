"use client";

import { usePathname } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import Noise from "@/components/reactbits/Noise";
import ClientInteractiveDock from "@/components/ClientInteractiveDock";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const items = [
    {
      icon: <Icon icon={"fluent-color:home-32"} className='text-white size-6' />,
      label: "Home",
      path: "/",
      onClick: () => {
        router.push("/");
      },
    },
    {
      icon: (
        <Icon
          icon={"flat-color-icons:about"}
          className='text-white size-6'
        />
      ),
      label: "About",
      path: "/about",
      onClick: () => {
        router.push("/about");
      },
    },
    {
      icon: <Icon icon={"fluent-color:text-bullet-list-square-sparkle-32"} className='text-white size-6' />,
      label: "Blog",
      path: "/blogs",
      onClick: () => {
        router.push("/blogs");
      },
    },
    {
      icon: (
        <Image
          src='/monster-techno-logo.png'
          alt='Monster Techno'
          width={24}
          height={24}
          className='size-6'
        />
      ),
      label: "Monster Techno",
      path: "/monster-techno",
      onClick: () => {
        router.push("/monster-techno");
      },
    },
    {
      icon: <Icon icon={"fluent-color:mail-32"} className='text-white size-6' />,
      label: "Contact",
      path: "/contact",
      onClick: () => {
        router.push("/contact");
      },
    },
  ];
  
const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
const isBlogPage = !items.some(item => item.path === normalizedPath);
  if (isBlogPage) {
    // Blog pages (list and single) layout - no profile card, full width
    return (
      <div className='w-full h-dvh flex justify-center items-center px-2 sm:px-6 md:px-10 lg:px-10 xl:px-10 py-6 sm:py-10 lg:py-10'>
        <div className='w-full h-full rounded-3xl bg-[#1212127e] backdrop-blur-2xl'>
          <Noise
            patternSize={250}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={15}
          >
            <main className='w-full h-full flex flex-col items-center justify-start'>
              <div className='scroll-container w-full px-4 sm:px-6 md:px-10 lg:px-10 pb-[110px] pt-6 sm:pt-10 lg:pt-10 overflow-auto scrollbar-dark scroll-smooth flex-1'>
                {children}
              </div>
              <div className='relative w-full z-50 h-[80px] sm:h-[100px] bg-gradient-to-t from-[#121212] via-[#121212d5] to-[#121212ea] rounded-b-3xl backdrop-blur-2xl'>
                <ClientInteractiveDock items={items}/>
              </div>
            </main>
          </Noise>
        </div>
      </div>
    );
  }

  // Default layout with profile card
  return (
    <div className='w-full h-dvh flex flex-col lg:flex-row justify-center items-center px-2 sm:px-6 md:px-10 lg:px-10 xl:px-10 py-6 sm:py-10 lg:py-10 gap-4 sm:gap-6 lg:gap-5'>
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
            <div className='scroll-container w-full px-4 sm:px-6 md:px-10 lg:px-10 pb-[110px] pt-6 sm:pt-10 lg:pt-10 overflow-auto scrollbar-dark scroll-smooth flex-1'>
              {children}
            </div>
            <div className='relative w-full z-50 h-[80px] sm:h-[100px] bg-gradient-to-t from-[#121212] via-[#121212d5] to-[#121212ea] rounded-b-3xl backdrop-blur-2xl'>
              <ClientInteractiveDock items={items}/>
            </div>
          </main>
        </Noise>
      </div>
    </div>
  );
}
