import './section.css';
import ProfilePicture from '../assets/profile.jpg';

export default function Section() {
    return (
        <div className="section-container">
            <div className="image-container">
                <img src={ProfilePicture} className="section-image" alt="Profile"></img>
            </div>
            <div className="text-container">
                <h2 className="section-title">About Me</h2>
                <p className="section-text">Placeholder text is the label for possible content in a text box. It can normally be found when there are prompts to fill out a form. It’s the hint that tells you ‘Last name’ or the format with which to enter your birthdate or phone number. Placeholder text typically exists as a hint to fill in actual text.</p>
            </div>
        </div>
    )
}