'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation'
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function Home() {

  const iconStyles = {
    fontSize: "8rem",
  }

  const projectIcons = {
    fontSize: "3rem"
  }

  const [flavor, setFlavor] = useState("pumpkinSpice")
  const [description, setDescription] = useState(["a full-stack web developer", "a software engineer", "a dog dad", "an avid golfer", "a coffee enthusiast", "a computer science graduate"])
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between overflow-y-auto overscroll-y-contain overflow-x-hidden snap-mandatory snap-y bg-pumpkinSpiceBackground">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef} />

        {/* Home Section */}
        <div id="home" className="flex flex-col justify-center items-center gap-5 ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16 snap-start">
          <div className="flex flex-row gap-5 justify-start items-end w-11/12">
            <h2 className="text-pumpkinSpiceText text-5xl">My name is</h2>
            <h2 className="text-pumpkinSpiceAccent text-7xl">Josh Mayeda</h2>
          </div>
          <div className="flex self-start ml-19">
            <h2 className="text-pumpkinSpiceText text-5xl">I am&nbsp;</h2>
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
                "a coffee enthusiast",
                1500,
                "a computer science graduate",
                1500,
              ]}
              wrapper="h2"
              repeat={Infinity}
              className="text-pumpkinSpiceAccent text-5xl"
              cursor={true}
              speed={50}
            />
          </div>
        </div>
          
        {/* About Section
        <div id="about" ref={aboutRef} className="flex flex-col items-center ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16 snap-start">
          <h1 className="mt-10 text-6xl">About</h1>

          <div className="flex justify-center w-3/4 mt-10 gap-32">
            <h1 className="text-3xl self-center">
              I am a recent graduate from Sonoma State University with a Bachelor's Degree in Computer Science.
            </h1>
            <Carousel className="w-1/3"> 
                <div> 
                    <img src="/fh-bane-condition.png" alt="image1" /> 
                </div> 
                <div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png" alt="image2" /> 
                    <p className="legend">Image 2</p> 

                </div> 
                <div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png" alt="image3"/> 
                    <p className="legend">Image 3</p> 

                </div> 
                <div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png" alt="image4"/> 
                    <p className="legend">Image 4</p> 

                </div> 
                <div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png" alt="image5"/> 
                    <p className="legend">Image 5</p> 

                </div> 
            </Carousel>
          </div>
        </div> */}

        {/* Projects Section */}
        <div id="projects" ref={projectsRef} className="flex flex-col items-center ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16 pb-4 snap-start">
          <h1 className="mt-5 text-6xl">Projects</h1>
          <div className="flex flex-col gap-5 mt-3 h-full w-9/12">
            <div className="flex h-1/3 bg-pumpkinSpiceAccent gap-3">
              <div className="flex relative h-11/12 w-full bg-pumpkinSpiceSecondary">
                <Image src="/dsep.png" fill={true} alt="DSEP" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-4xl text-pumpkinSpiceText mt-2 flex gap-3 underline">DSEP</h2>
                <p className="text-xl mt-2 mr-2 text-pumpkinSpiceText">A full-stack web application to help aid in the character creation process for the video game
                  <p className="inline italic"> Dark Souls</p>
                . Created with ReactJS and hosted on AWS. Data scraped from <a href="https://darksouls.wiki.fextralife.com/Dark+Souls+Wiki" className="text-blue-700 hover:underline">fextralife.com</a>
                &nbsp;and inserted into relational database made with MySQL and Amazon RDS.</p>
                <div className="flex gap-3 mt-16">
                  <i style={projectIcons} title="JavaScript" className="devicon-javascript-plain colored" />
                  <i style={projectIcons} title="ReactJS" className="devicon-react-plain colored" />
                  <i style={projectIcons} title="Amazon Web Services" className="devicon-amazonwebservices-plain-wordmark" />
                  <i style={projectIcons} title="MySQL" className="devicon-mysql-plain colored" />
                  <i style={projectIcons} title="NodeJS" className="devicon-nodejs-plain colored" />
                  <i style={projectIcons} title="ExpressJS" className="devicon-express-original-wordmark colored" />
                </div>
              </div>
            </div>
            <div className="flex h-1/3 bg-pumpkinSpiceAccent gap-3">
              <div className="flex flex-col">
                <h2 className="text-4xl text-pumpkinSpiceText mt-2 flex gap-3 underline justify-end">Gym Notebook</h2>
                <p className="text-xl mt-2 mr-2 ml-2 text-pumpkinSpiceText text-right">A full-stack mobile application to track and share workout regimens with other users.
                  Created with React Native. Data stored in MySQL database hosted on Firebase.</p>
                <div className="flex gap-3 self-end mt-16">
                  <i style={projectIcons} title="JavaScript" className="devicon-javascript-plain colored" />
                  <i style={projectIcons} title="ReactJS" className="devicon-react-plain colored" />
                  <i style={projectIcons} title="Firebase" className="devicon-firebase-plain-wordmark" />
                  <i style={projectIcons} title="MySQL" className="devicon-mysql-plain colored" />
                  <i style={projectIcons} title="NodeJS" className="devicon-nodejs-plain colored" />
                  <i style={projectIcons} title="ExpressJS" className="devicon-express-original-wordmark colored" />
                </div>
              </div>
              <div className="flex relative h-11/12 w-3/4 bg-pumpkinSpiceSecondary">
                <Image src="/gymnotebook.png" fill={true} alt="Gym Notebook" />
              </div>
            </div>
            <div className="flex h-1/3 bg-pumpkinSpiceAccent gap-3">
              <div className="flex relative h-11/12 w-full bg-pumpkinSpiceSecondary">
                <Image src="/frosthaven-helper-with-blur.png" fill={true} alt="Frosthaven Helper" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-4xl text-pumpkinSpiceText mt-2 flex gap-3 underline">Frosthaven Helper</h2>
                <p className="text-xl mt-2 mr-2 text-pumpkinSpiceText">A full-stack web application to help eliminate accessibility issues with the board game
                  <p className="inline italic"> Frosthaven</p>
                . Features an enemy selector with matching attack cards and attack modifier decks as well as a loot deck creator. Created with NextJS with TypeScript and hosted on Vercel. </p>
                <div className="flex gap-3 mt-10">
                  <i style={projectIcons} title="TypeScript" className="devicon-typescript-plain colored" />
                  <i style={projectIcons} title="ReactJS" className="devicon-react-plain colored" />
                  <i style={projectIcons} title="NextJS" className="devicon-nextjs-original-wordmark colored" />
                  <i style={projectIcons} title="MySQL" className="devicon-mysql-plain colored" />
                  <i style={projectIcons} title="NodeJS" className="devicon-nodejs-plain colored" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" ref={skillsRef} className="flex flex-col items-center ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16 snap-start">
          <h1 className="mt-10 text-6xl">Skills</h1>
          <div className="flex flex-col mt-32 gap-32">
            <div className="flex gap-16">
              <i style={iconStyles} title="JavaScript" className="devicon-javascript-plain colored bg-white" />
              <i style={iconStyles} title="TypeScript" className="devicon-typescript-plain colored bg-white" />
              <i style={iconStyles} title="C++" className="devicon-cplusplus-plain colored" />
              <i style={iconStyles} title="MySQL" className="devicon-mysql-plain colored" />
              <i style={iconStyles} title="ReactJS" className="devicon-react-plain colored" />
              <i style={iconStyles} title="NextJS" className="devicon-nextjs-original-wordmark colored" />
              <i style={iconStyles} title="HTML5" className="devicon-html5-plain colored" />
              <i style={iconStyles} title="CSS3" className="devicon-css3-plain colored" />
            </div>
            <div className="flex gap-16">
              <i style={iconStyles} title="TailwindCSS" className="devicon-tailwindcss-plain colored" />
              <i style={iconStyles} title="ExpressJS" className="devicon-express-original-wordmark colored" />
              <i style={iconStyles} title="NodeJS" className="devicon-nodejs-plain colored" />
              <i style={iconStyles} title="Github" className="devicon-github-plain colored" />
              <i style={iconStyles} title="Windows" className="devicon-windows8-plain colored" />
              <i style={iconStyles} title="Linux" className="devicon-linux-plain colored" />
              <i style={iconStyles} title="Figma" className="devicon-figma-plain colored" />
              <i style={iconStyles} title="Photoshop" className="devicon-photoshop-plain colored" />
            </div>
            <div className="flex gap-16 self-center">
              <i style={iconStyles} title="AWS" className="devicon-amazonwebservices-plain-wordmark" />
              <i style={iconStyles} title="GCP" className="devicon-googlecloud-plain-wordmark" />
              <i style={iconStyles} title="Firebase" className="devicon-firebase-plain-wordmark" />
            </div>
          </div>
        </div>
        {/* <div id="contact" ref={contactRef} className="flex flex-col items-center ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16 snap-start">
          <ContactForm />
        </div> */}
    </main>
  )
}
