import React from "react";
import Noise from "./reactbits/Noise";
import { Icon } from "@iconify/react";
import SplitText from "./reactbits/SplitText";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className='w-full lg:min-w-[420px] lg:w-[480px] rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#1212127e] to-[#0f0f0f] backdrop-blur-3xl border border-white/10 shadow-2xl shadow-purple-500/5 h-auto min-h-[140px] sm:h-[220px] lg:h-full relative overflow-hidden'>
      {/* Subtle gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 pointer-events-none' />

      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={8}
        className='flex justify-center items-start flex-col sm:flex-col gap-2 sm:gap-4 lg:gap-6 z-10 p-2 sm:p-4 lg:p-8 h-full relative'
      >
        {/* Compact mobile header section */}
        <div className='flex flex-row sm:flex-col items-start sm:items-center gap-2 sm:gap-4 w-full'>
          {/* Compact Profile Image */}
          <div className='flex-shrink-0 relative group'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-lg sm:rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-105' />
            <div className='relative bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-blue-600/20 p-0.5 sm:p-1 rounded-lg sm:rounded-2xl'>
              <Image
                className='rounded-md sm:rounded-xl w-[50px] h-[60px] sm:w-[120px] sm:h-[144px] lg:w-[180px] lg:h-[216px] object-cover transition-transform duration-500 group-hover:scale-105'
                width={300}
                height={250}
                alt='Suman Dey - Senior Full Stack Developer'
                src={"/suman-dey-image.png"}
                priority
              />
            </div>
            {/* Compact Status Indicator */}
            <div className='absolute bottom-0 right-0 sm:bottom-2 sm:right-2 w-2.5 h-2.5 sm:w-4 sm:h-4 bg-green-500 rounded-full border border-white shadow-lg'>
              <div className='w-full h-full bg-green-400 rounded-full animate-pulse' />
            </div>
          </div>

          {/* Main content area - optimized for mobile space usage */}
          <div className='flex flex-col gap-0.5 sm:gap-2 flex-1 sm:items-center sm:w-full'>
            {/* Name and Title Section */}
            <div className='flex flex-col gap-0.5 sm:gap-1'>
              <SplitText
              text='Suman Dey'
              textAlign="center"
              className='text-lg sm:text-2xl lg:text-3xl font-semibold text-white text-left sm:text-center lg:text-center'
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin='-50px'
              />

              <p className='text-gray-300 text-xs sm:text-base lg:text-lg font-medium text-left sm:text-center lg:text-center leading-tight'>
              Passionate Full Stack Developer
              </p>

              <div className='flex items-center gap-1 text-xs sm:text-sm text-purple-400 justify-start sm:justify-center lg:justify-center'>
              <Icon icon='mdi:office-building' className='w-2.5 h-2.5 sm:w-4 sm:h-4' />
              <span className='text-xs'>ROITech</span>
              <span className='text-gray-500 text-xs'>•</span>
              <span className='text-xs'>7+ Years</span>
              </div>
            </div>

            {/* Mobile stats moved here to utilize right space */}
            <div className='flex sm:hidden items-center gap-2 text-xs text-gray-400 mt-1'>
              <div className='flex items-center gap-1'>
                <Icon icon='mdi:map-marker' className='w-3 h-3 text-purple-400' />
                <span>West Bengal, India</span>
              </div>
              <span className='text-gray-600'>•</span>
              <div className='flex items-center gap-1'>
                <Icon icon='mdi:clock' className='w-3 h-3 text-green-400' />
                <span>Available</span>
              </div>
            </div>

            {/* Social links moved to right side on mobile for better space usage */}
            <div className='flex sm:hidden gap-1.5 mt-1.5'>
              {[
                {
                  icon: "mdi:github",
                  href: "https://github.com/imsumandey",
                  color: "hover:text-gray-300 hover:bg-gray-800",
                  label: "GitHub",
                },
                {
                  icon: "mdi:linkedin",
                  href: "https://www.linkedin.com/in/imsumandey/",
                  color: "hover:text-blue-400 hover:bg-blue-900/20",
                  label: "LinkedIn",
                },
                {
                  icon: "mdi:youtube",
                  href: "https://youtube.com/MonsterTechno",
                  color: "hover:text-red-400 hover:bg-red-900/20",
                  label: "YouTube",
                },
                {
                  icon: "mdi:facebook",
                  href: "https://www.facebook.com/imsumandey",
                  color: "hover:text-blue-500 hover:bg-blue-900/20",
                  label: "Facebook",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`group relative p-1.5 rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:border-white/20 ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon
                    icon={social.icon}
                    className='w-3 h-3 transition-transform duration-300 group-hover:scale-110'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Professional Stats */}
        <div className='hidden sm:flex items-center justify-center gap-4 text-xs lg:text-sm text-gray-400 w-full'>
          <div className='flex items-center gap-1'>
            <Icon icon='mdi:map-marker' className='w-4 h-4 text-purple-400' />
            <span>West Bengal, India</span>
          </div>
          <span className='text-gray-600'>•</span>
          <div className='flex items-center gap-1'>
            <Icon icon='mdi:clock' className='w-4 h-4 text-green-400' />
            <span>Available</span>
          </div>
        </div>

        {/* Enhanced Social Links - Desktop only */}
        <div className='hidden sm:flex gap-2 sm:gap-3 justify-center sm:justify-center w-full'>
          {[
            {
              icon: "mdi:github",
              href: "https://github.com/imsumandey",
              color: "hover:text-gray-300 hover:bg-gray-800",
              label: "GitHub",
            },
            {
              icon: "mdi:linkedin",
              href: "https://www.linkedin.com/in/imsumandey/",
              color: "hover:text-blue-400 hover:bg-blue-900/20",
              label: "LinkedIn",
            },
            {
              icon: "mdi:youtube",
              href: "https://youtube.com/MonsterTechno",
              color: "hover:text-red-400 hover:bg-red-900/20",
              label: "YouTube",
            },
            {
              icon: "mdi:facebook",
              href: "https://www.facebook.com/imsumandey",
              color: "hover:text-blue-500 hover:bg-blue-900/20",
              label: "Facebook",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className={`group relative p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:border-white/20 ${social.color}`}
              aria-label={social.label}
            >
              <Icon
                icon={social.icon}
                className='w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110'
              />

              {/* Tooltip - Hide on mobile */}
              <div className='hidden sm:block absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                <div className='bg-gray-900 text-white text-xs px-2 py-1 rounded border border-gray-700 whitespace-nowrap'>
                  {social.label}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Enhanced CTA Buttons - Mobile Optimized */}
        <div className='flex flex-row sm:flex-col gap-2 w-full'>
          <a
            href='/resume-suman-dey.pdf'
            download
            className='group relative inline-flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:from-purple-700 hover:to-purple-800 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-xs sm:text-base flex-1'
          >
            <Icon
              icon='material-symbols:download-rounded'
              className='w-3 h-3 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110'
            />
            <span className='hidden xs:inline sm:inline'>Grab My Resume</span>
            <span className='xs:hidden sm:hidden'>Resume</span>

            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10' />
          </a>

          <a
            href='/contact'
            className='group inline-flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-6 sm:py-3 border-2 border-white/20 text-white rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:scale-105 text-xs sm:text-base flex-1'
          >
            <Icon
              icon='mdi:email'
              className='w-3 h-3 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110'
            />
            <span className='hidden xs:inline sm:inline'>Let&apos;s Chat!</span>
            <span className='xs:hidden sm:hidden'>Chat</span>
          </a>
        </div>
      </Noise>
    </div>
  );
}
