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
import { showToast } from '../utils/toast-controller';
import ContactSection from '../components/contact-section';

export default function Home() {
  document.addEventListener('DOMContentLoaded', () => showToast("While this page is designed to be responsive, it is best viewed on a dekstop"));

  return (
    <div className="Home">
      <Header />
      <Hero />
      <AboutSection />
      <StackSection />
      <SkillsetSection />
      <ProjectsSection />
      <ContactSection />
      <Toast />
      <Footer />
    </div>
  );
}
