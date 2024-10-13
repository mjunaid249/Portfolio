import React, { Fragment } from "react";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
const page = () => {
  return (
    <Fragment>
      <Home />
      <Services />
      <Skills />
    </Fragment>
  );
};

export default page;
