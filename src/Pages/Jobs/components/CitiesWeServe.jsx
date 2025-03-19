import React from 'react';

const CitiesWeServe = () => {
  const cities = [
    { name: 'San Francisco', image: 'https://cdn.usegalileo.ai/sdxl10/82422027-ba3f-4773-8c4b-e8374d759633.png' },
    { name: 'New York', image: 'https://cdn.usegalileo.ai/sdxl10/368348f6-427f-4ccb-bedf-550048422f8c.png' },
    { name: 'Los Angeles', image: 'https://cdn.usegalileo.ai/sdxl10/a881a88e-7bd0-4b3d-be5a-d7a3917fd4a8.png' },
    { name: 'Chicago', image: 'https://cdn.usegalileo.ai/sdxl10/cd5dff27-3d98-4789-83d5-261eee42251d.png' },
    { name: 'Austin', image: 'https://cdn.usegalileo.ai/sdxl10/db41d082-830e-482f-ac88-93c7f7456993.png' },
    { name: 'Seattle', image: 'https://cdn.usegalileo.ai/sdxl10/fa035707-edc3-4b1c-be0b-29baac197277.png' },
    { name: 'Boston', image: 'https://cdn.usegalileo.ai/sdxl10/ba565a4e-df6f-4694-bc8f-097aa9ec683f.png' },
    { name: 'Denver', image: 'https://cdn.usegalileo.ai/sdxl10/2e86acd0-49dc-4697-93db-3a8e2fb6a3b7.png' },
    { name: 'Portland', image: 'https://cdn.usegalileo.ai/sdxl10/35650436-183d-409d-b4b8-2ad91d2a81d2.png' },
    { name: 'Atlanta', image: 'https://cdn.usegalileo.ai/sdxl10/00efffd3-8914-4354-bacf-741f0d6fa9f2.png' },
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <h2 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Cities We Serve</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {cities.map((city, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${city.image})` }}
            ></div>
            <p className="text-[#181511] text-base font-medium leading-normal">{city.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesWeServe;