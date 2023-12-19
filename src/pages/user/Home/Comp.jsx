import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHandshakeAngle } from "react-icons/fa6";
import investor1 from "./investor1.png"
import investor2 from "./investor2.png"
import investor3 from "./investor3.png"
import investor4 from "./investor4.png";
import { jwtDecode } from "jwt-decode";


function Card() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to get the token from local storage
    const getAuthToken = () => {
      const token = localStorage.getItem("apiToken");
      return token;
    };

    // Function to decode the token and extract the user object
    const decodeToken = (token) => {
      try {
        const decoded = jwtDecode(token);
        return decoded;
      } catch (error) {
        console.error("Error decoding token:", error.message);
        return null;
      }
    };

    // Get the token from local storage
    const token = getAuthToken();

    if (token) {
      // Decode the token
      const decoded = decodeToken(token);

      if (decoded) {
        // Set the user object in the component state
        setUser((prev) => ({
          ...prev,
          ...decoded,
        }));
      }
    }
  }, []); 
  
  return (
    <section className="bg-white light:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link
          to="/form"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full light:bg-gray-800 light:text-white hover:bg-gray-200 light:hover:bg-gray-700"
          role="alert"
        >

          <span className="text-xs bg-blue-500 rounded-full text-white px-4 py-1.5 mr-3">
            Crypto Mining
          </span>
          <span className="text-sm font-medium">
            Get the highest Return On Investment Now
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl light:text-white">
          Greetings and welcome {user?.name}!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 light:text-gray-400">
          Hashminer employs cutting-edge mining technology featuring
          state-of-the-art machines.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/referral"
            className="text-white bg-blue-500 flex flex-inline justify-center items-center p-3 hover:text-black hover:bg-green-500  rounded-xl"
          >
            Get Referral
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link to="/form">
            <button className=" inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 light:text-white light:border-gray-700 light:hover:bg-gray-700 light:focus:ring-gray-800">
              <FaHandshakeAngle />
              <span className="ml-2">Invest Now</span>
            </button>
          </Link>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            TRUSTED BY
          </span>
          <div className="flex justify-center mt-4 space-x-8">
            <img className="h-20 w-20" src={investor1} alt="Logo 1" />
            <img className="h-20 w-20" src={investor2} alt="Logo 2" />
            <img className="h-20 w-20" src={investor3} alt="Logo 3" />
            <img className="h-20 w-20" src={investor4} alt="Logo 4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
