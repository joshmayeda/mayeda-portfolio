'use client'

import Image from 'next/image'
import { useState } from 'react'
import Navbar from './Navbar'

export default function Home() {

  const [flavor, setFlavor] = useState("pumpkinSpice")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Navbar flavor={flavor}/>
      <div id="home" className="flex flex-col items-center ring ring-white min-h-screen w-screen p-16">
        Home
      </div>
      <div id="about" className="flex flex-col items-center ring ring-white min-h-screen w-screen p-16">
        About
      </div>
      <div id="projects" className="flex flex-col items-center ring ring-white min-h-screen w-screen p-16">
        Projects
      </div>
      <div id="skills" className="flex flex-col items-center ring ring-white min-h-screen w-screen p-16">
        Skills
      </div>
      <div id="contact" className="flex flex-col items-center ring ring-white min-h-screen w-screen p-16">
        Contact
      </div>
    </main>
  )
}
