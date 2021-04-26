import './hero.css';
import Earth from '../assets/earth.svg';
import { useState } from 'react';

export default function Hero() {
    
    const languages = ["Hello", "您好", "안녕"]
    const [lang, setLang] = useState(0);

    // setInterval(() => setLang((lang + 1) % languages.length), 1000);

    return (
        <div className="hero-container">
            <div className="hero-intro-container">
                <h2 className="hero-intro-title">{languages[lang]}.</h2>
                <p className="hero-intro-text">I am Bryan Soong, a self-taught passionate hobbyist programmer. I like to innovate and create new things! I hope to one day change the world for the better.</p>
            </div>
            <img src={Earth} className="hero-earth" alt="earth"></img>
        </div>
    )
}