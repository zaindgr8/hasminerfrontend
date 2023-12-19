import React from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useEffect, useState } from "react";

const Card = ({ title, description, button, href }) => {
  const [amount, setAmount] = useState(null);
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
      <a href={href}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 light:text-gray-400 flex items-center gap-x-2">
        <CiMoneyCheck1 />
        {description}
        <MdOutlineAttachMoney />
      </p>
      <p className="mb-3 flex items-center gap-x-2 font-normal text-gray-700 light:text-gray-400">
        Total Investment<span className="text-green-700">{amount}</span>
      </p>
      <div className="flex gap-y-2">
        <a
          href="/withdraw"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
        >
          {button}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
