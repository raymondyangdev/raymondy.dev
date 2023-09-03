import Link from 'next/link';

type ITechStackColor = {
    React?: string;
    TypeScript?: string;
    'Tailwind CSS'?: string;
    'Next.js'?: string;
    JavaScript?: string;
    'Express.js'?: string;
    Java?: string;
};

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
        <div className="bg-slate-700 mb-8 my-4 p-4 h-36 rounded-xl flex">
            <img
                className="w-36 rounded-xl"
                src={props.projectImg}
                alt={`${props.projectName} Screenshot`}
            />
            <div className="flex flex-col flex-1 mx-4">
                <div className="flex items-center">
                    <h2 className="font-montserrat text-xl py-1 mr-2">
                        {props.projectName}
                    </h2>
                    {props.techStack.map((tech, index) => (
                        <div
                            key={index}
                            className={`rounded-md px-2 mx-1 py-1 text-xs font-semibold ${
                                props.techStackColors[
                                    tech as keyof ITechStackColor
                                ] ?? ''
                            }`}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
                <p className="flex-1 font-josefinSans text-lg mt-2">
                    {props.description}
                </p>
            </div>
            <Link
                className="self-center px-4 hover:border-b-2 hover:border-sky-700 pb-2"
                href={props.link}
            >
                <img
                    className="w-12 hover:-translate-y-1"
                    src="./assets/images/link-solid.svg"
                    alt="Link to repo"
                />
            </Link>
        </div>
    );
}
