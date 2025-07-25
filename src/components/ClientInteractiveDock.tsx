"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Dock from "@/components/reactbits/Dock";

export default function ClientInteractiveDock() {
  const router = useRouter();

  const items = [
    {
      icon: <Icon icon={"fluent-color:home-32"} className='text-white size-6' />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: (
        <Icon
          icon={"fluent-color:text-bullet-list-square-sparkle-32"}
          className='text-white size-6'
        />
      ),
      label: "About",
      onClick: () => router.push("/about"),
    },
    {
      icon: <Icon icon={"fluent-color:document-text-32"} className='text-white size-6' />,
      label: "Blog",
      onClick: () => router.push("/blogs"),
    },
    {
      icon: <Image src='/monster-techno-logo.png' alt='Monster Techno' width={24} height={24} className='size-6' />,
      label: "Monster Techno",
      onClick: () => router.push("/monster-techno"),
    },
    {
      icon: <Icon icon={"fluent-color:mail-32"} className='text-white size-6' />,
      label: "Contact",
      onClick: () => router.push("/contact"),
    },
  ];

  return (
    <div className='dock-container overflow-hidden absolute left-1/2 bottom-0 transform -translate-x-1/2'>
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className='absolute bottom-0'
      />
    </div>
  );
}
