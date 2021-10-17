import React from "react";
import data from "../data/data";
import img1 from "../images/room-1.jpeg";

const Hero = ({ children }) => {
    return (
        // <div className="min-w-screen h-full"
        // // style={{backgroundImage: "url(" + img1 + ")"}}
        // // style={{backgroundImage: `url(${img1})`}}
        // // style={{position: "relative"}}
        // >
        <div
            className="min-w-screen min-h-screen bg-no-repeat bg-cover xs:px-0 sm:px-20 md:px-52 py-40 xl:px-96"
            style={{ backgroundImage: `url(${img1})`, aspectRatio: "16/9" }}
        >
            {/* <img style={{aspectRatio: '16/9', minWidth: "100%"}} className="" src={data[0].fields.images[0].fields.file.url} alt={data[0].fields.name} /> */}
            {children}
        </div>
        // </div>
    );
};

export default Hero;
