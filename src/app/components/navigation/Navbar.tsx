import Logo from './Logo';
import NavItems from './NavItems';
export default function Navbar() {
    return (
        <header className="bg-slate-900">
            <nav className="flex container justify-between py-4 text-2xl px-10">
                <Logo />
                <NavItems />
            </nav>
        </header>
    );
}
