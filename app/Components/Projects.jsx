"use client";
import React, { useState } from "react";
import Image from "next/image";
import cafeImage from "../../public/cafe-eloy.png";
import approved from "../../public/approved_logo.png";
import bdayCard from "../../public/bdayCard.png";
import { Button } from "@/components/ui/button";
import { Github, Eye, BookOpen, ArrowDown, ArrowUp } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Projects() {
  const [expOpen, setExpOpen] = useState(false);
  const [linkForP1, setLinkForP1] = useState(false);
  const [linkForP2, setLinkForP2] = useState(false);
  const [linkForP3, setLinkForP3] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full lg:min-h-screen flex justify-center items-start text-white font-funnel lg:px-[10vw] md:px-[4vw] px-5 md:py-20 py-10">
      <div className="flex md:flex-row flex-col gap-20 w-full md:justify-between">
        {/* Heading */}
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white"></span>
            <p className="uppercase">Projects</p>
          </div>
        </div>
        {/* Projects */}
        <div className="md:w-[70%] h-full flex flex-col gap-5 items-start">
          {/* Project 1 */}
          <div
            className="flex md:flex-row flex-col w-full md:p-5 p-4 rounded-lg md:gap-5 lg:gap-5 gap-5 h-full bg-[#171717]"
            onMouseEnter={() => setLinkForP1(true)}
            onMouseLeave={() => setLinkForP1(false)}
          >
            <div className="md:w-1/2 h-full flex items-center justify-center relative">
              <div className="w-full h-44 mt-1 flex items-center justify-center overflow-hidden rounded-md relative">
                <Image
                  src={cafeImage}
                  width={600}
                  height={600}
                  alt="Cafe Booking Project"
                  className="object-cover object-center w-full h-full"
                />
                {linkForP1 && (
                  <div className="w-full h-full absolute flex items-center justify-center bg-[#000000c7] transition-all duration-300">
                    <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-2 mt-3">
                      <Button
                        variant="outline"
                        className="bg-white text-black hover:bg-[#dfdfdf] transition-all ease-in-out duration-300 cursor-pointer"
                        asChild
                      >
                        <a
                          href={"https://cafe-ziq5.vercel.app/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <Eye /> Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white text-black hover:bg-[#dfdfdf] transition-all ease-in-out duration-300 cursor-pointer"
                        asChild
                      >
                        <a
                          href={"https://github.com/aayushcyy/cafe-eloy"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <Github /> View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-1 md:w-[70%]">
              <p className="text-2xl mb-1">Cafe Eloy - Website & Admin Panel</p>
              <p className="font-thin">
                A full-stack web application for a local café featuring online
                cabin bookings, and a custom admin dashboard. Designed for
                real-time updates and easy scalability using CI/CD deployment.
              </p>
              <div className="w-full flex flex-wrap gap-x-1 gap-y-1">
                {["NextJs", "NodeJs", "Express", "MongoDB", "Tailwind"].map(
                  (item, index) => (
                    <div key={index}>
                      <div
                        className="flex text-xs font-medium items-center gap-2 px-2 py-1 rounded-sm bg-[#161616e9] border-[1px] border-[#333333] hover:bg-[#2a2a2a] text-white hover:text-white cursor-pointer"
                        aria-label="Toggle italic"
                      >
                        {item}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div
            className="flex md:flex-row flex-col w-full md:p-5 p-4 rounded-lg md:gap-5 gap-5 h-full bg-[#171717]"
            onMouseEnter={() => setLinkForP2(true)}
            onMouseLeave={() => setLinkForP2(false)}
          >
            <div className="md:w-1/2 h-full flex items-center justify-center">
              <div className="w-full h-48 mt-1 flex items-center justify-center overflow-hidden rounded-md relative">
                <Image
                  src={approved}
                  width={600}
                  height={600}
                  alt="Cafe Booking Project"
                  className="object-cover object-center w-full h-full"
                />
                {linkForP2 && (
                  <div className="w-full h-full absolute flex items-center justify-center bg-[#000000c7] transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-2 mt-3">
                      <Popover>
                        <PopoverTrigger className="bg-white text-black hover:bg-[#dfdfdf] transition-all ease-in-out duration-300 cursor-pointer text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-md">
                          <BookOpen className="size-4" /> Docs
                        </PopoverTrigger>
                        <PopoverContent className="md:w-[450px] flex flex-col gap-2 font-funnel">
                          <p className="text-xl font-medium">
                            Start Using the Bot
                          </p>
                          <div className="flex flex-col gap-1">
                            <p>
                              <span className="font-medium">1. Go to:</span>{" "}
                              <a
                                href="https://api.slack.com/apps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-800 hover:text-cyan-950"
                              >
                                https://api.slack.com/apps
                              </a>{" "}
                              → Create App
                            </p>
                            <div>
                              <p className="font-medium">2. Add Features:</p>
                              <ul className="ml-9 list-disc">
                                <li>Slash Command: /approval-test</li>
                                <li>
                                  Interactivity:{" "}
                                  <span className="text-cyan-900">
                                    https://slackbot-agys.onrender.com
                                  </span>
                                </li>
                                <li className="leading-7">
                                  Scopes:{" "}
                                  <span className="bg-[#e1dfdf] px-1.5 py-0.5 rounded-sm">
                                    commands
                                  </span>
                                  ,{" "}
                                  <span className="bg-[#e1dfdf] px-1.5 py-0.5 rounded-sm">
                                    users:read
                                  </span>
                                  ,{" "}
                                  <span className="bg-[#e1dfdf] px-1.5 py-0.5 rounded-sm">
                                    chat:write
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <p className="font-medium">
                              3. Install to Workspace via OAuth & Permissions
                            </p>
                            <p>
                              <span className="font-medium">
                                4. Invite Bot to a Channel:
                              </span>{" "}
                              <span className="bg-[#e1dfdf] px-1.5 py-0.5 rounded-sm">
                                /invite @ApprovalBot
                              </span>
                            </p>
                            <p>
                              <span className="font-medium">
                                5. Use It: Run
                              </span>{" "}
                              <span className="bg-[#e1dfdf] px-1.5 py-0.5 rounded-sm">
                                /approval-test
                              </span>{" "}
                              → Select approver → Submit → Approver responds →
                              You get notified!
                            </p>
                          </div>
                        </PopoverContent>
                      </Popover>

                      <Button
                        variant="outline"
                        className="bg-white text-black hover:bg-[#dfdfdf] transition-all ease-in-out duration-300 cursor-pointer"
                      >
                        <a
                          href="https://github.com/aayushcyy/slackBot"
                          className="flex items-center gap-1.5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github /> View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-1 md:w-[70%]">
              <p className="text-2xl mb-1">
                Approved - Slack-Based Approval Workflow
              </p>
              <p className="font-thin">
                A Slack-integrated approval system to streamline organizational
                requests with instant notifications and admin responses.
                Designed for efficiency and easy integration into workplace
                communication flows.
              </p>
              <div className="w-full flex flex-wrap gap-x-1 gap-y-1">
                {["NodeJs", "Express", "Slack API", "Render"].map(
                  (item, index) => (
                    <div key={index}>
                      <div
                        className="flex text-xs font-medium items-center gap-2 px-2 py-1 rounded-sm bg-[#161616e9] border-[1px] border-[#333333] hover:bg-[#2a2a2a] text-white hover:text-white cursor-pointer"
                        aria-label="Toggle italic"
                      >
                        {item}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {showMore && (
            <div
              className="flex md:flex-row flex-col w-full md:p-5 p-4  rounded-lg md:gap-5 gap-5 h-full bg-[#171717]"
              onMouseEnter={() => setLinkForP3(true)}
              onMouseLeave={() => setLinkForP3(false)}
            >
              <div className="md:w-1/2 h-full flex items-center justify-center">
                <div className="w-full h-44 mt-3 flex items-center justify-center overflow-hidden rounded-md relative">
                  <Image
                    src={bdayCard}
                    width={600}
                    height={600}
                    alt="Cafe Booking Project"
                    className="object-cover object-center w-full h-full"
                  />
                  {linkForP3 && (
                    <div className="w-full h-full absolute flex items-center justify-center bg-[#000000c7] transition-all duration-300">
                      <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-2 mt-3">
                        <Button
                          variant="outline"
                          className="bg-white text-black hover:bg-[#dfdfdf] transition-all ease-in-out duration-300 cursor-pointer"
                          asChild
                        >
                          <a
                            href={"https://www.bdaycard.online/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <Eye /> Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-white text-black hover:bg-[#dfdfdf] transition-all ease-in-out duration-300 cursor-pointer"
                          asChild
                        >
                          <a
                            href={"https://github.com/aayushcyy/birthday-site"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <Github /> View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-1 md:w-[70%]">
                <p className="text-2xl  mb-1">
                  BdayCard Generator - Interactive Birthday Card Creator
                </p>
                <p className="font-thin">
                  Created a personalized birthday card generator tool to create
                  and share personalized birthday cards with animations,
                  voice-based candle blowing, and a confetti celebration for the
                  recipient.
                </p>
                <div className="w-full flex flex-wrap gap-x-1 gap-y-1">
                  {[
                    "NextJs",
                    "Firebase",
                    "Tailwind",
                    "Framer Motion",
                    "GSAP",
                  ].map((item, index) => (
                    <div key={index}>
                      <div
                        className="flex text-xs font-medium items-center gap-2 px-2 py-1 rounded-sm bg-[#161616e9] border-[1px] border-[#333333] hover:bg-[#2a2a2a] text-white hover:text-white cursor-pointer"
                        aria-label="Toggle italic"
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* View More Projects */}
          <div
            className="w-full flex items-center justify-center border-2 border-[#ffffff55] py-2 rounded-full cursor-pointer hover:bg-gradient-to-r from-[#ecfcfa0e] from-0% via-[#0ea4e91a] via-50% to-[#c028d40f] to-100%"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <p className="flex text-xl items-center gap-2">
                Show Less <ArrowUp />
              </p>
            ) : (
              <p className="flex text-lg items-center gap-2">
                Show More <ArrowDown />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
