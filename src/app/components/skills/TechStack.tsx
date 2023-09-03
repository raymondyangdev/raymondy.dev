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
            <p className="font-josefinSans text-lg">
                Praesent malesuada mi nisi, quis tempus magna venenatis ut.
                Suspendisse tempor sem at scelerisque congue. Curabitur mollis,
                mi id molestie finibus, metus sem sagittis nunc, euismod feugiat
                orci neque non lorem. Aenean sollicitudin erat eu molestie
                tempus. Nunc ac eros elementum, fermentum lacus at, pellentesque
                mauris. Suspendisse eros neque, interdum euismod consectetur
                convallis, porttitor at massa. Phasellus a ultrices arcu. Donec
                viverra, lorem in pellentesque euismod, libero justo gravida
                nibh, non ultricies justo purus ultrices est.
            </p>
            <div className="flex justify-between">
                <div className="mb-4 basis-72">
                    <TechStackImages
                        title={'Languages'}
                        skills={TechStackData.Languages}
                    />
                </div>

                <div className="mb-4 basis-72">
                    <TechStackImages
                        title={'Technologies'}
                        skills={TechStackData.Technologies}
                        titleIsCenter={true}
                    />
                </div>

                <div className="mb-4 basis-72">
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
