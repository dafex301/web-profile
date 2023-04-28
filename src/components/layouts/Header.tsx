"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header className="bg-gray-700 pb-6">
      <div className="flex justify-between xl:xl:mx-64 md:mx-24 mx-5 pt-8">
        <Link href={"/"} className="text-white font-bold text-2xl">
          DAFEX
        </Link>
        <div className="flex gap-4 font-semibold">
          <Link
            href={"/"}
            className={
              path === "/"
                ? "text-gray-100 flex flex-col items-center tansition-all"
                : "text-gray-500 opacity-60 hover:opacity-100 hover:text-gray-200 transition-all"
            }
          >
            <div>Home</div>
            <div
              className={
                path === "/"
                  ? "w-2 h-2 rounded-full bg-yellow-500 opacity-100 transition-all"
                  : "opacity-0 transition-all"
              }
            ></div>
          </Link>

          <div
            className={
              path === "/wip"
                ? "text-gray-100 flex flex-col items-center tansition-all"
                : "text-gray-500 opacity-60 hover:opacity-100 hover:text-gray-200 transition-all cursor-not-allowed"
            }
          >
            WIP
          </div>
          <div
            className={
              path === "/wip"
                ? "w-2 h-2 rounded-full bg-yellow-500 opacity-100 transition-all"
                : "opacity-0 transition-all"
            }
          ></div>
        </div>
      </div>
    </header>
  );
}
