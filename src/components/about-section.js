import './css/about-section.css';
import Section from './section';
import ProfilePicture from '../assets/profile.jpg';

export default function AboutSection() {
    
    return (
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
            I am currently interested in freelance work. Feel free to contact me 
            <span onClick={() => 
                document.querySelector(".contact-container").scrollIntoView({behavior: 'smooth', block: 'end'})} 
            style={{ color: "#035c69d8", cursor: "pointer" }}> here
            </span> for enquiries.
        </p>}/>
    );
}