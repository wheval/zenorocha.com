"use client";
import { useEffect, useState } from "react";
import Bento from "./bento";
import Header from "./header";
import { Variants, motion } from "framer-motion";

export default function Main({ recentTracks }: { recentTracks: any }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const variants: Variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 15,
    },
    text: {
      x: mousePosition.x - 45,
      y: mousePosition.y - 55,
      width: 120,
      height: 120,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const textEnter = () => setCursorVariant("text");

  const textLeave = () => setCursorVariant("default");
  return (
    <main className="p-5 space-y-3 relative md:p-10 md:px-20 max-w-screen-xl m-auto">
      {/* <Intro /> */}
      <Header />
      <Bento
        textEnter={textEnter}
        textLeave={textLeave}
        recentTracks={recentTracks}
      />
      <motion.div
        variants={variants}
        animate={cursorVariant}
        transition={{ duration: 0.1 }}
        className="w-4 h-4 cursor hidden md:block z-[99] rounded-full bg-white fixed top-0 left-0"
      />
    </main>
  );
}
