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
        platformLink: "#",
        linkTitle: "Learn More About MVP For Startups",
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
        platformLink: "#",
        linkTitle: "Explore Web/App Development Services",
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
        platformLink: "#",
        linkTitle: "Discover Generative AI Solutions",
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
        platformLink: "#",
        linkTitle: "Learn About Custom Development",
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
        platformLink: "#",
        linkTitle: "Explore Website Building Solutions",
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
        platformLink: "#",
        linkTitle: "Start Your Digital Transformation Journey",
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
        platformLink: "#",
        linkTitle: "Boost Your Online Presence with SEO",
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
        platformLink: "#",
        linkTitle: "Explore CRM Solutions",
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
        platformLink: "#",
        linkTitle: "Boost Your Brand with Social Media Marketing",
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
    
    
];

export { projectsData, defaultAuthor };
