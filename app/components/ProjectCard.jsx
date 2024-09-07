import React from "react";

const EventCard = ({ imgUrl, title }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex-shrink-0">
      <div
        className="h-52 md:h-72 w-72 bg-center bg-cover relative"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg p-4 z-10">
          <h5 className="text-center">{title}</h5>
        </div>
      </div>
      {/* <div className="bg-white p-6">
        <h5 className="text-xl font-semibold mb-2 text-gray-800">{title}</h5>
      </div> */}
    </div>
  );
};

export default EventCard;
