import Logo from './Logo';
import NavItems from './NavItems';
export default function Navbar() {
    return (
        <nav className="flex justify-between py-8 text-2xl">
            <Logo />
            <NavItems />
        </nav>
    );
}
