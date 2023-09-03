import Link from 'next/link';

export default function Banner() {
    return (
        <div className="flex items-center justify-between my-4 h-72">
            <div className="flex flex-col">
                {' '}
                <h2 className="font-josefinSans text-4xl mb-2">
                    Hello, I'm{' '}
                    <span className="font-montserratBold text-cyan-500">
                        Raymond Yang
                    </span>{' '}
                    👋
                </h2>
                <div className="font-josefinSans mb-4 text-lg">
                    {' '}
                    <p>
                        Aspiring{' '}
                        <span className="text-cyan-500 font-montserratBold">
                            Software Engineer
                        </span>{' '}
                        &
                    </p>{' '}
                    <p>
                        <span className="text-cyan-500 font-montserratBold">
                            Computer Science
                        </span>{' '}
                        Student @ University of Auckland
                    </p>
                </div>
                <div className="flex gap-4 mt-3">
                    <Link href={'https://github.com/raymondyangdev'}>
                        <img
                            className="w-10 h-10 hover:-translate-y-1"
                            src="./assets/images/socials/github.svg"
                            alt="GitHub Logo"
                        />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/raymondyangdev/'}>
                        <img
                            className="w-10 h-10 hover:-translate-y-1"
                            src="./assets/images/socials/linkedin-in.svg"
                            alt="LinkedIn Logo"
                        />
                    </Link>
                    <Link href={'./assets/RaymondYang-CV.pdf/'}>
                        <img
                            className="w-10 h-10 hover:-translate-y-1"
                            src="./assets/images/resume-icon.svg"
                            alt="CV/Resume Icon"
                        />
                    </Link>
                </div>
            </div>
            <img
                className="w-52 h-52 rounded-full object-cover border-white border-4"
                src="./assets/images/banner/banner-photo.JPG"
                alt="Raymond Yang"
            />
        </div>
    );
}
