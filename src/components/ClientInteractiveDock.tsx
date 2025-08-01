"use client";

import Dock from "@/components/reactbits/Dock";
import { JSX } from "react";

type Props = {
  items: {
    icon: JSX.Element;
    label: string;
    path: string;
    onClick: () => void;
  }[];
};

export default function ClientInteractiveDock({ items }: Props) {
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
