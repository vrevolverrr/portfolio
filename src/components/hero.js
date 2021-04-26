import './hero.css';
import TextLoop from "react-text-loop";
import Earth from '../assets/earth.svg';

export default function Hero() {
    
    const languages = ["Hello", "您好"]

    return (
        <div className="hero-container">
            <div className="hero-intro-container">
                <h2 className="hero-intro-title"><TextLoop children={languages}></TextLoop>.</h2>
                <p className="hero-intro-text">I am Bryan Soong, a self-taught passionate hobbyist programmer. I like to innovate and create new things! I hope to one day change the world for the better.</p>
            </div>
            <img src={Earth} className="hero-earth" alt="earth"></img>
        </div>
    )
}