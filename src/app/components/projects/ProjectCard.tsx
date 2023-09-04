import Link from 'next/link';
import { ITechStackColor } from './Projects';

type IProjectCardProps = {
    projectName: string;
    description: string;
    projectImg: string;
    link: string;
    techStack: string[];
    techStackColors: ITechStackColor;
};

export default function ProjectCard(props: IProjectCardProps) {
    return (
        <div className="bg-slate-700 my-4 p-4 rounded-xl flex flex-col md:flex-row">
            <img
                className="w-36 h-36 rounded-xl self-center"
                src={props.projectImg}
                alt={`${props.projectName} Screenshot`}
            />
            <div className="flex flex-col flex-1 mx-4">
                <div className="flex flex-col md:flex-row items-center">
                    <h2 className="font-montserratBold text-xl py-1 mr-2">
                        {props.projectName}
                    </h2>
                    <div className="flex">
                        {' '}
                        {props.techStack.map((tech, index) => (
                            <div
                                key={index}
                                className={`rounded-md px-2 mx-1 py-1 text-xs whitespace-nowrap font-semibold ${props.techStackColors[tech]}`}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                <p className="flex-1 font-montserratNormal text-md mt-2 text-justify ">
                    {props.description}
                </p>
            </div>
            <Link
                className="self-center px-4 hover:border-b-2 hover:border-sky-700 pb-2"
                href={props.link}
            >
                <img
                    className="w-12 hover:-translate-y-1 mt-4 md:mt-0"
                    src="./assets/images/link-solid.svg"
                    alt="Link to repo"
                />
            </Link>
        </div>
    );
}
