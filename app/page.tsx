/* eslint-disable react/jsx-key */
'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import ContactForm from './ContactForm'
import Navbar from './Navbar'
import SkillsCarousel from './SkillsCarousel'
import { TypeAnimation } from 'react-type-animation'
import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './customSwiper.css'
import HorizontalCarousel from './HorizontalCarousel'

export default function Home() {

  const iconStyles = {
    fontSize: "8rem",
  }

  const projectIcons = {
    fontSize: "3rem"
  }

  const skillsIcons = [
    <Image src="/dsep.png" width={500} height={500} alt="DSEP" title="DSEP" className="rounded-2xl" />,
      <Image src="/fh-bane-condition.png" width={500} height={500} alt="DSEP" title="DSEP" className="rounded-2xl" />,
      <Image src="/frosthaven-helper.png" width={500} height={500} alt="DSEP" title="DSEP" className="rounded-2xl" />,
      <Image src="/gymnotebook.png" width={500} height={500} alt="DSEP" title="DSEP" className="rounded-2xl" />,
  ]

  const [flavor, setFlavor] = useState("pumpkinSpice")
  const [darkMode, setDarkMode] = useState(false)
  const [theme, setTheme] = useState(flavor + (darkMode ? "Dark" : "Light"));

  return (
    <main data-theme={theme} className="flex h-screen w-screen flex-col items-center justify-between overflow-y-hidden overscroll-y-contain overflow-x-hidden snap-mandatory snap-y bg-background">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} flavor={flavor} setFlavor={setFlavor} setTheme={setTheme} />
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {/* Home Section */}
        <SwiperSlide id="home">
          <div id="home" className="flex justify-center items-center gap-5 text-neutral min-h-screen w-screen">
            <div className="flex flex-col justify-center items-start gap-5 text-neutral min-h-screen w-screen">
              <div className="flex flex-row gap-5 justify-start items-end w-full pl-10">
                <h2 className="text-neutral text-5xl">My name is</h2>
                <h2 className="text-primary text-7xl">Josh Mayeda</h2>
              </div>
              <div className="flex flex-row justify-start items-end w-full pl-10">
                <h2 className="text-neutral text-5xl">I am&nbsp;</h2>
                <TypeAnimation
                  sequence={[
                    "a full-stack web developer",
                    1500,
                    "a software engineer",
                    1500,
                    "a dog dad",
                    1500,
                    "an avid golfer",
                    1500,
                    "a book lover",
                    1500,
                    "a computer science graduate",
                    1500,
                    "a boardgame enthusiast",
                    1500,
                  ]}
                  wrapper="h2"
                  repeat={Infinity}
                  className="text-primary text-5xl"
                  cursor={true}
                  speed={50}
                />
              </div>
            </div>
            <div className="items-center w-8/12">
              <Image src="/memoji.png" width={500} height={500} alt="Josh Mayeda's Memoji" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide id="about">
          <div id="about" className="flex flex-col items-center text-neutral min-h-screen w-screen p-16 snap-start">
            <h1 className="text-neutral mt-5 text-6xl">About Me</h1>
              <div className="flex items-center justify-center gap-8 w-5/6 min-h-11/12 bg-secondary mt-6 rounded-2xl">
                <p className="text-2xl basis-1/2 pt-3 pb-3 pl-10">
                  I am a full-stack web developer with a passion for creating beautiful, functional,
                  and user-friendly web applications. I have experience with a variety of technologies,
                  including React, Next.js, Node.js, Express, and MongoDB. I am always looking to learn
                  new technologies and improve my skills. 
                </p>
                <div className="flex items-center justify-center basis-1/2 h-full">
                  <SkillsCarousel images={skillsIcons} />
                </div>
              </div>
          </div>
        </SwiperSlide>

        {/* Projects Section */}
        <SwiperSlide id="projects">
          <div id="projects" className="flex flex-col items-center text-neutral min-h-screen w-screen p-8 pb-4 snap-start">
            <h1 className="mt-5 mb-5 text-6xl">Projects</h1>
            <div className="flex flex-col mt-5 gap-10 w-5/6 items-center justify-center">
              <div className="flex gap-16 w-full justify-between">
                <div className="flex w-1/4 items-center justify-center hover:opacity-50 group ring ring-primary rounded-2xl">
                  <div className="absolute text-white text-4xl opacity-0 group-hover:opacity-100">
                    DSEP
                  </div>
                  <Image src="/dsep.png" width={1080} height={1080} alt="DSEP" title="DSEP" className="rounded-2xl" />
                </div>
                <div className="flex w-1/4 items-center justify-center hover:opacity-50 group ring ring-primary rounded-2xl">
                  <div className="absolute text-white text-4xl opacity-0 group-hover:opacity-100 whitespace-pre-wrap">
                    Frosthaven Helper
                  </div>
                  <Image src="/frosthaven-helper.png" width={1080} height={1080} alt="Frosthaven Helper" title="Frosthaven Helper" className="rounded-2xl" />
                </div>
                <div className="flex w-1/4 items-center justify-center hover:opacity-50 group ring ring-primary rounded-2xl">
                  <div className="absolute text-white text-4xl opacity-0 group-hover:opacity-100">
                    Gym Notebook
                  </div>
                  <Image src="/gymnotebook.png" width={1080} height={1080} alt="Gym Notebook" title="Gym Notebook" className="rounded-2xl" />
                </div>
                <div className="flex w-1/4 items-center justify-center hover:opacity-50 group ring ring-primary rounded-2xl">
                  <div className="absolute text-white text-7xl opacity-0 group-hover:opacity-100">
                    DSEP
                  </div>
                  <Image src="/fh-bane-condition.png" width={1080} height={1080} alt="DSEP" title="DSEP" className="rounded-2xl" />
                </div>
              </div>

              <div className="flex gap-16 w-full justify-between">
                <div className="flex w-1/4 items-center justify-center hover:opacity-50 group ring ring-primary rounded-2xl">
                  <div className="absolute text-white text-7xl opacity-0 group-hover:opacity-100">
                    DSEP
                  </div>
                  <Image src="/fh-bane-condition.png" width={1080} height={1080} alt="DSEP" title="DSEP" className="rounded-2xl" />
                </div>
                <div className="flex w-1/4 items-center justify-center hover:opacity-50 group ring ring-primary rounded-2xl">
                  <div className="absolute text-white text-7xl opacity-0 group-hover:opacity-100">
                    DSEP
                  </div>
                  <Image src="/fh-bane-condition.png" width={1080} height={1080} alt="DSEP" title="DSEP" className="rounded-2xl" />
                </div>
                <div className="flex w-1/4 items-center justify-center hover:opacity-50 group ring ring-primary rounded-2xl">
                  <div className="absolute text-white text-7xl opacity-0 group-hover:opacity-100">
                    DSEP
                  </div>
                  <Image src="/fh-bane-condition.png" width={1080} height={1080} alt="DSEP" title="DSEP" className="rounded-2xl" />
                </div>
                <div className="flex w-1/4 items-center justify-center hover:opacity-50 group ring ring-primary rounded-2xl">
                  <div className="absolute text-white text-7xl opacity-0 group-hover:opacity-100">
                    DSEP
                  </div>
                  <Image src="/fh-bane-condition.png" width={1080} height={1080} alt="DSEP" title="DSEP" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide id="contact">
          <div id="contact" className="flex flex-col items-center text-neutral min-h-screen w-screen p-16 snap-start">
            <h1 className="text-neutral mt-5 text-6xl">Contact</h1>
            <ContactForm />
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  )
}
