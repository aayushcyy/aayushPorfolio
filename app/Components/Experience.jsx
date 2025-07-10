"use client";

import React, { useState } from "react";

export default function Experience() {
  const [expOpen, setExpOpen] = useState(false);
  return (
    <div className="w-full md:h-[85vh] flex justify-center items-center text-white font-funnel px-40">
      <div className="md:flex w-full md:justify-between">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white"></span>
            <p className="uppercase">Experience</p>
          </div>
        </div>
        <div className="w-[65%] h-full flex flex-col items-start">
          <div
            className={
              !expOpen
                ? `flex flex-col w-full cursor-pointer border-y-[0px] border-t-2 border-[#ffffff] py-3 gap-5`
                : `flex flex-col w-full cursor-pointer border-y-[1px] border-[#ffffff] py-3`
            }
            onClick={() => setExpOpen(!expOpen)}
          >
            <div className="w-full grid grid-cols-3 text-xl">
              <div className="">Freelance</div>
              <div className="">Fullstack Web Developer</div>
              <div className="text-end">May 2025 - Now</div>
            </div>
            {!expOpen && (
              <div className={!expOpen ? `w-full grid grid-cols-3` : `hidden`}>
                <div className=""></div>
                <div className=" text-[#ffffffd0]">
                  Helping clients turn ideas into fully functional, scalable web
                  apps with clean code, responsive design, and optimized
                  performance handling everything from design to backend
                  development and deployment. I also offer ongoing support and
                  client-friendly dashboards to ensure long-term success.
                </div>
                <div className=""></div>
              </div>
            )}
          </div>
          <div
            className={
              expOpen
                ? `flex flex-col w-full cursor-pointer border-y-[1px] border-t-2 border-[#ffffff] py-3 gap-5`
                : `flex flex-col w-full cursor-pointer border-y-[1px] border-[#ffffff] py-3`
            }
            onClick={() => setExpOpen(!expOpen)}
          >
            <div className="w-full grid grid-cols-3 text-xl">
              <div className="">UniByte LLP</div>
              <div className="">MERN Developer</div>
              <div className="text-end">Feb 2024 - May 2025</div>
            </div>
            {expOpen && (
              <div className={expOpen ? `w-full grid grid-cols-3` : `hidden`}>
                <div className=""></div>
                <div className=" text-[#ffffffd0]">
                  Worked on an in-house CRM to add support for Facebook leads.
                  <br />
                  Added support for email notifications for new leads. <br />
                  Helped the team migrate the backend from Firebase to Node.js
                  (Express) and MongoDB. <br /> Built pages and components for
                  the CRM using ShadCN and React
                </div>
                <div className=""></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
