"use client";

import Logo from "@/components/Logo";
import IconDocument from "@/components/IconDocument";
import IconFile from "@/components/IconFile";
import IconUpload from "@/components/IconUpload";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen gap-10 flex-wrap">
      <div className="grid gap-8 max-w-[350px] w-full rounded-xl rounded-tr-[7.5rem] bg-app-blue-700 p-8">
        <Logo />
        <ul className="flex gap-4">
          <li className="rounded-xl bg-app-blue-900 p-3 flex items-center justify-center">
            <IconDocument />
          </li>
          <li className="rounded-xl bg-app-blue-900 p-3 flex items-center justify-center">
            <IconFile />
          </li>
          <li className="rounded-xl bg-app-blue-900 p-3 flex items-center justify-center">
            <IconUpload />
          </li>
        </ul>
      </div>

      <div className="relative grid gap-4 max-w-screen-sm bg-app-blue-700 p-8 rounded-xl w-full">
        <div className="flex gap-2 items-center bg-white rounded-[.625rem] absolute right-8 -top-12 text-app-blue-900 p-4">
          <h3 className="text-[2.5rem] leading-none">185</h3>
          <span className="uppercase text-xs opacity-50">GB left</span>
        </div>

        <h2 className="font-light">
          You’ve used <b className="font-bold">815 GB</b> of your storage
        </h2>
        <div className="grid gap-2.5">
          <div className="relative overflow-hidden rounded-[100px] h-5 bg-app-blue-900 border-[.1875rem] border-app-blue-900">
            <motion.span
              className="rounded-[100px] bg-gradient-highlight h-full absolute left-0 flex items-center justify-end min-w-[1rem] opacity-0"
              animate={{ opacity: [0, 1], width: ["0%", "70%"], x: [-16, 0] }}
              transition={{
                x: { duration: 0.4 },
                width: { duration: 2, ease: "easeOut" },
              }}
            >
              <motion.span
                className="rounded-full bg-white block opacity-0"
                animate={{
                  opacity: [0, 1, 1],
                  x: [0, 2, -4],
                  width: ["2px", "2px", "8px"],
                  height: ["16px", "16px", "8px"],
                }}
                transition={{ delay: 1 }}
              ></motion.span>
            </motion.span>
          </div>
          <div className="flex justify-between items-center">
            <div>0 GB</div>
            <div>1000 GB</div>
          </div>
        </div>
      </div>
    </main>
  );
}
