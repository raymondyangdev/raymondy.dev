import Logo from './Logo';
import NavItems from './NavMenu';

export default function Navbar() {
    return (
        <header className="bg-slate-900 sticky top-0 z-20 border-slate-800 border-b-2">
            <nav className="flex md:flex-row container flex-wrap justify-between items-center py-4 text-2xl px-10">
                <Logo />
                <NavItems />
            </nav>
        </header>
    );
}
