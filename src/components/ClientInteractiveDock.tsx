"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
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
      icon: <Icon icon={"fluent-color:text-bullet-list-square-sparkle-32"} className='text-white size-6'/>,
      label: "About",
      onClick: () => router.push("about"),
    },
    {
      icon: <Icon icon={""} />,
      label: "Services",
      onClick: () => router.push("services"),
    },
    {
      icon: <Icon icon={"fluent-color:mail-32"} className='text-white size-6' />,
      label: "Contact",
      onClick: () => router.push("contact"),
    },
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      className='absolute bottom-0'
    />
  );
}
