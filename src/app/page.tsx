import React from "react";
import Hero from "./component/hero/hero";
import About from "./about/about";
import Project from "./project/project";
import Contact from "./contact/contact";

export default function Home() {
  return (
    <div>
      <title>Ehtisham Portfolio</title>
      <main>
        <Hero />
        <About />
        
        <Contact />
      </main>
    </div>
  );
}
