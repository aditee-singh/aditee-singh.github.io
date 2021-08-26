import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Publications from '../components/Publications/Publications';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Experience />
      <Projects />
      <Publications />
      <Technologies />
    </Layout>
  );
};

export default Home;
