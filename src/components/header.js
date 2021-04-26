import './header.css'
import Signboard from '../assets/sign.svg';
import Title from '../assets/title.svg';

export default function Header() {
    return (
        <div className="header-container">
            <a href="https://github.com/vrevolverrr/portfolio" className="wip-signboard"><img src={Signboard} alt="wip-signboard"></img></a>
            <a href="/" className="page-title"><img src={Title} alt="title"></img></a>
            <a href="/blogs"><p className="header-nav-item">BLOGS</p></a>
            <a href="/projects"><p className="header-nav-item">PROJECTS</p></a>
            <a href="/contact"><p className="header-nav-item" style={{marginRight: "20px"}}>CONTACT</p></a>
        </div>
    )
}