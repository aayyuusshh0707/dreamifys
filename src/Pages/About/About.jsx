import React from 'react'
import Header from '../Global/Header/Header';
import about from '../../assets/Header/aboutus.png';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../Global/aceternity/ui/text-reveal-card";



export default function About() {
  return (
    <>

      <Header title="ABOUT US" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta" imageSection={<img src={about} alt="about" />} />


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



    </>
  )
}
