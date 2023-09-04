import PageHeading from '../PageHeading';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export type ITechStackColor = {
    [key: string]: string;
};

export const TechStackColorMap: ITechStackColor = {
    React: 'bg-blue-400 text-blue-900',
    TypeScript: 'bg-sky-500 text-sky-900',
    'Tailwind CSS': 'bg-cyan-400 text-cyan-900',
    'Next.js': 'bg-neutral-900 text-white',
    JavaScript: 'bg-yellow-400 text-yellow-900',
    'Express.js': 'bg-white text-neutral-900',
    Java: 'bg-orange-400 text-orange-900',
    SQLite: 'bg-cyan-200 text-cyan-900',
    Svelte: 'bg-orange-500 text-orange-900',
    'Stability.ai': 'bg-indigo-400 text-indigo-900',
};

export const ProjectsData = [
    {
        projectName: 'raymondyang.io',
        description: `I taught myself React and Next.js via the official documentation to create this website in preparation for Summer of Tech's Meet & Greet event. I deployed it using Cloudflare Pages, and now, it has turned into a long-term passion project of mine 🙂.`,
        link: 'https://github.com/raymondyangdev/raymondyang.io',
        projectImg: './assets/images/memoji.png',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
        projectName: 'The Art Thief',
        description: `Our team achieved 1st place at WDCC x SESA Hackathon for The Art Thief - a web-based game developed in 24 hours that utlises Stability.ai's Stable Diffusion API to draw replicas of renowned historical masterpieces from simple line sketches and text prompts.`,
        link: 'https://github.com/raymondyangdev/the-art-thief-wdccxsesa',
        projectImg: './assets/images/projects/the-art-thief.svg',
        techStack: ['Svelte', 'Stability.ai', 'Express.js'],
    },

    {
        projectName: 'Bulls and Cows',
        description: `A console-based game developed for a COMPSCI 718 assignment to demonstrate the application of fundamental object-oriented programming principles. This project features multiple levels of AI difficulty, including easy, medium, and hard. Notably, the Hard AI employs a minimax algorithm to optimise its guessing strategy against the player.`,
        link: 'https://github.com/raymondyangdev/bulls-and-cows',
        projectImg: './assets/images/projects/bulls-and-cows.svg',
        techStack: ['Java'],
    },
    // {
    //     projectName: 'Wanderlust Wanderers',
    //     description: `A full-stack blog app with CRUD features and an enhanced iteration of a group project created for the final assignment of COMPSCI 719. Refactored with a travel-inspired theme and integrated Tailwind CSS into the project.`,
    //     link: 'https://github.com/raymondyangdev/wanderlust-wanderers',
    //     projectImg: './assets/images/projects/wanderlust-wanderers.png',
    //     techStack: ['JavaScript', 'Tailwind CSS', 'Express.js', 'SQLite'],
    // },
];

export default function Projects() {
    return (
        <section>
            <div className="flex justify-between items-center">
                <PageHeading
                    heading={'Recent Projects'}
                    size={'text-3xl'}
                    margin={'my-6'}
                />
                <Link
                    href={'/projects'}
                    className="text-lg font-montserratBold flex hover:underline hover:decoration-sky-900 hover:underline-offset-8 "
                >
                    ALL PROJECTS →
                </Link>
            </div>
            <h3 className="font-josefinSans text-xl">
                Here are a few of my most recent projects!
            </h3>
            {ProjectsData.slice(0, 3).map((project, index) => (
                <ProjectCard
                    key={index}
                    link={project.link}
                    projectName={project.projectName}
                    projectImg={project.projectImg}
                    techStack={project.techStack}
                    description={project.description}
                    techStackColors={TechStackColorMap}
                />
            ))}
        </section>
    );
}
