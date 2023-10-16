'use client'

import Image from 'next/image'
import { useState, useContext } from 'react'
import Navbar from './Navbar'
import { cva } from 'class-variance-authority'

export default function Home() {

  const [flavor, setFlavor] = useState("pumpkinSpice")

  // const flavors = cva(["flex min-h-screen flex-col items-center justify-between overflow-hidden"], {
  //   variants: {
  //     flavor: {

  //     }
  //   }
  // })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-pumpkinSpiceBackground">
      <Navbar />
      <div id="home" className="flex flex-col justify-center items-center gap-5 ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16">
        <div className="flex flex-row gap-5 justify-start items-end w-11/12">
          <h2 className="text-pumpkinSpiceText text-5xl">My name is</h2>
          <h1 className="text-pumpkinSpiceAccent text-7xl">Josh Mayeda</h1>
        </div>
        <h3 className="justify-start items-end w-11/12 text-3xl">
            I am a full stack web developer looking to turn ideas into accessible products.
        </h3>
      </div>
      <div id="about" className="flex flex-col items-center ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16">
        About
      </div>
      <div id="projects" className="flex flex-col items-center ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16">
        Projects
      </div>
      <div id="skills" className="flex flex-col items-center ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16">
        Skills
      </div>
      <div id="contact" className="flex flex-col items-center ring ring-pumpkinSpiceText text-pumpkinSpiceText min-h-screen w-screen p-16">
        Contact
      </div>
    </main>
  )
}
