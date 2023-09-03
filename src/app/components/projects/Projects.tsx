import PageHeading from '../PageHeading';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import ProjectsData from './ProjectsData';

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
                    techStackColors={project.techStackColors}
                />
            ))}
        </section>
    );
}
