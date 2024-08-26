import { Blog } from "@/app/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Applyace",
    paragraph:
      "ApplyAce is an online admission portal which help student to get online admission to any  International University and College.",
    image: "/images/blog/applyace.webp",
    url:"https://applyaces.com/",
    author: {
      name: "Applyace",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Fullstack"],
    publishDate: "2022",
  },
  {
    id: 3,
    title: "3D-Megma",
    paragraph:
      "3D webiste for Create a digital twin of your existing building and release the potential of Web3.",
    image: "/images/blog/3rd-site.png",
    url:"/prject",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["3D-Fullstack"],
    publishDate: "2024",
  },
  {
    id: 4,
    title: "SwiftMail",
    url:"https://swift-mail.vercel.app/",
    paragraph:
      "SwiftMail cutting-edge AI-powered email generation service. Whether you’re a seasoned user or just getting started.",
    image: "/images/blog/Swift-mail.webp",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["AI"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Terzo.ai",
    url:"https://github.com/ahkamboh/Terzo.ai",
    paragraph:
      "Through Terzo.ai Unlock financial insights hidden in your contracts Discover data across your contract ecosystem to drive savings.",
    image: "/images/blog/Terzo.ai.webp",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["AI"],
    publishDate: "2023",
  },
];
export default blogData;
