"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Array of project names and corresponding URLs, grouped by column
const firstColumnProjects = [
  { text: "WordPress", url: "/project/15" },
  { text: "SEO", url: "/project/17" },
  { text: "Web Flow", url: "/project/15" },
  { text: "Wix", url: "/project/15" },
  { text: "Digital Transformation", url: "/project/16" },
  { text: "Graphic Designing", url: "/project/22" },
];

const secondColumnProjects = [
  { text: "Web Development", url: "/project/12" },
  { text: "Custom Development", url: "/project/14" },
  { text: "UX/UI", url: "/project/23" },
  { text: "Generative AI", url: "/project/13" },
  { text: "MVP", url: "/project/11" },
  { text: "SaaS", url: "/project/24" },
];

const thirdColumnProjects = [
  { text: "E-commerce", url: "/project/20" },
  { text: "Business Registration", url: "/project/25" },
  { text: "Shopify", url: "/project/21" },
  { text: "WooCommerce", url: "/project/26" },
  { text: "B2B Services", url: "/project/27" },
  { text: "Social Media Marketing", url: "/project/19" },
];

export function ProjectListDemo() {
  return (
    <div className="z-10 grid sm:grid-cols-3 gap-4 grid-cols-1 pb-8 items-center justify-center">
      {/* First Column */}
      <div>
        {firstColumnProjects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-between w-full p-4 my-2 border-gray-300"
            )}
          >
            <span className="dark:text-white text-lg">{project.text}</span>
            <Link href={project.url} className="flex justify-center items-center">
              <button className="group flex rounded-full border w-36 text-sm text-white px-4 py-1 transition-all ease-in  border-white/5 bg-[#4a6cf7] hover:bg-[#2649d8]">
                Order Now
                <ArrowRightIcon className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Second Column */}
      <div>
        {secondColumnProjects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-between w-full p-4 my-2 border-gray-300"
            )}
          >
            <span className="dark:text-white text-lg">{project.text}</span>
            <Link href={project.url} className="flex justify-center items-center">
              <button className="group flex rounded-full border w-36 text-sm text-white px-4 py-1 transition-all ease-in  border-white/5 bg-[#4a6cf7] hover:bg-[#2649d8]">
                Order Now
                <ArrowRightIcon className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Third Column */}
      <div>
        {thirdColumnProjects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-between w-full p-4 my-2 border-gray-300"
            )}
          >
            <span className="dark:text-white text-lg">{project.text}</span>
            <Link href={project.url} className="flex justify-center items-center">
              <button className="group flex rounded-full border w-36 text-sm text-white px-4 py-1 transition-all ease-in  border-white/5 bg-[#4a6cf7] hover:bg-[#2649d8]">
                Order Now
                <ArrowRightIcon className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
