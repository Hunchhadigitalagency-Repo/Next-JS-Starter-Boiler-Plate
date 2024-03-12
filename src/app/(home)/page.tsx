import React from "react";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import HeroHeader from "./components/landing/Hero";
import ContactForm from "./components/landing/contact-form";

const Home = () => {
  return (
    <MaxWidthWrapper>
      <HeroHeader />
      <ContactForm/>
    </MaxWidthWrapper>
  );
};

export default Home;
