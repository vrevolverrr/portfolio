import './css/projects-section.css';
import Project1Picture from '../assets/mysj.jpg';
import Project from './project';

export default function ProjectsSection() {
    return (
        <div className="section-container projects-container">
            <h2 className="section-title" style={{paddingTop: "50px", paddingBottom: "50px"}}>Projects</h2>
            <Project 
            title="Pandemic App Concept"
            description="While the COVID-19 pandemic has greatly affected our lives, the consequences are undeniably less
            tragic than the other pandemics that happened in the past due to the advancements of technology. A good pandemic app should not only be
            functional but must also be extremely user friendly to entice users of all demographics. That is why I created this app in Flutter, to
            show that it is possible to create a beautiful yet functional app."
            referenceIcons={[
                <a href="https://github.com/vrevolverrr/mysejahtera" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon github" strokeWidth="0" fill="#575757" viewBox="0 0 496 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>,
                <a href="https://www.instagram.com/p/CP5rTwbMcbJ/" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon instagram" strokeWidth="0" fill="#575757" viewBox="0 0 448 512" fisize="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
            ]}
            stackIcons={[
                <a href="https://flutter.dev/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="flutter" viewBox="0 0 1999 2474.2"><path d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381" fill="#42a5f5"></path><path d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3" fill="#0d47a1"></path><path d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z" fill="#42a5f5"></path><path d="m952 2188.5 380.4-380.4 53.1 53.1-380.4 380.4z" fill="url(#a)"></path><path d="m951.7 2188.8 565.3-195.3-184.3-185.7" fill="url(#b)"></path></svg></a>,
                <a href="https://dart.dev/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="dart" viewBox="0 0 256 256"><g><path d="M70.534,69.696 L53.988,53.15 L54.058,172.75 L54.256,178.34 C54.338,180.97 54.826,183.938 55.64,187.014 L186.744,233.244 L219.516,218.724 L219.528,218.684 L70.534,69.696" fill="#00D2B8"></path><path d="M55.64,187.014 L55.648,187.022 C55.64,186.968 55.612,186.908 55.612,186.852 C55.612,186.908 55.62,186.96 55.64,187.014 L55.64,187.014 Z M219.516,218.724 L186.744,233.244 L55.648,187.022 C58.152,196.63 63.696,207.43 69.662,213.336 L112.446,255.876 L207.576,256 L219.528,218.684 L219.516,218.724 L219.516,218.724 Z" fill="#55DDCA"></path><path d="M3.034,130.116 C-1.202,134.638 0.902,143.966 7.722,150.838 L37.14,180.5 L55.64,187.014 C54.826,183.938 54.338,180.97 54.256,178.34 L54.058,172.75 L53.988,53.15 L3.034,130.116 Z" fill="#0081C6"></path><path d="M187.82,54.686 C184.744,53.9 181.794,53.414 179.12,53.33 L173.212,53.126 L53.988,53.142 L219.544,218.684 L219.558,218.684 L234.098,185.88 L187.82,54.686" fill="#0079B3"></path><path d="M187.67,54.654 C187.734,54.668 187.784,54.686 187.826,54.692 L187.82,54.686 C187.784,54.668 187.734,54.668 187.67,54.654 L187.67,54.654 Z M214.118,68.732 C208.11,62.674 197.452,57.168 187.826,54.692 L234.098,185.88 L219.558,218.684 L219.544,218.684 L255.076,207.336 L255.152,109.92 L214.118,68.732 L214.118,68.732 Z" fill="#00A4E4"></path><path d="M181.338,36.298 L151.684,6.862 C144.826,0.068 135.494,-2.046 130.984,2.178 L53.988,53.142 L173.212,53.126 L179.12,53.33 C181.794,53.414 184.744,53.9 187.82,54.686 L181.338,36.298 L181.338,36.298 Z" fill="#00D2B8"></path></g></svg></a>
            ]}
            showcase={Project1Picture}
            />
        </div>
    );
}