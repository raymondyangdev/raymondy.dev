import PageHeading from '../PageHeading';

type ITechStackProps = {
    skills: Array<{ src: string; alt: string }>;
    title: string;
    titleIsCenter?: boolean;
};

export default function TechStackImages(props: ITechStackProps) {
    return (
        <div
            className={`flex flex-col ${
                props.titleIsCenter ? 'items-center' : ''
            }`}
        >
            <PageHeading
                heading={props.title}
                size={'text-2xl'}
                margin={'my-4'}
            />
            <div className={`flex flex-wrap gap-2`}>
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
