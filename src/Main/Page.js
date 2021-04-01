import React from "react";
import { Route } from "react-router-dom";
import AboutMe from "../Informations/AboutMe";
import Skills from "../Informations/Skills";
import Experience from "../Informations/Experience";
// import Contact from "../Informations/Contact";
import Hobby from "../Informations/Hobby";

const Page = () => {
  return (
    <>
      <Route path="/" exact component={AboutMe} />
      <Route path="/me" component={AboutMe} />
      <Route path="/skills" component={Skills} />
      <Route path="/experience" component={Experience} />
      {/* <Route path="/contact" component={Contact} /> */}
      <Route path="/hobby" component={Hobby} />
    </>
  );
};

export default Page;
