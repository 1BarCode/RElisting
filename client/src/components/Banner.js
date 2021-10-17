import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ title, subtitle }) => {
    return (
        <div className="bg-gray-900 bg-opacity-60 px-8 py-4 mx-auto flex flex-col">
            <h3 className="text-center text-white text-4xl font-bold sm:text-md">
                {title}
            </h3>

            <div className="bg-yellow-800 w-16 h-1 border-yellow-800 items-center m-auto mt-2 mb-2"></div>

            <h3 className="text-center text-white">{subtitle}</h3>
            <br />

            <button className="text-white bg-yellow-800 px-2 py-2 ml-auto mr-auto items-center rounded-sm">
                <Link to="">Click Me</Link>
            </button>
        </div>
    );
};

export default Banner;
