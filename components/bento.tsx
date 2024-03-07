"use client";
import Image from "next/image";
import spotify from "../assets/icons/spotify.svg";
// import { Play } from "lucide-react";
import play from "../assets/icons/start.svg";
import { AudioLines } from "lucide-react";
import peace from "../assets/peace.png";
import mapboxgl from "mapbox-gl";
import { motion } from "framer-motion";

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
import { InfiniteMovingCards } from "./infiniteCards";
import MovingBorder from "./moving-border";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Bento({ recentTracks }: { recentTracks: any }) {
  return (
    <div className="space-y-3">
      {/* top bento  */}
      <div className="grid gap-3 lg:grid-cols-5">
        <div className=" lg:col-span-3">
          <BackgroundGradient>
            <div className="card">
              <img src="/memoji.png" className="w-56" alt="" />
              <p className="font-[CalSans] text-4xl">
                Emmanuel is a fullstack software engineer from Nigeria currently
                freelancing.
              </p>
            </div>
          </BackgroundGradient>
        </div>
        <div className="lg:col-span-2">
          <PinContainer title="Port Harcourt" className="h-full w-full">
            <div className="card !p-0 h-full w-full">
              <div className="w-full h-full flex relative items-center justify-center">
                <Map
                  dragPan={false}
                  scrollZoom={false}
                  mapboxAccessToken="pk.eyJ1IjoiemlsbGFsaWtlc21hcHMiLCJhIjoiY2xyam56OXkyMDR2NjJrb2p3cXU2MjJiMyJ9.WdX5q0xnDQIUQo7hzh1NiQ"
                  mapLib={import("mapbox-gl")}
                  initialViewState={{
                    latitude: 4.81316,
                    longitude: 6.983147,
                    zoom: 15,
                  }}
                  mapStyle="mapbox://styles/mapbox/navigation-night-v1"
                  attributionControl={false}
                ></Map>
                <div className="p-2 border-2 bg-blue-400/50 rounded-full absolute">
                  <img
                    src="/memoji-face.png"
                    alt="memoji"
                    className="w-16 translate-y-1 -translate-x-0.5"
                  />
                </div>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>

      {/* bottom bento  */}
      <div className="grid gap-3 lg:grid-cols-7">
        {/* right bento  */}
        <div className="lg:col-span-2 order-2 lg:order-1 grid lg:grid-cols-1 gap-3 lg:grid-rows-2">
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ scale: 0.1, opacity: 0 }}
            className=" rounded-3xl overflow-hidden relative p-[1px] flex"
          >
            <div className="absolute inset-0">
              <MovingBorder duration={3000} rx="30%" ry="30%">
                <div
                  className={cn(
                    "h-20 w-32 opacity-[0.8] bg-[radial-gradient(var(--neutral-400)_20%,transparent_80%)]"
                  )}
                />
              </MovingBorder>
            </div>
            <div className="card z-50 h-full w-full gap-5 lg:gap-0 flex flex-col justify-between antialiased">
              <Image src={spotify} alt="spotify icon" className="w-16" />

              <div>
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
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ scale: 0.1, opacity: 0 }}
            className="card flex flex-col gap-5 lg:gap-0 justify-between"
          >
            <h4 className="font-[CalSans] text-3xl">
              let me bring your projects and ideas to life.
            </h4>
            <a href="mailto:emmanuelngoka778@gmail.com" className="w-full">
              <button className="w-full flex items-center gap-2.5 text-3xl">
                <Image src={envelope} alt="" />
                email me
              </button>
            </a>
          </motion.div>
        </div>

        {/* left bento */}
        <div className="lg:col-span-5 grid lg:grid-cols-1 gap-3 grid-rows-7">
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            initial={{ scale: 0.1, opacity: 0 }}
            className="flex rounded-3xl overflow-hidden relative h-56 !p-[1px] row-span-3"
          >
            <div className="absolute inset-0">
              <MovingBorder duration={3000} rx="30%" ry="30%">
                <div
                  className={cn(
                    "h-20 w-32 opacity-[0.8] bg-[radial-gradient(var(--neutral-400)_20%,transparent_80%)]"
                  )}
                />
              </MovingBorder>
            </div>
            <div className="card !p-0 w-full h-full z-50">
              <div className="flex w-full h-full overflow-hidden">
                <Image
                  src={peace}
                  alt="Peace sign"
                  className="object-top object-cover w-40"
                />
                <div className="p-7 h-full space-y-5 flex justify-center w-full flex-col">
                  <h4 className="font-[CalSans] text-4xl">
                    some technologies i use.
                  </h4>
                  <div className="flex items-center w-full justify-between">
                    <Image src={javascript} alt="" className="w-6 sm:w-16" />
                    <Image src={typescript} alt="" className="w-6 sm:w-16" />
                    <Image src={nodejs} alt="" className="w-6 sm:w-16" />
                    <Image src={reactIcon} alt="" className="w-6 sm:w-16" />
                    <Image src={flutter} alt="" className="w-6 sm:w-16" />
                    <Image src={github} alt="" className="w-6 sm:w-16" />
                    <Image src={vscode} alt="" className="w-6 sm:w-16" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ scale: 0.1, opacity: 0 }}
            className=" relative rounded-3xl flex !p-[1px] row-span-4 overflow-hidden"
          >
            <div className="absolute inset-0">
              <MovingBorder duration={3000} rx="30%" ry="30%">
                <div
                  className={cn(
                    "h-20 w-32 opacity-[0.8] bg-[radial-gradient(var(--neutral-400)_20%,transparent_80%)]"
                  )}
                />
              </MovingBorder>
            </div>
            <div className="card z-50 h-full w-full !p-0">
              <h4 className="font-[CalSans] p-7 pb-0 text-3xl">
                featured projects
              </h4>
              <InfiniteMovingCards speed="normal" />
            </div>
          </motion.div>
        </div>
      </div>
      {/* socials  */}
      <div className="w-full grid lg:grid-cols-4 gap-5 items-center">
        <a href="https://github.com/zillalikestocode" className="lg:col-span-1">
          <motion.button
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ scale: 0.1, opacity: 0 }}
            className="btn lg:col-span-1 w-full text-2xl font-[CalSans] tracking-wide"
          >
            github
          </motion.button>
        </a>
        <a className="lg:col-span-1" href="https://twitter.com/_zxlla">
          <motion.button
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ scale: 0.1, opacity: 0 }}
            className="btn w-full lg:col-span-1 text-2xl font-[CalSans] tracking-wide"
          >
            twitter
          </motion.button>
        </a>
        <a className="lg:col-span-1" href="https://linkedin.com/in/engoka">
          <motion.button
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ scale: 0.1, opacity: 0 }}
            className="btn w-full lg:col-span-1 text-2xl font-[CalSans] tracking-wide"
          >
            linkedin
          </motion.button>
        </a>
        <a
          className="lg:col-span-1"
          href="https://instagram.com/the_emmanuelngoka"
        >
          <motion.button
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ scale: 0.1, opacity: 0 }}
            className="btn w-full lg:col-span-1 text-2xl font-[CalSans] tracking-wide"
          >
            instagram
          </motion.button>
        </a>
      </div>
    </div>
  );
}
