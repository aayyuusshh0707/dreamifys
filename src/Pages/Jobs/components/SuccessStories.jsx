import React from 'react';

const SuccessStories = () => {
  const stories = [
    { name: 'Elena, Software Engineer', role: 'Hired at Google in San Francisco', image: 'https://cdn.usegalileo.ai/sdxl10/b7f60046-8759-44f7-8efe-c1f82ee54e83.png' },
    { name: 'Michael, Marketing Manager', role: 'Hired at Amazon in Seattle', image: 'https://cdn.usegalileo.ai/sdxl10/fd458f3d-dac7-4bd3-b816-817cd5bdb4d4.png' },
    { name: 'Sara, Nurse', role: 'Hired at UCLA Medical Center in Los Angeles', image: 'https://cdn.usegalileo.ai/sdxl10/0b176a45-a8e5-41a7-ab27-8fd7b8ea19e1.png' },
    { name: 'Jason, Sales Representative', role: 'Hired at Salesforce in Chicago', image: 'https://cdn.usegalileo.ai/sdxl10/df7eeb5a-8a54-4a29-bc6e-3d52baf77ebd.png' },
    { name: 'Maria, Data Analyst', role: 'Hired at Nike in Portland', image: 'https://cdn.usegalileo.ai/sdxl10/bb0ef96d-c0f5-4350-8349-1f97d2b8f0b9.png' },
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <h2 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Success Stories</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${story.image})` }}
            ></div>
            <div>
              <p className="text-[#181511] text-base font-medium leading-normal">{story.name}</p>
              <p className="text-[#8a7660] text-sm font-normal leading-normal">{story.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;