"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Array of project names and corresponding URLs
const projects = [
  { text: "WordPress Development", url: "/project/11" },
  { text: "SEO", url: "/project/12" },
  { text: "UX/UI", url: "/project/13" },
  { text: "MVP For Startups", url: "/project/14" },
  { text: "Web/App Development", url: "/project/15" },
  { text: "Generative AI", url: "/project/16" },
  { text: "Custom Development", url: "/project/17" },
  { text: "Wix / Webflow", url: "/project/18" },
  { text: "Digital Transformation", url: "/project/19" },
  { text: "CRM Systems", url: "/project/20" },
  { text: "Social Media Marketing", url: "/project/21" },
  { text: "E-commerce Solutions", url: "/project/22" },
  { text: "Shopify", url: "/project/23" },
  { text: "Wix / Webflow", url: "/project/18" },
  { text: "UX/UI", url: "/project/13" },
];

export function AnimatedShinyTextDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through the project names every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="z-10 grid sm:grid-cols-3 gap-2 grid-cols-2 pb-8 items-center justify-center">
      {/* Dynamic Project List */}
      {projects.map((project, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center justify-between w-full p-4 my-2  border-gray-300"
          )}
        >
          <span className="dark:text-white text-lg">{project.text}</span>
          <Link href={project.url} className="flex justify-center items-center">
            <button className="group flex rounded-full border w-36  text-sm text-white px-4 py-1 transition-all ease-in  border-white/5 bg-[#4a6cf7] hover:bg-[#2649d8]">
              Order Now
              <ArrowRightIcon className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </button>
          </Link>
        </div>
      ))}

  
    </div>
  );
}
