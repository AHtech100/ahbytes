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
        platformImage: "/images/projects/swift-mail.webp", 
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
    
    
];

export { projectsData, defaultAuthor };
