import ProjectCard from '../components/projects/ProjectCard';
import {
    ProjectsData,
    TechStackColorMap,
} from '../components/projects/Projects';
import PageHeading from '../components/PageHeading';

export default function Projects() {
    return (
        <section className="px-10 h-full flex flex-col">
            <PageHeading
                heading={'Projects'}
                size={'text-3xl'}
                margin={'my-6'}
            />
            <p className="font-josefinSans text-lg">
                A list of projects that I have worked on recently!
            </p>

            <div className="flex flex-col">
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
            </div>
        </section>
    );
}
