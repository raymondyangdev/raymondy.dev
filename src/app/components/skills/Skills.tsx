import PageHeading from '../PageHeading';
import TechStackImages from './TechStackImages';
import TechStackData from './TechStackData';

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
