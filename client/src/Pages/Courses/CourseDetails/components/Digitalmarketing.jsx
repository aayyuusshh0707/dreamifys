import React from 'react'
import Coursedetails from '../Coursedetails';
import digitalmarketing from '../../../../assets/courses/digitalmaketing.webp';

export default function Digitalmarketing() {

  const careerOptions = [
    "Digital Marketing Manager", "SEO Specialist", "Social Media Manager",
    "Content Marketer", "PPC Specialist", "Email Marketing Manager",
    "Affiliate Marketing Manager", "E-commerce Marketing Specialist"
  ];

  const courseContent = [
    "SEO & SEM Strategies", "Social Media Marketing", "Content Marketing",
    "Email Marketing & Automation", "Google Ads & PPC", "Affiliate Marketing",
    "Web Analytics & Reporting", "Influencer Marketing", "E-commerce Marketing"
  ];

  const softwareCovered = [
    "Google Ads", "Google Analytics", "SEMrush",
    "Ahrefs", "HubSpot", "Hootsuite",
    "Mailchimp", "Canva", "Meta (Facebook & Instagram) Ads Manager"
  ];

  return (
    <>
      <Coursedetails
        Course="DIGITAL MARKETING"
        details="Master SEO, social media, content marketing, PPC, and analytics to drive online growth and brand success."
        img={<img style={{ borderRadius: "10px" }} src={digitalmarketing} alt="Digital Marketing" />}
        coursename="DIGITAL MARKETING"
        courseDescription="Digital Marketing is the process of promoting products and services online using SEO, social media, content marketing, PPC, and email marketing. It involves analyzing consumer behavior, optimizing campaigns, and using tools like Google Ads, SEMrush, and HubSpot to drive engagement and conversions. With emerging trends in AI-driven marketing, influencer collaborations, and automation, digital marketing continues to evolve, offering businesses powerful strategies to grow online."
        listone={careerOptions}
        listtwo={courseContent}
        listthree={softwareCovered}
      />
    </>
  )
}
