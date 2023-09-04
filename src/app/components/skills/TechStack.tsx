import PageHeading from '../PageHeading';
import TechStackImages from './TechStackImages';

const TechStackData = {
    Languages: [
        {
            src: './assets/images/techstack/javascript.svg',
            alt: 'JavaScript Logo',
        },
        { src: './assets/images/techstack/java.svg', alt: 'Java Logo' },
        { src: './assets/images/techstack/html5.svg', alt: 'HTML5 Logo' },
        { src: './assets/images/techstack/css3.svg', alt: 'CSS3 Logo' },
        {
            src: './assets/images/techstack/typescript.svg',
            alt: 'TypeScript Logo',
        },
        { src: './assets/images/techstack/python.svg', alt: 'Python Logo' },
        { src: './assets/images/techstack/sqlite.svg', alt: 'SQLite Logo' },
    ],

    Technologies: [
        { src: './assets/images/techstack/react.svg', alt: 'React Logo' },
        { src: './assets/images/techstack/node.svg', alt: 'Node.js Logo' },
        { src: './assets/images/techstack/nextjs.svg', alt: 'Next.js Logo' },
        {
            src: './assets/images/techstack/express.svg',
            alt: 'Express.js Logo',
        },
        {
            src: './assets/images/techstack/cloudflare.svg',
            alt: 'Cloudflare Logo',
        },
        {
            src: './assets/images/techstack/tailwind.svg',
            alt: 'Tailwind.css Logo',
        },
        {
            src: './assets/images/techstack/bootstrap.svg',
            alt: 'Bootstrap Logo',
        },
    ],
    Tools: [
        { src: './assets/images/techstack/git.svg', alt: 'Git Logo' },
        { src: './assets/images/techstack/apple.svg', alt: 'Apple Logo' },
    ],
};

export default function Skills() {
    return (
        <div className="flex flex-col">
            <PageHeading heading={'Skills'} size={'text-3xl'} margin={'my-6'} />
            <div className="text-start md:text-justify font-josefinSans text-lg">
                {' '}
                <p>
                    I have a preference for statically typed languages,
                    appreciating their capacity for robustness and
                    predictability in software development.
                </p>
                <p>
                    Recently, I discovered a newfound passion for working with
                    React, particularly while building this website. Fuelled by
                    its component-based architecture, I am passionate about good
                    software design and writing clean, maintainable code.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="sm:mb-4 sm:basis-72">
                    <TechStackImages
                        title={'Languages'}
                        skills={TechStackData.Languages}
                    />
                </div>

                <div className="sm:mb-4 sm:basis-72">
                    <TechStackImages
                        title={'Technologies'}
                        skills={TechStackData.Technologies}
                        titleIsCenter={true}
                    />
                </div>

                <div className="sm:mb-4 sm:basis-72">
                    <TechStackImages
                        title={'Developer Tools'}
                        skills={TechStackData.Tools}
                        titleIsCenter={true}
                    />
                </div>
            </div>
        </div>
    );
}
