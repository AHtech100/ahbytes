import { Menu } from "@/app/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "MVP For Startups",
        path: "/project/11",
        newTab: false,
      },
      {
        id: 42,
        title: "Web/App Development",
        path: "/project/12",
        newTab: false,
      },
      {
        id: 43,
        title: "Generative AI",
        path: "/project/13",
        newTab: false,
      },
      {
        id: 44,
        title: "Custom Development",
        path: "/project/14",
        newTab: false,
      },
      {
        id: 45,
        title: "Wix / Webflow",
        path: "/project/15",
        newTab: false,
      },
      {
        id: 46,
        title: "WordPress",
        path: "/project/15",
        newTab: false,
      },
      {
        id: 47,
        title: "Digital Transformation",
        path: "/project/16",
        newTab: false,
      },
      {
        id: 48,
        title: "SEO",
        path: "/project/17",
        newTab: false,
      },
      {
        id: 49,
        title: "CRM Systems",
        path: "/project/18",
        newTab: false,
      },
      {
        id: 49,
        title: "Social Media Marketing",
        path: "/project/19",
        newTab: false,
      },
      {
        id: 50,
        title: " Shopify",
        path: "/project/21",
        newTab: false,
      },
      {
        id: 50,
        title: " E-commerce Solutions",
        path: "/project/20",
        newTab: false,
      },
    ],
  },
];
export default menuData;
