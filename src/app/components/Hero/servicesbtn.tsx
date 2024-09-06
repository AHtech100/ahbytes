"use client"
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Link from "next/link"; // Assuming you're using Next.js for routing

// Array of project names and corresponding URLs
const projects = [
  { text: " ✨ MVP For Startups", url: "/project/11" },
  { text: " ✨ Web/App Development", url: "/project/12" },
  { text: " ✨ Generative AI", url: "/project/13" },
  { text: " ✨ Custom Development", url: "/project/14" },
  { text: " ✨ Wix / Webflow", url: "/project/15" },
  { text: " ✨ Digital Transformation", url: "/project/16" },
  { text: " ✨ SEO", url: "/project/17" },
  { text: " ✨ CRM Systems", url: "/project/18" },
  { text: " ✨ Social Media Marketing", url: "/project/19" },
  { text: " ✨ E-commerce Solutions", url: "/project/20" },
  { text: " ✨ Shopify ", url: "/project/21" },
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
    <div className="z-10 flex min-h-[5rem] items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer group  hover:bg-[#2649d8]  dark:border-white/5 dark:bg-[#4a6cf7] dark:hover:bg-[#2649d8] "
        )}
      >
        <Link href={projects[currentIndex].url}>
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-white">
              <span className="dark:text-white group-hover:text-white  ">{projects[currentIndex].text}</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
        </Link>
      </div>
    </div>
  );
}
