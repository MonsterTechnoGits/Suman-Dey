import React from "react";
import Noise from "./reactbits/Noise";
import { Icon } from "@iconify/react";
import SplitText from "./reactbits/SplitText";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className='max-w-[450px] min-w-[400px] w-[450px] h-full rounded-3xl bg-[#1212127e] backdrop-blur-2xl flex-1'>
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      >
        <div className='w-full h-full flex justify-center items-center flex-col gap-3 z-99 p-4'>
          <Image
            className='rounded-2xl w-[250px] h-[300px] object-cover'
            width={300}
            height={250}
            alt='Suman Dey'
            src={"/suman-dey-image.png"}
          />
          <SplitText
            text="Suman Dey"
            className='text-3xl font-semibold text-center text-white'
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin='-50px'
          />
          <p className='text-white text-lg'>Senior Full Stack Developer</p>

          <div className='flex gap-4'>
            <a href='https://github.com/imsumandey' target='_blank' rel='noopener noreferrer'>
              <Icon
                icon={"mdi:github"}
                className='w-8 h-8 text-white hover:text-gray-400 transition-colors duration-300'
              />
            </a>
            <a href='https://www.linkedin.com/in/imsumandey/' target='_blank' rel='noopener noreferrer'>
              <Icon
                icon={"mage:linkedin"}
                className='w-8 h-8 text-white hover:text-gray-400 transition-colors duration-300'
              />
            </a>
            <a href='https://www.facebook.com/imsumandey' target='_blank' rel='noopener noreferrer'>
              <Icon
                icon={"ic:baseline-facebook"}
                className='w-8 h-8 text-white hover:text-gray-400 transition-colors duration-300'
              />
            </a>
          </div>

          {/* 🔽 Download Button */}
          <a
            href='/resume-suman-dey.pdf'
            download
            className='mt-4 inline-flex items-center gap-2 px-4 py-2 text-white border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300'
          >
            <Icon icon="material-symbols:download-rounded" className='w-5 h-5' />
            Download Resume
          </a>
        </div>
      </Noise>
    </div>
  );
}
