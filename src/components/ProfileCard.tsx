import React from "react";
import Noise from "./reactbits/Noise";
import { Icon } from "@iconify/react";
import SplitText from "./reactbits/SplitText";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className='w-full lg:min-w-[400px] lg:w-[450px] rounded-3xl bg-[#1212127e] backdrop-blur-2xl h-[170px] lg:h-full'>
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
        className='flex justify-center items-center flex-row sm:flex-col gap-3 sm:gap-3 z-99 p-3 sm:p-4 h-[170px] lg:h-full'
      >
        {/* <div className='w-full h-auto lg:h-full flex justify-center items-center flex-row sm:flex-col gap-3 sm:gap-3 z-99 p-3 sm:p-4'> */}
          <div className='flex-shrink-0'>
            <Image
              className='rounded-2xl w-[100px] h-[120px] sm:w-[200px] sm:h-[240px] lg:w-[250px] lg:h-[300px] object-cover'
              width={300}
              height={250}
              alt='Suman Dey'
              src={"/suman-dey-image.png"}
            />
          </div>
          <div className='flex flex-col gap-2 sm:gap-3 flex-1 sm:items-center'>
            <SplitText
              text="Suman Dey"
              className='text-lg sm:text-2xl lg:text-3xl font-semibold text-left sm:text-center text-white'
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin='-50px'
            />
            <p className='text-white text-xs sm:text-base lg:text-lg text-left sm:text-center'>Senior Full Stack Developer</p>

            <div className='flex gap-3 sm:gap-4 justify-start sm:justify-center'>
              <a href='https://github.com/imsumandey' target='_blank' rel='noopener noreferrer'>
                <Icon
                  icon={"mdi:github"}
                  className='w-5 h-5 sm:w-8 sm:h-8 text-white hover:text-gray-400 transition-colors duration-300'
                />
              </a>
              <a href='https://www.linkedin.com/in/imsumandey/' target='_blank' rel='noopener noreferrer'>
                <Icon
                  icon={"mage:linkedin"}
                  className='w-5 h-5 sm:w-8 sm:h-8 text-white hover:text-gray-400 transition-colors duration-300'
                />
              </a>
              <a href='https://www.facebook.com/imsumandey' target='_blank' rel='noopener noreferrer'>
                <Icon
                  icon={"ic:baseline-facebook"}
                  className='w-5 h-5 sm:w-8 sm:h-8 text-white hover:text-gray-400 transition-colors duration-300'
                />
              </a>
            </div>

            {/* 🔽 Download Button */}
            <a
              href='/resume-suman-dey.pdf'
              download
              className='mt-1 sm:mt-4 inline-flex items-center gap-1 px-2 py-1 sm:px-4 sm:py-2 text-white border border-white rounded-lg sm:rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-base self-start sm:self-center'
            >
              <Icon icon="material-symbols:download-rounded" className='w-3 h-3 sm:w-5 sm:h-5' />
              <span className='hidden sm:inline'>Download Resume</span>
              <span className='sm:hidden'>Resume</span>
            </a>
          </div>
        {/* </div> */}
      </Noise>
    </div>
  );
}
