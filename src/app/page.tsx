import Banner from './components/home/Banner';
import About from './components/home/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

export default function Home() {
    return (
        <section className="px-10">
            <Banner />
            <About />
            <Skills />
            <Projects />
        </section>
    );
}
