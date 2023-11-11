import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-full pt-[75%] md:pt-[20%]  px-4 md:px-12 absolute text-white bg-gradient-to-r from-black z-[1]">
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      <p className=" py-4 md:py-6 text-base md:text-lg w-full md:w-1/2 lg:w-1/2">{overview}</p>
      <div className="flex flex-col md:flex-row">
        <button className="bg-white p-3 md:p-4 px-8 md:px-10 text-base hover:bg-opacity-80 md:text-lg text-black flex justify-center items-center rounded-lg font-bold mb-4 md:mb-0 md:mr-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p>Play</p>
        </button>
        <button className="bg-gray-500 text-base md:text-alg font-bold text-white bg-opacity-50 rounded-lg p-3 md:p-4 px-8 md:px-10">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
