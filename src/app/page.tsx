import Banner from './components/home/Banner';
import About from './components/home/About';
import TechStack from './components/skills/TechStack';
import Projects from './components/projects/Projects';

export default function Home() {
    return (
        <section className="px-10">
            <Banner />
            <About />
            <TechStack />
            <Projects />
        </section>
    );
}
