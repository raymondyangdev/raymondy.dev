import Banner from './components/home/Banner';
import TechStack from './components/skills/TechStack';
import Projects from './components/projects/Projects';

export default function Home() {
    return (
        <section className="px-10">
            <Banner />
            <TechStack />
            <Projects />
        </section>
    );
}
