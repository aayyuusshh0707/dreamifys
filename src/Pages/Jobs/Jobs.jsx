import React from "react";
import Header from "../Global/Header/Header";
import Job from "../../assets/Header/jobs.png";

export default function Jobs() {
  return (
    <Header
      title="EXPLORE JOBS"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta"
      imageSection={<img src={Job} alt="job" />}
    />
  );
}
