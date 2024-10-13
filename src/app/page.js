import React, { Fragment } from "react";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Remember from "@/components/Remember";
const page = () => {
  return (
    <Fragment>
      <Home />
      <Services />
      <Skills />
      <Remember />
    </Fragment>
  );
};

export default page;
