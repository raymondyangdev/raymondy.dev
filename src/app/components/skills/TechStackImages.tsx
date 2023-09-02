import PageHeading from '../PageHeading';

type ITechStackProps = {
    skills: Array<{ src: string; alt: string }>;
    title: string;
};

export default function TechStackImages(props: ITechStackProps) {
    return (
        <div className="flex flex-col">
            <PageHeading heading={props.title} size={'2xl'} margin={4} />
            <div className="flex flex-wrap gap-2 items-center">
                {props.skills.map((skill, index) => (
                    <img
                        className="w-16 h-16"
                        key={index}
                        src={skill.src}
                        alt={skill.alt}
                    />
                ))}
            </div>
        </div>
    );
}
