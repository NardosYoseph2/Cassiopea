import React from "react";

const EventCard = ({ imgUrl, title }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div
        className="h-48 md:h-72 w-full relative bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0  "></div>
      </div>
      <div className="text-[#FF6500] bg-white p-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        </div>
    </div>
  );
};

export default EventCard;
