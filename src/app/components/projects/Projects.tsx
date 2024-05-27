'use client';
import PageHeading from '../PageHeading';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export type ITechStackColor = {
    [key: string]: string;
};

export const TechStackColorMap: ITechStackColor = {
  React: "bg-blue-400 text-blue-900",
  TypeScript: "bg-sky-500 text-sky-900",
  "Tailwind CSS": "bg-cyan-400 text-cyan-900",
  "Next.js": "bg-neutral-900 text-white",
  JavaScript: "bg-yellow-400 text-yellow-900",
  "Express.js": "bg-white text-neutral-900",
  Java: "bg-orange-400 text-orange-900",
  SQLite: "bg-cyan-200 text-cyan-900",
  Svelte: "bg-orange-500 text-orange-900",
  "Stability.ai": "bg-indigo-400 text-indigo-900",
  Supabase: "bg-green-500 text-black",
  PostgreSQL: "bg-cyan-200 text-cyan-900",
};

export const ProjectsData = [
  {
    projectName: "Patrols",
    description: `Currently developing a progressive web app to enhance incident reporting procedures for Community Patrol New Zealand, within a team of 11 developers and designers utilising React, Node, Express, Supabase, PostgreSQL, and Prisma, while
following Agile methodologies.`,
    link: "https://github.com/UoaWDCC/patrols",
    projectImg: "./assets/images/projects/cpnz.png",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    projectName: "The Art Thief",
    description: `Our team achieved 1st place at WDCC x SESA Hackathon for The Art Thief - a web-based game developed in 24 hours that utlises Stability.ai's Stable Diffusion API to draw replicas of renowned historical masterpieces from simple line sketches and text prompts.`,
    link: "https://github.com/raymondyangdev/the-art-thief-wdccxsesa",
    projectImg: "./assets/images/projects/the-art-thief.svg",
    techStack: ["Svelte", "Stability.ai", "Express.js"],
  },
  {
    projectName: "raymondyang.io",
    description: `I taught myself React and Next.js via the official documentation to create this website. Deployed it using Cloudflare Pages`,
    link: "https://github.com/raymondyangdev/raymondyang.io",
    projectImg: "./assets/images/memoji.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    projectName: "Bulls and Cows",
    description: `A console-based game developed for a COMPSCI 718 assignment to demonstrate the application of fundamental object-oriented programming principles. This project features multiple levels of AI difficulty, including easy, medium, and hard. Notably, the Hard AI employs a minimax algorithm to optimise its guessing strategy against the player.`,
    link: "https://github.com/raymondyangdev/bulls-and-cows",
    projectImg: "./assets/images/projects/bulls-and-cows.svg",
    techStack: ["Java"],
  },
  {
    projectName: "Fluffy Frogs",
    description: `A full-stack blog app with CRUD features created for the final assignment of COMPSCI 719 as a team of 4. This application includes essential CRUD features. Our initial front-end design was not completed by the deadline, so I integrated Tailwind CSS to assist with polishing the front-end. I enjoyed working with SQL and designing the database. The ER diagram can be found in the root directory of the GitHub repository.
`,
    link: "https://github.com/raymondyangdev/fluffy-frogs-blog",
    projectImg: "./assets/images/projects/fluffy-frog.svg",
    techStack: ["JavaScript", "Tailwind CSS", "Express.js", "SQLite"],
  },
];

export default function Projects() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <PageHeading
                    heading={'Notable Projects'}
                    size={'text-3xl'}
                    margin={'my-6'}
                />
                <Link
                    href={'/projects'}
                    className="pb-2 sm:pb-0 text-lg font-montserratBold flex hover:underline hover:decoration-sky-900 hover:underline-offset-8 "
                >
                    ALL PROJECTS →
                </Link>
            </div>
            <h3 className="font-josefinSans text-xl">
                Here are a few of my most recent projects!
            </h3>
            {ProjectsData.slice(0, 3).map((project, index) => (
                <div data-aos="fade-right" key={index}>
                    <ProjectCard
                        link={project.link}
                        projectName={project.projectName}
                        projectImg={project.projectImg}
                        techStack={project.techStack}
                        description={project.description}
                        techStackColors={TechStackColorMap}
                    />
                </div>
            ))}
        </section>
    );
}
