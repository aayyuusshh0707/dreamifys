import React from 'react'
import Header from '../Global/Header/Header';
import about from '../../assets/Header/aboutus.png';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../Global/aceternity/ui/text-reveal-card";
//import AppleCardsCarouselDemo from './components/Animatedcards';
export default function About() {
  return (

    <>
      <Header title="ABOUT US" subtitle="We are a technology-driven company dedicated to empowering individuals with industry-relevant skills. Our expert-led courses in web development, UI/UX design, and programming ensure hands-on learning. Additionally, we provide placement support to help learners secure job opportunities and build successful careers in the tech industry. 🚀" imageSection={<img src={about} alt="about" />} />


      <div className="flex items-center justify-center my-8 ">
        <TextRevealCard
          text="You want to learn ......"
          revealText="We know how to teach."
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            Dreamifys can help you crack a full stack or backend role in top tech companies
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>

      {/* <AppleCardsCarouselDemo /> */}



    </>
  )
}
