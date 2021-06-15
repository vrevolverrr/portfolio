import './css/header.css'
import Signboard from '../assets/sign.svg';
import Title from '../assets/title.svg';
import { showToast } from '../utils/toast-controller';
import ToggleSwitch from './toggle';

export default function Header() {

    return (
        <div className="header-container">
            <a href="https://github.com/vrevolverrr/portfolio" className="wip-signboard"><img src={Signboard} alt="wip-signboard"></img></a>
            <a href="/" className="page-title"><img src={Title} alt="Bryan Soong Logo"></img></a>
            <ToggleSwitch onClick={() => showToast("I'm sorry but that's not implemented yet")}/>
            <p onClick={() => document.querySelector(".projects-container").scrollIntoView({behavior: 'smooth', block: 'start'})} className="header-nav-item">PROJECTS</p>
            <p onClick={() => document.querySelector(".contact-container").scrollIntoView({behavior: 'smooth', block: 'end'})} className="header-nav-item">CONTACT</p>
            <p onClick={() => showToast("I'm sorry but that's not implemented yet")} className="header-nav-item" style={{marginRight: "20px"}}>BLOG</p>
        </div>
    )
}