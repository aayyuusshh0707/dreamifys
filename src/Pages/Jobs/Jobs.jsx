import React from "react";
import Header from "../Global/Header/Header";
import Job from "../../assets/Header/jobs.png";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/About";
import CitiesWeServe from "./components/CitiesWeServe";
import SuccessStories from "./components/SuccessStories";
import ContactForm from "./components/ContactForm";
import Getintouch from "../Global/Form/Getintouch";
import RequestCall from "../Global/Form/RequestCall";


export default function Jobs() {
  return (
    <>
      <Header
        title="EXPLORE JOBS"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta"
        imageSection={<img src={Job} alt="job" />}
      />
      <HeroSection />
      <HowItWorks />
      {/* <AboutUs />
      <CitiesWeServe />
      <SuccessStories /> */}
      <RequestCall/>
      
    
    </>
  );
}
