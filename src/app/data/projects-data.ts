// data/projectsData.ts
export interface Project {
    id: number;
    title: string;
    date: string;
    views: number;
    comments: number;
    description: string;
    platformImage: string;
    platformLink: string;
    linkTitle:string;
    subheading: string;
    subdescription: string;
    features: string[];
    quote: string;
    tags: string[];
}

// Default author data
const defaultAuthor = {
    authorName: "AH Bytes Team",
    authorImage: "/images/projects/ahbytes.webp",
};

// Project data array
const projectsData: Project[] = [
    {
        id: 1,
        title: "Applyace: Revolutionizing University Applications with AI",
        date: "12 Jan 2023",
        views: 50,
        comments: 35,
        description:
            "Applyace, powered by AH Bytes, is a pioneering Pakistani education platform designed to assist students in applying to universities. Utilizing cutting-edge technologies like Ruby on Rails, Tailwind CSS, Generative AI, ChatGPT APIs, Node.js, Ruby, and PostgreSQL, we provide a comprehensive suite of tools that streamline the application process.",
        platformImage: "/images/projects/applyace.webp",
        platformLink: "https://applyaces.com",
        linkTitle:"Visit Applyace",
        subheading: "Innovative AI Solutions for Education",
        subdescription: "At AH Bytes, we believe in the power of AI to transform education. Applyace harnesses generative AI to provide personalized support and guidance throughout the application process, making it easier for students to navigate the complexities of university admissions.",
        features: [
            "AI-Powered Resume Builder",
            "Cover Letter and Recommendation Letter Generators",
            "Email Reply Generator",
            "Merit Calculator for University Program Matching",
        ],
        quote: "Empowering students with AI-driven tools to achieve their educational goals.",
        tags: ["AI", "Education", "PostgreSQL","Node.js","ChatGPT APIs","Ruby on Rails"],
    },
    {
        id: 2,
        title: "Terzo.ai: Revolutionizing Content Creation with AI",
        date: "1 May 2022",
        views: 20,
        comments: 35,
        description:
            "Terzo.ai, developed by AH Bytes, is an innovative platform leveraging the power of Next.js and Tailwind CSS to enhance content creation with AI. By integrating cutting-edge AI APIs like OpenAI, Terzo.ai offers a suite of tools that enable seamless content generation, personalized recommendations, and interactive user experiences. Whether it's drafting articles, generating creative ideas, or automating repetitive tasks, Terzo.ai simplifies the content creation process, allowing users to focus on what truly matters: creativity and quality.",
        platformImage: "/images/projects/Terzo.ai.webp",
        platformLink: "https://terzo.ai",
        linkTitle:"Visit Terzo",
        subheading: "Innovative AI Solutions for Content Creation",
        subdescription: "At AH Bytes, we harness the potential of AI to transform how content is created and consumed. Terzo.ai utilizes AI-driven technologies to provide personalized support and automate various aspects of content creation, helping users efficiently produce high-quality content while minimizing effort.",
        features: [
            "AI-Powered Content Generator",
            "Creative Idea Brainstorming Tools",
            "Automated Editing and Proofreading",
            "Personalized Content Recommendations",
        ],
        quote: "Empowering creators with AI-driven tools to enhance their content creation journey.",
        tags: ["AI", "Content Creation", "Technology","CSS","Next.js","Generative AI"],
    },
    {
        id: 3, 
        title: "3D Website Megma: Dynamic Scrolling with 3D Effects",
        date: "15 September 2023",
        views: 15,
        comments: 10,
        description:
            "3D Website Megma is a visually stunning and interactive website that showcases dynamic 3D effects triggered by scrolling. Developed using Three.js for advanced 3D graphics, GSAP (GreenSock Animation Platform) for animations, HTML, JavaScript, and CSS, the website offers a captivating user experience with smooth animations and responsive design. The Locomotive Scroll library enhances the scrolling behavior, complementing the 3D visuals for a seamless and engaging browsing experience.",
        platformImage: "/images/projects/3rd-site.png", 
        platformLink: "https://ahkamboh.github.io/3D-website-megma",
        linkTitle: "Visit 3D Website Megma",
        subheading: "Immersive 3D Web Experience with Three.js and GSAP",
        subdescription:
            "At 3D Website Megma, we push the boundaries of web design by integrating Three.js for sophisticated 3D graphics and GSAP for smooth animations. Combined with Locomotive Scroll, the website provides an interactive 3D experience that dynamically responds to user scrolling, creating an engaging and memorable web interaction.",
        features: [
            "Advanced 3D Visuals with Three.js",
            "Responsive 3D Effects Triggered by Scrolling",
            "GSAP Animations for Smooth Transitions",
            "Enhanced Scrolling Experience with Locomotive Scroll",
            "Responsive Design Optimized for All Devices",
        ],
        quote: "Elevating web experiences with Three.js, creating dynamic 3D visuals and smooth animations.",
        tags: ["3D", "Web Design", "Animation", "JavaScript", "CSS", "HTML", "GSAP", "Three.js"],
    },
    {
        id: 4, 
        title: "SwiftMail: AI-Powered Cold Email Writing Solution",
        date: "30 October 2023", 
        views: 25,
        comments: 5, 
        description:
            "SwiftMail is an innovative AI-powered tool designed to streamline the process of writing cold emails. Utilizing advanced AI technology, SwiftMail generates personalized email content that is professional, engaging, and tailored to your specific needs. Perfect for reaching out to potential clients, collaborators, or employers, SwiftMail simplifies email crafting, ensuring your communications are impactful and efficient.",
        platformImage: "/images/projects/Swift-mail.webp", 
        platformLink: "https://swift-mail.vercel.app",
        linkTitle: "Visit SwiftMail",
        subheading: "Revolutionize Your Email Outreach with AI",
        subdescription:
            "SwiftMail harnesses the power of AI to transform your email outreach efforts. With a user-friendly interface and robust customization options, SwiftMail helps you create compelling cold emails that resonate with your target audience.",
        features: [
            "AI-Powered Content Generation",
            "User-Friendly Interface for Easy Navigation",
            "Customization Options for Tailored Messaging",
            "Efficient and Professional Email Drafting",
        ],
        quote: "Experience the future of email writing with AI-driven solutions by SwiftMail.",
        tags: ["AI", "Email Writing", "Cold Emails", "Productivity", "Technology"],
    }
    ,  {
        id: 11,
        title: "MVP For Startups",
        date: "",
        views: 40,
        comments: 10,
        description:
          "Our MVP approach delivers a functional, streamlined product within just 30 days. By focusing on core features, we help you validate your concept, gather essential feedback, and quickly enter the market. This agile strategy minimizes risks and ensures your product meets user needs from the start.",
        platformImage: "/images/projects/MVP-Development-for-Startups.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Fast-Track Your Startup with Our MVP Services",
        subdescription:
          "Delivering a minimum viable product within 30 days to quickly validate your concept and minimize risks.",
        features: [
          "Quick Market Entry",
          "Core Feature Development",
          "User Feedback Integration",
          "Risk Minimization",
        ],
        quote: "Validate your startup idea with our streamlined MVP approach.",
        tags: ["MVP", "Startups", "Product Development", "Lean Startup", "Agile"],
      },
      {
        id: 12,
        title: "Web/App Development",
        date: "",
        views: 55,
        comments: 8,
        description:
          "We offer Web Development Services to businesses of all sizes to give them a boost. Web development involves a range of tasks, including designing the user interface, developing the back-end functionality, and ensuring that the website or web app is responsive and user-friendly.",
        platformImage: "/images/projects/Types-of-Web-Development-for-your-Project.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Transform Your Digital Presence with Expert Development",
        subdescription:
          "Comprehensive web and app development services tailored to meet your business needs.",
        features: [
          "User-Friendly Design",
          "Responsive Development",
          "Backend Integration",
          "Full-Service Web/App Development",
        ],
        quote: "Boost your business with our comprehensive web and app development services.",
        tags: ["Web Development", "App Development", "User Experience", "Technology"],
      },
      {
        id: 13,
        title: "Generative AI",
        date: "",
        views: 35,
        comments: 7,
        description:
          "AH Bytes's Generative AI services help businesses unlock new levels of creativity and efficiency by automating content creation, optimizing workflows, and providing unique data-driven insights.",
        platformImage: "/images/projects/generative-ai.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Harness the Power of AI for Creative and Efficient Solutions",
        subdescription:
          "Leverage Generative AI to enhance your business operations with automated content creation and optimized workflows.",
        features: [
          "AI-Driven Content Creation",
          "Workflow Optimization",
          "Data-Driven Insights",
          "Enhanced Creativity and Efficiency",
        ],
        quote: "Unlock creativity and efficiency with Generative AI solutions.",
        tags: ["AI", "Generative AI", "Automation", "Innovation", "Efficiency"],
      },
      {
        id: 14,
        title: "Custom Development",
        date: "",
        views: 45,
        comments: 6,
        description:
          "Custom software development is the process of creating tailored software applications or solutions designed to meet specific business needs, requirements, and objectives.",
        platformImage: "/images/projects/custom-development.png",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Tailored Software Solutions for Your Business",
        subdescription:
          "Developing custom software applications to meet your specific business objectives and needs.",
        features: [
          "Tailored Solutions",
          "Scalable Applications",
          "Custom Integrations",
          "Business-Specific Development",
        ],
        quote: "Create software solutions as unique as your business.",
        tags: ["Custom Development", "Software", "Business Solutions", "Technology"],
      },
      {
        id:15,
        title: "WordPress / Wix / Webflow",
        date: "",
        views: 50,
        comments: 9,
        description:
          "Building websites with varying levels of control and customization. WordPress offers extensive plugins and themes, Wix provides easy drag-and-drop creation, and Webflow caters to designers needing advanced design and CMS features.",
        platformImage: "/images/projects/wordpress-vs-wix-ft-img-3-min.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Flexible Website Solutions with WordPress, Wix, and Webflow",
        subdescription:
          "Choose the right platform for your website with our WordPress, Wix, and Webflow solutions.",
        features: [
          "Extensive Plugins and Themes",
          "Drag-and-Drop Functionality",
          "Advanced Design Features",
          "Customizable CMS",
        ],
        quote: "Build your perfect website with the right tools and support.",
        tags: ["WordPress", "Wix", "Webflow", "Website Development", "CMS"],
      },
      {
        id: 16,
        title: "Digital Transformation",
        date: "",
        views: 60,
        comments: 12,
        description:
          "Unleashing the full potential of your business through expert guidance and strategic implementation of cutting-edge technologies.",
        platformImage: "/images/projects/digital-transformationn.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Empower Your Business with Digital Transformation",
        subdescription:
          "Transform your business processes and strategies with our expert digital solutions.",
        features: [
          "Cutting-Edge Technology Implementation",
          "Strategic Planning",
          "Business Process Optimization",
          "Enhanced Digital Presence",
        ],
        quote: "Transform your business with our digital expertise.",
        tags: ["Digital Transformation", "Technology", "Innovation", "Strategy"],
      },
      {
        id: 17,
        title: "Search Engine Optimization",
        date: "",
        views: 38,
        comments: 4,
        description:
          "Our team conducts thorough keyword research, optimizes your website's content, and enhances technical aspects to ensure higher search engine rankings. We focus on driving organic traffic, improving your brand visibility, and delivering measurable results for your business.",
        platformImage: "/images/projects/seo.png",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Optimize Your Online Presence with Expert SEO Services",
        subdescription:
          "Drive organic traffic and improve visibility with our comprehensive SEO strategies.",
        features: [
          "Keyword Research",
          "Content Optimization",
          "Technical SEO Improvements",
          "Organic Traffic Growth",
        ],
        quote: "Elevate your online visibility with proven SEO strategies.",
        tags: ["SEO", "Search Engine Optimization", "Digital Marketing", "Traffic"],
      },
      {
        id: 18,
        title: "CRM Systems",
        date: "5 September 2024",
        views: 47,
        comments: 5,
        description:
          "Our expert team designs and develops CRM solutions that streamline customer management, automate sales processes, and enhance team collaboration. We create CRM solutions that empower your business to improve customer relationships, boost efficiency, and drive growth.",
        platformImage: "/images/projects/what-is-crm-system-anodius.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Enhance Customer Relationships with CRM Solutions",
        subdescription:
          "Improve customer management and sales processes with our custom CRM systems.",
        features: [
          "Customer Management",
          "Sales Process Automation",
          "Team Collaboration",
          "Growth-Oriented Solutions",
        ],
        quote: "Boost your customer relationships with tailored CRM systems.",
        tags: ["CRM", "Customer Relationship Management", "Automation", "Sales"],
      },
      {
        id:19,
        title: "Social Media Marketing",
        date: "",
        views: 52,
        comments: 11,
        description:
          "At AHBytes, we elevate your brand with comprehensive Social Media Marketing services, including targeted Google Ads and other high-impact advertising solutions. Our strategic campaigns are designed to enhance your online visibility, engage your audience, and drive conversions.",
        platformImage: "/images/projects/social-media-marketing.webp",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Maximize Your Reach with Strategic Social Media Marketing",
        subdescription:
          "Engage your audience and drive conversions with our targeted social media strategies.",
        features: [
          "Targeted Advertising",
          "Audience Engagement",
          "Brand Visibility",
          "Conversion Optimization",
        ],
        quote: "Elevate your brand with strategic social media marketing.",
        tags: ["Social Media", "Marketing", "Digital Marketing", "Branding"],
      },
      {
        id: 20,
        title: "E-commerce Solutions",
        date: "",
        views: 78,
        comments: 15,
        description:
          "At AHBytes, we specialize in building powerful E-commerce solutions that drive sales and enhance customer experience. Our tailored platforms are designed to maximize engagement, optimize conversions, and grow your online business.",
        platformImage: "/images/projects/ecommerce.png",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Unlock the Full Potential of Your E-commerce Store",
        subdescription:
          "Our comprehensive E-commerce solutions ensure seamless customer experience, from product browsing to checkout.",
        features: [
          "Custom E-commerce Platforms",
          "Conversion Rate Optimization",
          "Seamless Payment Integration",
          "Inventory Management",
        ],
        quote: "Boost your online sales with a robust E-commerce solution.",
        tags: ["E-commerce", "Online Store", "Sales", "Shopping Cart"],
      },
      {
        id: 21,
        title: "Shopify Store",
        date: "",
        views: 63,
        comments: 9,
        description:
          "At AHBytes, we help brands connect with millions of listeners through targeted Shopify Advertising campaigns. Our data-driven strategies are designed to maximize brand awareness and engage the right audience.",
        platformImage: "/images/projects/shopify_20stores.webp",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Leverage Shopify Powerful Advertising Platform",
        subdescription:
          "Engage listeners with tailored ads and grow your brand with Shopify vast audience.",
        features: [
          "Targeted Audio Ads",
          "Brand Awareness",
          "Podcast Sponsorships",
          "Real-time Analytics",
        ],
        quote: "Reach millions of listeners with Shopify Advertising.",
        tags: ["Shopify", "Audio Ads", "Music", "Brand Awareness"],
      },
      {
        id: 22,
        title: "Graphic Design",
        date: "",
        views: 128,
        comments: 15,
        description:
          "At AHBytes, we specialize in creating visually captivating graphic designs that align with your brand's identity. Whether it's logos, brochures, or digital ads, our creative team delivers high-quality designs that leave a lasting impression.",
        platformImage: "/images/projects/what-is-graphic-design-header.jpg", // Make sure to replace with the actual image path
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Creative Solutions for Your Visual Needs",
        subdescription:
          "From logos to marketing materials, we design compelling visuals that resonate with your audience.",
        features: [
          "Logo Design",
          "Brochure Design",
          "Digital and Print Ads",
          "Branding and Visual Identity",
        ],
        quote: "Your brand deserves to be seen in the best light. Let us help you shine with our graphic design expertise.",
        tags: ["Graphic Design", "Branding", "Marketing", "Creative"],
      },
      {
        id: 23,
        title: "UX/UI Design with Figma",
        date: "",
        views: 89,
        comments: 12,
        description:
          "At AHBytes, we design user experiences that are intuitive, engaging, and impactful. Leveraging Figma, our team collaborates efficiently to create user interfaces that are not only visually appealing but also highly functional. Our UX/UI design services ensure your digital products are easy to navigate, aesthetically pleasing, and optimized for performance.",
        platformImage: "/images/projects/5757453-scaled-1.jpg", // Replace with the actual image path
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Collaborate in Real-Time with Figma to Create Seamless Designs",
        subdescription:
          "From wireframes to high-fidelity prototypes, we use Figma to streamline the design process, ensuring that every element is pixel-perfect and aligned with your vision.",
        features: [
          "User Research and Personas",
          "Wireframing and Prototyping in Figma",
          "Visual Design",
          "Interactive Prototypes",
          "Real-time Collaboration",
          "Usability Testing",
        ],
        quote: "Using Figma, we bring your design ideas to life with precision and collaboration, ensuring the best user experience possible.",
        tags: ["UX Design", "UI Design", "Figma", "Prototyping", "User Experience", "Real-time Collaboration"],
      }
      ,
      {
        id: 24,
        title: "SaaS Development",
        date: "",
        views: 102,
        comments: 14,
        description:
          "At AHBytes, we specialize in building scalable and secure Software as a Service (SaaS) platforms tailored to your business needs. Our team develops end-to-end SaaS solutions that streamline processes, improve user experience, and provide easy access to your services from anywhere. Whether you’re looking to build a SaaS from scratch or enhance your existing platform, we have the expertise to make it happen.",
        platformImage: "/images/projects/63f7294d7b58a42ac6e28be5_Top SaaS Product Ideas for Your Startup.png", // Replace with actual image path
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Build Scalable and Secure SaaS Platforms",
        subdescription:
          "Our SaaS solutions are built with scalability, security, and performance in mind, ensuring that your software can grow with your business.",
        features: [
          "Cloud-based Infrastructure",
          "Scalable Architecture",
          "Data Security and Compliance",
          "Customizable User Interfaces",
          "Automated Updates and Maintenance",
          "Third-party Integrations",
        ],
        quote: "Build and scale your SaaS platform with solutions designed for growth and flexibility.",
        tags: ["SaaS", "Cloud", "Scalability", "Security", "Third-party Integrations"],
      }
      ,
      {
        id: 25,
        title: "Business Registration Services",
        date: "",
        views: 89,
        comments: 6,
        description:
          "At AHBytes, we streamline the process of business registration, helping entrepreneurs and businesses get started quickly and compliantly. From registering your business as an LLC, Corporation, Partnership, or Sole Proprietorship, we handle all the legal paperwork, ensuring your business is set up correctly and in compliance with regulations.",
        platformImage: "/images/projects/businessregisteration2.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Register Your Business with Confidence",
        subheading: "Fast & Easy Business Registration",
        subdescription:
          "We provide comprehensive support in registering your business entity, whether it's an LLC, Corporation, or any other business structure.",
        features: [
          "LLC Registration",
          "Corporation Registration",
          "Sole Proprietorship Setup",
          "Partnership Formation",
          "Compliance and Legal Support",
          "State and Federal Filings",
        ],
        quote: "Start your business the right way with AHBytes Business Registration services.",
        tags: ["Business Registration", "LLC", "Corporation", "Legal Support"],
      }
      
      ,
      {
        id: 26,
        title: "WooCommerce Development",
        date: "",
        views: 72,
        comments: 12,
        description:
          "AHBytes specializes in WooCommerce development, helping businesses create powerful, scalable online stores on WordPress. Whether you're looking to set up a new store, customize your existing one, or integrate advanced functionalities, we provide end-to-end WooCommerce solutions.",
        platformImage: "/images/projects/what-is-woocommerce.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Custom WooCommerce Solutions for Every Business",
        subdescription:
          "From store setup to custom plugins, we deliver tailored WooCommerce solutions that drive sales and enhance user experience.",
        features: [
          "Custom WooCommerce Development",
          "Theme Customization",
          "Plugin Development & Integration",
          "Payment Gateway Integration",
          "Store Optimization & Scaling",
          "Real-time Analytics & Reporting",
        ],
        quote: "Build your online store with WooCommerce and unlock your business potential.",
        tags: ["WooCommerce", "E-commerce", "WordPress", "Custom Development"],
      }
      
      ,
      {
        id: 27,
        title: "B2B Services",
        date: "",
        views: 85,
        comments: 14,
        description:
          "At AHBytes, we empower businesses with robust B2B services designed to enhance operational efficiency, drive partnerships, and streamline processes. Our B2B solutions are tailored to help businesses of all sizes engage with other enterprises and scale effectively.",
        platformImage: "/images/projects/B2B_CS_Trends_Blog_He.2e16d0ba.fill-1200x625.format-jpeg_25BXi80.jpg",
        platformLink: "https://ahbytes.com/order",
        linkTitle: "Order Now",
        subheading: "Tailored B2B Solutions for Growth and Collaboration",
        subdescription:
          "From lead generation to enterprise collaboration, we offer comprehensive B2B services that help you scale and build partnerships.",
        features: [
          "Lead Generation & Qualification",
          "Enterprise Collaboration Tools",
          "Custom CRM & ERP Solutions",
          "Sales Automation & Support",
          "B2B Marketing & Outreach",
        ],
        quote: "Boost your B2B relationships and operations with AHBytes' B2B services.",
        tags: ["B2B", "CRM", "ERP", "Sales", "Enterprise Solutions"],
      }
      
    
];

export { projectsData, defaultAuthor };
