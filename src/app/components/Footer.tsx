import Link from 'next/link';

export default function Footer() {
    const currentYear: number = displayYear();

    return (
        <footer className="bg-slate-800 py-4 flex">
            <div className="flex flex-col md:flex-row w-full justify-start gap-4 px-4 items-center">
                <div className="flex gap-4">
                    {' '}
                    <Link href={'https://github.com/raymondyangdev'}>
                        <img
                            className="w-8 h-8"
                            src="./assets/images/socials/github.svg"
                            alt="GitHub Logo"
                        />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/raymondyangdev/'}>
                        <img
                            className="w-8 h-8"
                            src="./assets/images/socials/linkedin-in.svg"
                            alt="LinkedIn Logo"
                        />
                    </Link>
                </div>
                <div className="flex whitespace-nowrap flex-1 gap-1 justify-center">
                    Made with<span className="text-red-400">♥</span>by
                    <Link
                        className="hover:underline hover:decoration-sky-900 hover:underline-offset-4"
                        href={'https://github.com/raymondyangdev'}
                    >
                        raymondyangdev
                    </Link>
                    <span> © {currentYear}</span>
                </div>
            </div>
        </footer>
    );
}

function displayYear(): number {
    return new Date().getFullYear();
}
