"use client";
import Image from "next/image";
import spotify from "../assets/icons/spotify.svg";
// import { Play } from "lucide-react";
import play from "../assets/icons/start.svg";
import { ArrowLeft, AudioLines, Link2Icon } from "lucide-react";
import peace from "../assets/peace.png";
import mapboxgl from "mapbox-gl";
import { motion } from "framer-motion";
import { projects } from "@/assets/data/data";

// custom icons
import reactIcon from "../assets/icons/react (2).svg";
import flutter from "../assets/icons/Flutter.svg";
import github from "../assets/icons/Github.svg";
import javascript from "../assets/icons/Javascript.svg";
import nodejs from "../assets/icons/Nodejs.svg";
import typescript from "../assets/icons/Typescript.svg";
import vscode from "../assets/icons/Vscode.svg";
import envelope from "../assets/icons/Envelope.svg";
import { useEffect, useRef, useState } from "react";
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { BackgroundGradient } from "./glowing-card";
import { PinContainer } from "./pin";
import {
  InfiniteMovingCards,
  ProjectItem,
  ProjectPopup,
} from "./infiniteCards";
import MovingBorder from "./moving-border";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Bento({
  recentTracks,
  textEnter,
  textLeave,
}: {
  recentTracks: any;
  textEnter: any;
  textLeave: any;
}) {
  const [layoutId, setLayoutId] = useState("");
  const [showPop, setShow] = useState(false);
  const [activeProject, setProject] = useState<any>();
  return (
    <div className="space-y-3">
      {showPop && (
        <ProjectPopup
          project={activeProject}
          layoutId={layoutId}
          closePopup={() => setShow(false)}
        />
      )}
      {/* top bento  */}
      <div className="grid gap-3 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="card">
            <img src="/memoji.png" className="w-56" alt="" />
            <p
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="font-[CalSans] text-4xl"
            >
              Emmanuel is a fullstack software engineer from Nigeria currently
              freelancing.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 h-96 md:h-[401px]">
          <div className="card !pb-0 h-full">
            <img src="/portrait.png" className="h-full object-cover w-full" />
          </div>
        </div>
      </div>

      {/* bottom bento  */}
      <div className="grid gap-3 lg:grid-cols-7">
        {/* right bento  */}
        <div className="lg:col-span-2 order-2 lg:order-1 grid lg:grid-cols-1 gap-3 lg:grid-rows-2">
          <div className=" rounded-3xl overflow-hidden relative p-[1px] flex">
            <div className="card z-50 h-full w-full gap-5 lg:gap-0 flex flex-col justify-between antialiased">
              <Image src={spotify} alt="spotify icon" className="w-16" />

              <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <div className="flex items-center gap-2.5">
                  <AudioLines size={40} className="text-[#10BC4C]" />
                  {/* <Image src={play} /> */}
                  <h4 className="text-2xl font-bold">last played</h4>
                </div>
                <h4 className="font-[CalSans] text-3xl">
                  {recentTracks.recenttracks.track[0].name}
                </h4>
                <h4 className="text-white/50">
                  {recentTracks.recenttracks.track[0].artist["#text"]}
                </h4>
              </div>
            </div>
          </div>
          <div className="card flex flex-col gap-5 lg:gap-0 justify-between">
            <h4
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="font-[CalSans] text-3xl"
            >
              let me bring your projects and ideas to life.
            </h4>
            <a href="mailto:emmanuelngoka778@gmail.com" className="w-full">
              <button className="w-full flex items-center gap-2.5 text-3xl">
                <Image src={envelope} alt="" />
                email me
              </button>
            </a>
          </div>
        </div>

        {/* left bento */}
        <div className="lg:col-span-5 grid lg:grid-cols-1 gap-3 grid-rows-7">
          <div className="flex rounded-3xl overflow-hidden relative h-56 row-span-3">
            <div className="card !p-0 w-full h-full z-50">
              <div className="flex w-full h-full overflow-hidden">
                <Image
                  src={peace}
                  alt="Peace sign"
                  className="object-top hidden sm:block object-cover w-40"
                />
                <div className="p-7 h-full space-y-5 flex justify-center w-full flex-col">
                  <h4 className="font-[CalSans] text-4xl">
                    some technologies i use.
                  </h4>
                  <div className="flex items-center w-full justify-between">
                    <Image src={javascript} alt="" className="w-9 sm:w-16" />
                    <Image src={typescript} alt="" className="w-9 sm:w-16" />
                    <Image src={nodejs} alt="" className="w-9 sm:w-16" />
                    <Image src={reactIcon} alt="" className="w-9 sm:w-16" />
                    <Image src={flutter} alt="" className="w-9 sm:w-16" />
                    <Image src={github} alt="" className="w-9 sm:w-16" />
                    <Image src={vscode} alt="" className="w-9 sm:w-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-3xl relative h-72 projects-container row-span-4 overflow-hidden">
            <div className="projects-card-top relative">
              <div className="right-3 top-3 absolute z-50 w-full flex items-center">
                <div className="ml-auto flex items-center gap-2.5">
                  <a href={projects[1].url}>
                    <button className="bg-neutral-800 rounded-full p-2">
                      <Link2Icon />
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setLayoutId(projects[1].title + String(1));
                      setProject(projects[1]);
                      setTimeout(() => setShow(true), 300);
                    }}
                    className="bg-neutral-800 rounded-full p-2"
                  >
                    <ArrowLeft className="rotate-[135deg]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card projects-card z-50 h-full w-full !p-0">
              <ProjectItem
                index={1}
                setProject={setProject}
                setLayoutId={setLayoutId}
                item={projects[1]}
                setShow={setShow}
              />
            </div>
          </div>
        </div>
      </div>
      {/* projects bento */}
      <div className="grid gap-3 lg:grid-cols-7">
        <div className="lg:col-span-4 md:h-96">
          <ProjectItem
            index={2}
            setProject={setProject}
            setLayoutId={setLayoutId}
            item={projects[2]}
            setShow={setShow}
          />
        </div>
        <div className="lg:col-span-3 md:h-96">
          <ProjectItem
            index={3}
            setProject={setProject}
            setLayoutId={setLayoutId}
            item={projects[0]}
            setShow={setShow}
          />
        </div>
      </div>
      {/* socials  */}
      <div className="w-full grid lg:grid-cols-4 gap-5 items-center">
        <a href="https://github.com/zillalikestocode" className="lg:col-span-1">
          <button className="btn lg:col-span-1 w-full text-2xl font-[CalSans] tracking-wide">
            github
          </button>
        </a>
        <a className="lg:col-span-1" href="https://twitter.com/_zxlla">
          <button className="btn w-full lg:col-span-1 text-2xl font-[CalSans] tracking-wide">
            twitter
          </button>
        </a>
        <a className="lg:col-span-1" href="https://linkedin.com/in/engoka">
          <button className="btn w-full lg:col-span-1 text-2xl font-[CalSans] tracking-wide">
            linkedin
          </button>
        </a>
        <a
          className="lg:col-span-1"
          href="https://instagram.com/the_emmanuelngoka"
        >
          <button className="btn w-full lg:col-span-1 text-2xl font-[CalSans] tracking-wide">
            instagram
          </button>
        </a>
      </div>
    </div>
  );
}
