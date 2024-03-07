"use client";
import { motion, useAnimate } from "framer-motion";
import LampContainer from "./lamp";
import CountUp from "react-countup";

export default function Intro() {
  const [scope, animate] = useAnimate();
  return (
    <motion.div
      ref={scope}
      className="sm:flex hidden z-[999] items-center flex-col justify-center text-center fixed h-[100dvh] w-full overflow-hidden left-0 top-0"
    >
      <LampContainer>
        <motion.div>
          <motion.h4
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -25 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="font-medium font-['CalSans'] text-5xl"
          >
            Emmanuel Ngoka
          </motion.h4>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <h4 className="text-white/75 font-medium text-lg">
              Mobile and Web Developer
            </h4>
          </motion.div>
          <div className="h-full"></div>
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-white/75 text-3xl font-medium"
          >
            loading...{" "}
            <CountUp
              duration={2.5}
              onEnd={() => animate(scope.current, { height: 0 })}
              delay={1.6}
              end={100}
            />
            %
          </motion.h4>
        </motion.div>
      </LampContainer>
    </motion.div>
  );
}
