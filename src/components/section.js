import './section.css';
import ProfilePicture from '../assets/profile.jpg';

export default function Section(props) {
    return (
        <div className="section-container">
            <div className="image-container">
                <img src={props.image} className="section-image" alt="section-1"></img>
            </div>
            <div className="text-container">
                <h2 className="section-title">{props.title}</h2>
                <p className="section-text">{props.text}</p>
            </div>
        </div>
    )
}