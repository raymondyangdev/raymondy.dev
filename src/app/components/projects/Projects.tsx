import PageHeading from '../PageHeading';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export type ITechStackColor = {
    [key: string]: string;
};

const TechStackColorMap: ITechStackColor = {
    React: 'bg-blue-400 text-blue-900',
    TypeScript: 'bg-sky-500 text-sky-900',
    'Tailwind CSS': 'bg-cyan-400 text-cyan-900',
    'Next.js': 'bg-neutral-900 text-white',
    JavaScript: 'bg-yellow-400 text-yellow-900',
    'Express.js': 'bg-white text-neutral-900',
    Java: 'bg-orange-400 text-orange-900',
};

const ProjectsData = [
    {
        projectName: 'raymondyang.io',
        description: 'This website',
        link: 'https://github.com/raymondyangdev',
        projectImg: 'https://avatars.githubusercontent.com/u/88478402?v=4',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
        techStackColors: {
            React: TechStackColorMap.React,
            TypeScript: TechStackColorMap.TypeScript,
            'Tailwind CSS': TechStackColorMap['Tailwind CSS'],
        },
    },
    {
        projectName: 'Wanderlust Wanderers',
        description: 'This website',
        link: 'https://github.com/raymondyangdev',
        projectImg: 'https://avatars.githubusercontent.com/u/88478402?v=4',
        techStack: ['JavaScript', 'Tailwind CSS', 'Express.js'],
        techStackColors: {
            JavaScript: TechStackColorMap.JavaScript,
            'Tailwind CSS': TechStackColorMap['Tailwind CSS'],
            'Express.js': TechStackColorMap['Express.js'],
        },
    },
    {
        projectName: 'Bulls and Cows',
        description: 'This website',
        link: 'https://github.com/raymondyangdev',
        projectImg: 'https://avatars.githubusercontent.com/u/88478402?v=4',
        techStack: ['Java'],
        techStackColors: {
            Java: TechStackColorMap.Java,
        },
    },
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
                    className="text-lg font-montserrat flex hover:underline hover:decoration-sky-900 hover:underline-offset-8 "
                >
                    ALL PROJECTS →
                </Link>
            </div>
            <h3 className="font-josefinSans text-xl">
                Here are a few of my most recent projects!
            </h3>
            {ProjectsData.map((project, index) => (
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
