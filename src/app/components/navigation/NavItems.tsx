import Link from 'next/link';

export default function NavItems() {
    const navbarLinks = [
        {
            label: 'Projects',
            route: '/projects',
            class: 'hover:underline hover:decoration-sky-900 hover:underline-offset-8',
        },
        {
            label: 'Blog',
            route: '/blog',
            class: 'hover:underline hover:decoration-sky-900 hover:underline-offset-8',
        },
        {
            label: 'GitHub',
            route: 'https://github.com/raymondyangdev',
            class: 'hover:underline hover:decoration-sky-900 hover:underline-offset-8',
        },
    ];

    return (
        <div className="flex gap-10 font-montserrat">
            {navbarLinks.map((link) => (
                <Link key={link.route} href={link.route} className={link.class}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
