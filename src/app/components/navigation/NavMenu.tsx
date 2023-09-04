'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavItems() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
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
        <>
            <div className="md:flex gap-10 font-montserratBold mx-4 md:mx-0 hidden md:visible">
                {navbarLinks.map((link) => (
                    <Link
                        key={link.route}
                        href={link.route}
                        className={link.class}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
                <img
                    src={
                        isOpen
                            ? './assets/images/close-menu.svg'
                            : './assets/images/hamburger-menu.svg'
                    }
                    alt="Hamburger Menu/Close Icon"
                    className={`w-6 h-6 order-last`}
                />
            </button>

            {isOpen && (
                <div className="basis-full flex items-center gap-2 flex-col mt-4 text-md font-montserratBold text-xl">
                    {navbarLinks.map((link) => (
                        <Link
                            key={link.route}
                            href={link.route}
                            className={`${link.class}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
