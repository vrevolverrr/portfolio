import './css/skillset-section.css';
import PhonePicture from '../assets/phone.svg';
import DesktopPicture from '../assets/net.svg';
import BulbPicture from '../assets/bulb.svg';
import BrainPicture from '../assets/brain.svg';

export default function SkillsetSection() {
    return (
        <div className="section-container skillset-container">
            <h2 className="section-title" style={{paddingTop: "50px", paddingBottom: "50px"}}>My Skill Set</h2>
            <div className="item-container">
                <img className="side-picture" src={PhonePicture} alt="phone"></img>
                <div className="item-content-container">
                    <h2 className="item-title">Mobile Development</h2>
                    <p className="item-text">I love creating beautiful apps for mobile devices. My favourite framework for mobile development is <span className="hyperlink-span"><a href="https://flutter.dev/" target="_blank" rel="noreferrer">Flutter</a></span>. I am also familiar with Android native development using Kotlin and Java.</p>
                </div>
            </div>
            <div className="item-container">
                <img className="side-picture" src={DesktopPicture} alt="phone"></img>
                <div className="item-content-container">
                    <h2 className="item-title">Web Development</h2>
                    <p className="item-text">I enjoy create responsive and engaging websites by leveraging the power of modern frameworks and libraries such as React JS.</p>
                </div>
            </div>
            <div className="item-container">
                <img className="side-picture" src={BulbPicture} alt="phone"></img>
                <div className="item-content-container">
                    <h2 className="item-title">Graphic Design</h2>
                    <p className="item-text">I like to create photorealistic 3D renders in Blender using its Cycles engine. On top of that, I also use Adobe Photoshop and Illustrator for 2D designing work.</p>
                </div>
            </div>
            <div className="item-container">
                <img className="side-picture" src={BrainPicture} alt="phone"></img>
                <div className="item-content-container">
                    <h2 className="item-title">Machine Learning</h2>
                    <p className="item-text">I love learning, that is why I often read up about machine learning and it never fails to fascinate me. I have also played around in Tensorflow and several natural language processing toolkits.</p>
                </div>
            </div>
        </div>
    );
}