import React, { useContext, useState } from "react";
import FlavorMenu from "./FlavorMenu";

type NavbarProps = {
	homeRef: React.RefObject<HTMLDivElement>;
	aboutRef: React.RefObject<HTMLDivElement>;
	projectsRef: React.RefObject<HTMLDivElement>;
	skillsRef: React.RefObject<HTMLDivElement>;
	contactRef: React.RefObject<HTMLDivElement>;
};

const Navbar: React.FC<NavbarProps> = ( { homeRef, aboutRef, projectsRef, skillsRef, contactRef } ) => {

	const scrollToSection = (ref:React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			});
		}
	};
  
	return (
	  <div
		className="flex flex-row fixed items-center justify-center ring ring-pumpkinSpiceText h-16 w-screen bg-pumpkinSpiceAccent"
	  >
		<div className="flex flex-row gap-5 justify-center w-1/2">
			<h1 className="self-center text-pumpkinSpiceText">Flavor:</h1>
			<FlavorMenu />
		</div>
  
		<div className="flex flex-row gap-36 items-center justify-center w-1/2">
		  <a href="#" onClick={() => scrollToSection(homeRef)} className="justify-self-end text-pumpkinSpiceText font-bold">Home</a>
		  <a href="#" onClick={() => scrollToSection(aboutRef)} className="justify-self-end text-pumpkinSpiceText font-bold">About</a>
		  <a href="#" onClick={() => scrollToSection(projectsRef)} className="justify-self-end text-pumpkinSpiceText font-bold">Projects</a>
		  <a href="#" onClick={() => scrollToSection(skillsRef)} className="justify-self-end text-pumpkinSpiceText font-bold">Skills</a>
		  <a href="#" onClick={() => scrollToSection(contactRef)} className="justify-self-end text-pumpkinSpiceText font-bold">Contact</a>
		</div>
	  </div>
	);
  };

export default Navbar;
