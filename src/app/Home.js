import Header from '../components/header';
import Hero from '../components/hero';
import Section from '../components/section';
import Toast from '../components/toast';
import Footer from '../components/footer';
import ProfilePicture from '../assets/profile.jpg';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Section
        image={ProfilePicture}
        title="About"
        text="Placeholder text is the label for possible content in a text box. It can normally be found when there are prompts to fill out a form. It’s the hint that tells you ‘Last name’ or the format with which to enter your birthdate or phone number. Placeholder text typically exists as a hint to fill in actual text."/>
      <Toast />
      <Footer />
    </div>
  );
}
