import './skillset-section.css';
import PhonePicture from '../assets/phone.svg';

export default function SkillsetSection() {
    return (
        <div className="section-container skillset-container">
            <h2 className="section-title">My Skill Set</h2>
            <div className="item-container">
                <img className="side-picture" src={PhonePicture} alt="phone"></img>
                <div className="item-content-container">
                    <h2 className="item-title">Mobile Development</h2>
                    <p className="item-text">I love creating beautiful apps for mobile devices. My favourite framework for mobile development is <span className="hyperlink-span"><a href="https://flutter.dev/" target="_blank" rel="noreferrer">Flutter</a></span>. I am also familiar with Android native development using Kotlin and Java.</p>
                </div>
            </div>
        </div>
    );
}