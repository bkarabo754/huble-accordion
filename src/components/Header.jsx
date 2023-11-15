import React, { useState } from "react";
import VoltAccordion from "../assets/accordionVault.png";
import Notary from "../assets/notary.png";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";

const AnimatedAccordion = () => {
  const [expandedItems, setExpandedItems] = useState([
    false,
    false,
    false,
    true,
    false,
    false,
    false,
  ]);

  const handleToggle = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-20 shadow-lg mt-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-5 -mt-12 md-mt-4 break-words tracking-normal text-center">
            Accelerate your digital closing transformation with the platflorm
            that's proven.
          </h1>
          <p className="text-sm text-slate-600 md:text-base mb-8 ml-0 md:mr-64 flex justify-center">
            Seize the opportunity to differentiate with digital closings. We'll
            make sure you and your partners succeed.
          </p>

          {/* Accordion component */}
          <div className="divide-y divide-slate-200">
            {/* Accordion Item 1 */}
            <div className="py-2">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-left font-semibold py-2 sm:py-4"
                  onClick={() => handleToggle(0)}
                  aria-expanded={expandedItems[0]}
                  aria-controls="faqs-text-1"
                >
                  <span className="text-2xl font-gilroy-bold ml-0 sm:ml-14">
                    Lender
                  </span>
                  <div className="flex items-center">
                    <FaAngleDown
                      className={`fill-indigo-500 shrink-0 mr-4 sm:mr-6 ml-4 md:mr-[580px] ${
                        expandedItems[0] ? "rotate-180" : ""
                      } hover:fill-orange-600`}
                    />
                  </div>
                </button>
              </h2>
              <div
                id="faqs-text-1"
                role="region"
                aria-labelledby="faqs-title-1"
                className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems[0]
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-3 break-words tracking-normal font-normal text-base md:text-lg lg:text-xl mt-4 md:ml-14 ml-0">
                    Reimagine your closing process with wet, hybrid,
                    <br /> and full eClosings that express and close <br />
                    much faster.
                  </p>

                  <div className="space-x-4 mt-2 items-center">
                    <a
                      href=""
                      className="text-[#1a2538] text-lg font-bold hover:text-orange-600 mt-4 md:mt-10 ml-0 md:ml-14"
                    >
                      Learn more
                      <FaArrowRight className="ml-32 sm:ml-44 -mt-5 rounded-full bg-[#f26b2c] text-white p-1 transition-colors duration-300 ease-in-out" />
                    </a>
                    <div className="mt-2 mb-3">
                      <button className="btn primary-button -ml-5 md:ml-10 mr-6 py-4 px-12 md:px-10 bg-[#f26b2c] hover:bg-orange-400 mt-10 md:mt-10 text-white">
                        Login
                      </button>
                      <button className="btn secondary-button mr-2 py-4 px-10 md:px-10 bg-[#f26b2c] hover:bg-orange-400 text-white mt-4 md:mt-10">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>

                {expandedItems[0] && (
                  <div className=" flex justify-center -mt-60 ml-[500px] sm:block">
                    <img
                      src={VoltAccordion}
                      alt="Description Image"
                      className="max-w-full h-auto overflow-clip w-[480px] object-contain"
                      style={{ color: "white" }}
                    />
                  </div>
                )}
              </div>
            </div>
            {/* End: Accordion Item 1 */}

            {/* Accordion Item 2 */}
            <div className="py-2">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-left font-semibold py-2"
                  onClick={() => handleToggle(1)}
                  aria-expanded={expandedItems[1]}
                  aria-controls="faqs-text-2"
                >
                  <span className="text-2xl font-gilroy-bold ml-0 sm:ml-14">
                    Title & Escrow
                  </span>
                  <FaAngleDown
                    className={`fill-indigo-500 shrink-0 mr-4 sm:mr-6 ml-4 md:mr-[580px] ${
                      expandedItems[1] ? "rotate-180" : ""
                    } hover:fill-orange-600`}
                  />
                </button>
              </h2>
              <div
                id="faqs-text-2"
                role="region"
                aria-labelledby="faqs-title-2"
                className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems[1]
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-3 break-words tracking-normal font-normal text-base md:text-lg lg:text-xl mt-4 md:ml-14 ml-0">
                    Reimagine your closing process with wet, hybrid,
                    <br /> and full eClosings that express close <br />
                    much faster.
                  </p>

                  <div className="space-x-4 mt-2 items-center">
                    <a
                      href=""
                      className="text-[#1a2538] text-lg font-bold hover:text-orange-600 md:mt-10 ml-0 md:ml-14"
                    >
                      Learn more
                      <FaArrowRight className="ml-32 sm:ml-44 -mt-5 rounded-full bg-[#f26b2c] text-white p-1 transition-colors duration-300 ease-in-out" />
                    </a>
                    <div className="mt-2 mb-3">
                      <button className="btn primary-button -ml-5 md:ml-10 mr-6 py-4 px-12 md:px-10 bg-[#f26b2c] hover:bg-orange-400 mt-10 md:mt-10 text-white">
                        Login
                      </button>
                      <button className="btn secondary-button mr-4 md:mr-5 py-4 px-10 md:px-10 bg-[#f26b2c] hover:bg-orange-400 text-white mt-4 md:mt-10">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                {expandedItems[1] && (
                  <div className="flex justify-center -mt-60 ml-[450px]">
                    <img
                      src="https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Title-Escrow.png"
                      alt="Description Image"
                      className="max-w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
            {/* End: Accordion Item 2 */}

            {/* Accordion Item 3 */}
            <div className="py-2">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-left font-semibold py-2"
                  onClick={() => handleToggle(2)}
                  aria-expanded={expandedItems[2]}
                  aria-controls="faqs-text-3"
                >
                  <span className="text-2xl font-gilroy-bold ml-0 sm:ml-14">
                    Signing Service
                  </span>
                  <FaAngleDown
                    className={`fill-indigo-500 shrink-0 mr-4 sm:mr-6 ml-4 md:mr-[580px] ${
                      expandedItems[2] ? "rotate-180" : ""
                    } hover:fill-orange-600`}
                  />
                </button>
              </h2>
              <div
                id="faqs-text-3"
                role="region"
                aria-labelledby="faqs-title-3"
                className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems[2]
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-3 break-words tracking-normal font-normal text-base md:text-lg lg:text-xl mt-4 md:ml-14 ml-0">
                    Reimagine your closing process with wet, hybrid,
                    <br /> and full eClosings that express and close <br />
                    much faster.
                  </p>

                  <div className="space-x-4 mt-2 items-center">
                    <a
                      href=""
                      className="text-[#1a2538] text-lg font-bold hover:text-orange-600 md:mt-10 ml-0 md:ml-14"
                    >
                      Learn more
                      <FaArrowRight className="ml-32 sm:ml-44 -mt-5 rounded-full bg-[#f26b2c] text-white p-1 transition-colors duration-300 ease-in-out" />
                    </a>
                    <div className="mt-2 mb-3">
                      <button className="btn primary-button -ml-5 md:ml-10 mr-6 py-4 px-12 md:px-10 bg-[#f26b2c] hover:bg-orange-400 mt-10 md:mt-10 text-white">
                        Login
                      </button>
                      <button className="btn secondary-button mr-2 py-4 px-10 md:px-10 bg-[#f26b2c] hover:bg-orange-400 text-white mt-4 md:mt-10">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                {expandedItems[2] && (
                  <div className="flex justify-center -mt-[300px] ml-[480px]">
                    <img
                      src="https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Scheduling.png"
                      alt="Description Image"
                      className="max-w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Accordion Item 4 */}
            <div className="py-2">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-left font-semibold py-2"
                  onClick={() => handleToggle(3)}
                  aria-expanded={expandedItems[3]}
                  aria-controls="faqs-text-4"
                >
                  <span className="text-2xl font-gilroy-bold ml-0 sm:ml-14">
                    Notary Signing Agent
                  </span>
                  <FaAngleDown
                    className={`fill-indigo-500 shrink-0 mr-4 sm:mr-6 ml-4 md:mr-[580px] ${
                      expandedItems[3] ? "rotate-180" : ""
                    } hover:fill-orange-600`}
                  />
                </button>
              </h2>
              <div
                id="faqs-text-4"
                role="region"
                aria-labelledby="faqs-title-4"
                className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems[3]
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-3 break-words tracking-normal font-normal text-base md:text-lg lg:text-xl mt-4 md:ml-14 ml-0">
                    Reimagine your closing process with wet, hybrid,
                    <br /> and full eClosings that express and close <br />
                    much faster.
                  </p>

                  <div className="space-x-4 mt-2 items-center">
                    <a
                      href=""
                      className="text-[#1a2538] text-lg font-bold hover:text-orange-600 md:mt-10 ml-0 md:ml-14"
                    >
                      Learn more
                      <FaArrowRight className="ml-32 sm:ml-44 -mt-5 rounded-full bg-[#f26b2c] text-white p-1 transition-colors duration-300 ease-in-out" />
                    </a>
                    <div className="mt-2 mb-3">
                      <button className="btn primary-button -ml-5 md:ml-10 mr-6 py-4 px-12 md:px-10 bg-[#f26b2c] hover:bg-orange-400 mt-10 md:mt-10 text-white">
                        Login
                      </button>
                      <button className="btn secondary-button mr-2 py-4 px-10 md:px-10 bg-[#f26b2c] hover:bg-orange-400 text-white mt-4 md:mt-10">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                {expandedItems[3] && (
                  <div className="flex justify-center -mt-80 ml-[480px]">
                    <img
                      src={Notary}
                      alt="Description Image"
                      className="max-w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
            {/* End: Accordion Item 4 */}
          </div>
          {/* End: Accordion component */}
        </div>
      </main>
    </div>
  );
};

export default AnimatedAccordion;
