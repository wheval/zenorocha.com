"use client";

import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";
import { projects } from "@/assets/data/data";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowUpRight,
  Expand,
  Link2,
  Link2Icon,
  LinkIcon,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export const InfiniteMovingCards = () => {
  const [layoutId, setLayoutId] = useState("");
  const [showPop, setShow] = useState(false);
  const [activeProject, setProject] = useState<any>();
  return (
    <div>
      {showPop && (
        <ProjectPopup
          project={activeProject}
          layoutId={layoutId}
          closePopup={() => setShow(false)}
        />
      )}
      <Swiper
        slidesPerView={"auto"}
        // modules={[Autoplay]}
        // autoplay={{ delay: 0, pauseOnMouseEnter: true }}
        className="!translate-y-4 !pt-4 !overflow-none !static"
      >
        {projects.map((item, idx) => (
          <SwiperSlide key={idx} className="!w-fit !static !mx-1.5">
            <ProjectItem
              index={idx}
              setProject={setProject}
              setLayoutId={setLayoutId}
              item={item}
              setShow={setShow}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

function ProjectItem({
  item,
  index,
  setShow,
  setLayoutId,
  setProject,
}: {
  item: any;
  index: number;
  setShow: any;
  setLayoutId: any;
  setProject: any;
}) {
  return (
    <>
      <motion.li
        whileHover={{ y: -15 }}
        layoutId={item.name + String(index)}
        className="w-[350px] max-w-full justify-center flex h-full rounded-2xl flex-shrink-0 md:w-[450px]"
      >
        <div className="p-4 absolute w-full flex items-center">
          <div className="ml-auto flex items-center gap-2.5">
            <a href={item.url}>
              <button className="bg-neutral-800 rounded-full p-2">
                <Link2Icon />
              </button>
            </a>
            <button
              onClick={() => {
                setLayoutId(item.name + String(index));
                setProject(item);
                setTimeout(() => setShow(true), 300);
              }}
              className="bg-neutral-800 rounded-full p-2"
            >
              <ArrowLeft className="rotate-[135deg]" />
            </button>
          </div>
        </div>
        <img
          src={item.image}
          className="h-full w-full object-cover rounded-2xl"
          alt=""
        />
      </motion.li>
    </>
  );
}

function ProjectPopup({
  layoutId,
  closePopup,
  project,
}: {
  project: any;
  layoutId: string;
  closePopup: any;
}) {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 z-[99] h-screen w-[100dvw] flex items-center flex-col justify-center">
      <div
        className="absolute bg-neutral-800/30 backdrop-blur-lg w-screen h-screen -z-10"
        onClick={closePopup}
      />
      <motion.div
        layoutId={layoutId}
        className="rounded-3xl flex gap-5 z-50 card"
      >
        <div className="h-[50vh] w-72 grow">
          <img
            src={project.image}
            className="h-full object-cover rounded-lg w-full"
          />
        </div>
        <div className="max-w-md flex flex-col">
          <div className="mb-5">
            <div className="flex mb-2 items-end gap-2.5">
              <h4 className="font-[CalSans] text-3xl">{project.title}</h4>
              <a href={project.url} className="ml-auto">
                <button className="p-2 rounded-full ml-auto">
                  <Link2 />
                </button>
              </a>
              <button className="p-2 rounded-full" onClick={() => closePopup()}>
                <X />
              </button>
            </div>
            <p className="text-sm text-neutral-300">{project.description}</p>
          </div>
          <div className="h-full"></div>
          <div className="flex items-center gap-2.5 flex-wrap">
            {project.stack.map((item: any, i: any) => (
              <div
                key={i}
                className="border p-3 py-1.5 text-sm border-neutral-500 text-neutral-400 rounded-full"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
