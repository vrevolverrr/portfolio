import './Home.css';
import Header from '../components/header';
import Hero from '../components/hero';
import Section from '../components/section';
import Toast from '../components/toast';
import Footer from '../components/footer';
import StackSection from '../components/stack-section';
import ProfilePicture from '../assets/profile.jpg';
import SkillsetSection from '../components/skillset-section';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Section
        image={<img src={ProfilePicture} className="profile-image" alt="section"></img>}
        title="About Me"
        content={<p>
        Hi there! My name is Soong Jun Shen. I am 18 this year.
        I taught myself coding and designing since young due to a deep passion in technology.
        <br /><br />
        My dream is to improve how humans interact 
        with technology to so that we can utilize technology to its utmost potential.
        <br /><br />
        I am currently interested in freelance work. Feel free to contact me <span className="hyperlink-span"><a href="#">here</a></span> for enquiries.
        </p>}/>
      <StackSection />
      <SkillsetSection />
      <Toast />
      <Footer />
    </div>
  );
}
