import './css/projects-section.css';
import Project1Picture from '../assets/mysj.jpg';
import Project2Picture from '../assets/chromerpc.jpg';
import Project from './project';

export default function ProjectsSection() {
    return (
        <div className="section-container projects-container">
            <h2 className="section-title" style={{paddingTop: "50px", paddingBottom: "50px"}}>Projects</h2>
            <Project
            title="Pandemic App Concept"
            description="While the COVID-19 pandemic has greatly affected our lives, its impact towards our lives is far less 
            tragic than previous pandemics due to the advancements in technology. A good pandemic app should not only be 
            functional but must also be extremely user friendly to entice users of all demographics. That is why I 
            created this app in Flutter, to show that it is possible to create a beautiful yet functional app."
            referenceIcons={[
                <a title="GitHub Repo" href="https://github.com/vrevolverrr/mysejahtera" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon github" strokeWidth="0" fill="#575757" viewBox="0 0 496 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>,
                <a title="Instagram Post" href="https://www.instagram.com/p/CP5rTwbMcbJ/" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon instagram" strokeWidth="0" fill="#575757" viewBox="0 0 448 512" fisize="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
            ]}
            stackIcons={[
                <a title="Flutter" href="https://flutter.dev/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="flutter" viewBox="0 0 1999 2474.2"><path d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381" fill="#42a5f5"></path><path d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3" fill="#0d47a1"></path><path d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z" fill="#42a5f5"></path><path d="m952 2188.5 380.4-380.4 53.1 53.1-380.4 380.4z" fill="url(#a)"></path><path d="m951.7 2188.8 565.3-195.3-184.3-185.7" fill="url(#b)"></path></svg></a>,
                <a title="Dart" href="https://dart.dev/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="dart" viewBox="0 0 256 256"><g><path d="M70.534,69.696 L53.988,53.15 L54.058,172.75 L54.256,178.34 C54.338,180.97 54.826,183.938 55.64,187.014 L186.744,233.244 L219.516,218.724 L219.528,218.684 L70.534,69.696" fill="#00D2B8"></path><path d="M55.64,187.014 L55.648,187.022 C55.64,186.968 55.612,186.908 55.612,186.852 C55.612,186.908 55.62,186.96 55.64,187.014 L55.64,187.014 Z M219.516,218.724 L186.744,233.244 L55.648,187.022 C58.152,196.63 63.696,207.43 69.662,213.336 L112.446,255.876 L207.576,256 L219.528,218.684 L219.516,218.724 L219.516,218.724 Z" fill="#55DDCA"></path><path d="M3.034,130.116 C-1.202,134.638 0.902,143.966 7.722,150.838 L37.14,180.5 L55.64,187.014 C54.826,183.938 54.338,180.97 54.256,178.34 L54.058,172.75 L53.988,53.15 L3.034,130.116 Z" fill="#0081C6"></path><path d="M187.82,54.686 C184.744,53.9 181.794,53.414 179.12,53.33 L173.212,53.126 L53.988,53.142 L219.544,218.684 L219.558,218.684 L234.098,185.88 L187.82,54.686" fill="#0079B3"></path><path d="M187.67,54.654 C187.734,54.668 187.784,54.686 187.826,54.692 L187.82,54.686 C187.784,54.668 187.734,54.668 187.67,54.654 L187.67,54.654 Z M214.118,68.732 C208.11,62.674 197.452,57.168 187.826,54.692 L234.098,185.88 L219.558,218.684 L219.544,218.684 L255.076,207.336 L255.152,109.92 L214.118,68.732 L214.118,68.732 Z" fill="#00A4E4"></path><path d="M181.338,36.298 L151.684,6.862 C144.826,0.068 135.494,-2.046 130.984,2.178 L53.988,53.142 L173.212,53.126 L179.12,53.33 C181.794,53.414 184.744,53.9 187.82,54.686 L181.338,36.298 L181.338,36.298 Z" fill="#00D2B8"></path></g></svg></a>
            ]}
            showcase={Project1Picture}
            />
            <Project
            title="Chrome Discord Presence"
            description="Ever wanted to show your browsing activity on one of the most widely used digital distribution platform? 
            This project takes advantage of the Discord Rich Presence API in combination with a Google Chrome extension to make that happen! 
            It displays a customised status for up to 15 websites and shows a generic status for everything else."
            referenceIcons={[
                <a title="GitHub Repo" href="https://github.com/vrevolverrr/chrome-discord-presence" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon github" strokeWidth="0" fill="#575757" viewBox="0 0 496 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>
            ]}
            stackIcons={[
                <a title="JavaScript" href="https://www.javascript.com/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="javascript" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg></a>,
                <a title="Python" href="https://www.python.org/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="python" viewBox="0 0 448 512"><path fill="#366994" d="M167.8 36.4c-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1zm-6.7 28.4c11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4zm185.2 81.4v47.5c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6-7.7-30.9-22.3-54.2-53.4-54.2h-40.1zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3z"></path></svg></a>,
            ]}
            showcase={Project2Picture}
            />
        </div>
    );
}