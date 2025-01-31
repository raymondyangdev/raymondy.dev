import './globals.css';
import type { Metadata } from 'next';
import { Pacifico, Josefin_Sans, Montserrat } from 'next/font/google';

// Component imports
import Navbar from './components/navigation/Navbar';
import Footer from './components/Footer';

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-pacifico',
});
const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    variable: '--font-josefinSans',
});
const montserratBold = Montserrat({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-montserratBold',
});

const montserratNormal = Montserrat({
    subsets: ['latin'],
    weight: '300',
    variable: '--font-montserratNormal',
});

export const metadata: Metadata = {
  title: "Raymond Yang | Software Engineer",
  description: "Portfolio Website for Raymond Yang",
  icons: {
    icon: "./assets/images/memoji.png",
  },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`flex h-screen flex-col w-full bg-slate-900 text-white ${pacifico.variable} ${josefinSans.variable} ${montserratBold.variable} ${montserratNormal.variable}`}
            >
                <Navbar />
                <main className="flex-1 container">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
