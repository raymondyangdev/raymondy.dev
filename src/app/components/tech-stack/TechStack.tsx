import PageHeadings from '../PageHeading';

type ITechStackProps = {
    skills: Array<{ src: string; alt: string }>;
};

export default function TechStack(props: ITechStackProps) {
    return (
        <div className="flex flex-col">
            <PageHeadings heading={'Tech Stack'} />
            <div className="flex">
                {props.skills.map((skills, index) => (
                    <img
                        className="w-16 h-16"
                        key={index}
                        src={skills.src}
                        alt={skills.alt}
                    />
                ))}
            </div>
        </div>
    );
}
