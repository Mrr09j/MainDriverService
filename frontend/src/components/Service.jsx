import React from "react";
import { Link } from "react-router-dom";
function Service() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to see you{" "}
            <span className="text-pink-500"> here:) </span>{" "}
          </h1>
          <p className="mt-12">
            {" "}
            Hey there! This is{" "}
            <span className="text-green-500"> Admin Panel </span>. Here you can
            see data that sent by the users.{" "}
          </p>
          <Link to="/">
            <button className="bg-pink-500 p-2 rounded-md hover:bg-pink-700 duration-300 mt-6 text-white ">
              Back!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Service;
