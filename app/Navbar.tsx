import React, { useState } from "react";
import FlavorMenu from "./FlavorMenu";

type NavbarProps = {
	flavor: string;
	//darkMode: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ flavor }) => {
	const flavoredAccent = flavor + 'Accent';
	const flavoredText = flavor + 'Text';
  
	return (
	  <div
		className="flex flex-row fixed items-center justify-center ring ring-white h-16 w-screen bg-pumpkinSpiceAccent"
		style={{ backgroundColor: flavoredAccent }}
	  >
		<div className="flex flex-row gap-5 justify-center w-1/2">
			<h1 className="self-center text-pumpkinSpiceText">Flavor:</h1>
			<FlavorMenu />
		</div>
  
		<div className="flex flex-row gap-36 items-center justify-center w-1/2">
		  <a href="#home" className="justify-self-end text-pumpkinSpiceText font-bold">Home</a>
		  <a href="#about" className="justify-self-end text-pumpkinSpiceText font-bold">About</a>
		  <a href="#projects" className="justify-self-end text-pumpkinSpiceText font-bold">Projects</a>
		  <a href="#skills" className="justify-self-end text-pumpkinSpiceText font-bold">Skills</a>
		  <a href="#contact" className="justify-self-end text-pumpkinSpiceText font-bold">Contact</a>
		</div>
	  </div>
	);
  };

export default Navbar;
