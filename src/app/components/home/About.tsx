import PageHeading from '../PageHeading';

export default function About() {
    return (
        <div className="font-josefinSans text-lg text-justify">
            <PageHeading heading={'About'} margin={'my-6'} size={'text-3xl'} />
            <p>
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
        </div>
    );
}
