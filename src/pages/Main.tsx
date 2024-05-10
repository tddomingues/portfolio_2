import React from "react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Tecnology from "../components/Tecnology/Tecnology";

import Projects from "../components/Projects/Projects";

const Main = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <AboutMe />
      {/* <Tecnology /> */}
      <Projects />
    </>
  );
};

export default Main;
