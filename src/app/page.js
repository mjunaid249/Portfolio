import React, { Fragment } from "react";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Remember from "@/components/Remember";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <Fragment>
      <Home />
      <Services />
      <Skills />
      <Remember />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default page;
