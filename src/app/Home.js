/* CSS*/
import './Home.css';

/* Components */
import Header from '../components/header';
import Hero from '../components/hero';
import AboutSection from '../components/about-section';
import StackSection from '../components/stack-section';
import SkillsetSection from '../components/skillset-section';
import Footer from '../components/footer';
import Toast from '../components/toast';
import ProjectsSection from '../components/projects-section';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <AboutSection />
      <StackSection />
      <SkillsetSection />
      <ProjectsSection />
      <Toast />
      <Footer />
    </div>
  );
}
