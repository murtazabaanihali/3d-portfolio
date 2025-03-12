import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

import { TwitterIcon } from "../components/ui/icons";
import { getAllImageFilesFromFolder } from "./utils";

const CONTACT_EMAIL = "murtaza.contact@proton.me";

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export type Project = {
    name: string;
    description: string;
    images: string[];
    techStack: Partial<Record<"frontend" | "backend" | "deployment", string[]>>;
    preview?: string;
    github?: string;
    custom_class?: string;
};

const projects: Project[] = [
    {
        name: "DheGEN - SAAS AI Tool",
        description:
            "A SAAS (Software-as-a-Service) AI tool that combines multiple powerful features for creative and interactive experiences. It offers AI chat for real-time conversations, text-to-image generation for creating visuals from descriptions, and photo maker capabilities. Additionally, it provides face swap for photos and videos, allowing seamless transformations in both images and videos.",
        images: getAllImageFilesFromFolder("dhegen"),
        techStack: {
            frontend: ["Next.js", "Tailwind CSS", "Shadcn UI", "Typescript"],
            backend: ["Next.js", "PostgreSQL", "Redis", "Razorpay"],
            deployment: ["AWS Amplify", "Supabase", "Upstash"]
        },
        preview: "https://www.dhegen.com/",
    },
    {
        name: "Dhesend - For developers by developers",
        description:
            "Dhesend is a platform built by developers for developers to make email sending easy and modern. It focuses on usability, flexibility, and affordability, bridging the gap between innovation and accessibility. I also developed packages to interact with the Dhesend API using Python and Node.js frameworks.",
        images: getAllImageFilesFromFolder("dhesend"),
        techStack: {
            frontend: ["Next.js", "Tailwind CSS", "Shadcn UI", "Typescript", "MDX"],
            backend: ["Express", "AWS SNS, SQS & SES", "PostgreSQL", "Redis", "Paypal", "Razorpay"],
            deployment: ["Vercel", "Render", "AWS Lambda", "Supabase", "Upstash"]
        },
        preview: "https://dhesend.vercel.app/",
        github: "https://github.com/dhesend-org/"
    },
    {
        name: "3D Portfolio",
        description:
            "Explore my unique 3D portfolio, designed to showcase my technical skills and projects in an immersive and engaging way. This interactive environment features detailed 3D models, providing a comprehensive view of my work and achievements. It's a one-of-a-kind presentation that brings my portfolio to life.",
        images: getAllImageFilesFromFolder("portfolio"),
        techStack: {
            frontend: ["Vite.js", "React JS", "Tailwind CSS", "Shadcn UI", "Typescript"],
            deployment: ["Vercel"]
        },
        preview: "https://murtazabaanihali.vercel.app/",
        github: "https://github.com/murtazabaanihali/3d-portfolio"
    },
    {
        name: "Breathings App",
        description:
            "Breathings is a beautifully designed Android app designed to enhance relaxation, mindfulness, and sleep through soothing breathing exercises and calming melodies. With its intuitive and visually appealing user interface, the app offers a seamless experience for users seeking stress relief, better sleep, or mindful breathing practices. Breathings provides a unique and immersive way to achieve peace and tranquility.",
        images: getAllImageFilesFromFolder("breathings"),
        techStack: {
            frontend: ["React Native", "Expo", "Redux"],
            backend: ["Django"],
        },
        github: "https://github.com/murtazabaanihali/breathings",
        custom_class: "aspect-auto max-h-60 md:rounded-sm rounded-sm"
    },
];

const SOCIAL_LINKS = [
    {
        icon: Github,
        link: "https://github.com/murtazabaanihali",
        title: "Github"
    },
    {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/murtazabaanihali/",
        title: "Linkedin"
    },
    {
        icon: TwitterIcon,
        link: "https://x.com/murtazabanihali",
        title: "Twitter"
    },
    {
        icon: Facebook,
        link: "https://facebook.com/murtazabaanihali",
        title: "Facebook"
    },
    {
        icon: Instagram,
        link: "https://instagram.com/murtazabaanihali",
        title: "Instagram"
    },
];

export {
    navLinks,
    projects,
    CONTACT_EMAIL,
    SOCIAL_LINKS
};