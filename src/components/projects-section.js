import './css/projects-section.css';
import MysteryShackProject from '../assets/mysteryshack.jpg';
import CarbonZeroProject from '../assets/carbonzeroproject.jpg';
import MarketConnectProject from '../assets/marketconnect.png';
import MySJProject from '../assets/mysj.jpg';
import ChromeRPCProject from '../assets/chromerpc.jpg';
import McDonaldsProject from '../assets/mcdonalds.png';
import TeachablePyProject from '../assets/teachablepy.jpg'
import BadgesProject from '../assets/badges.jpg';
import Project from './project';

export default function ProjectsSection() {
    return (
        <div className="section-container projects-container">
            <h2 className="section-title" style={{paddingTop: "50px", paddingBottom: "50px"}}>Projects</h2>
            <Project
            title="Mystery Shack Cycles Render"
            description="Mystery shack from gravity falls made in blender 3 rendered with the Cycles engine, gravity falls has been one of my favourite childhood 
            cartoons of all time which inspired this render."
            referenceIcons={[
                <a title="Google Drive" href="https://drive.google.com/drive/folders/1eyxrdocHmWfedElZmI7eSknlf6p7wWcr?usp=sharing" target="_blank" rel="noreferrer">
                       <svg className="project-reference-icon" viewBox="0 0 32 32"><path fill="#537ABD" d="M31.868 21h-22l-5 9h21.688" /><path fill="#2EB672" d="M10.962 2l-11 18 5 10 10.721-19.655" /><path fill="#FED14B" d="M20.962 2h-10l10.75 19h10.25l-11-19" /></svg>
                </a>
            ]}
            stackIcons={[
                <a title="Blender" href="https://www.blender.org/foundation/" target="_blank" rel="noreferrer"><svg style={{position: "relative", top: "-6px"}} className="stack-used-icon" alt="blender" viewBox="0 0 181 148" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit={2}><path d="M68.296 82.919c.643-11.472 6.251-21.608 14.749-28.77 8.315-7.041 19.483-11.35 31.744-11.35 12.2 0 23.368 4.303 31.683 11.35 8.498 7.162 14.082 17.298 14.75 28.77.643 11.775-4.098 22.76-12.383 30.894-8.497 8.255-20.515 13.474-34.05 13.474s-25.614-5.183-34.05-13.474c-8.316-8.133-13.05-19.059-12.383-30.834z" fillRule="nonzero" fill="#fff"/><g fillRule="nonzero"><path d="M93.726 81.514c.33-5.895 3.213-11.104 7.58-14.785 4.273-3.618 10.012-5.833 16.313-5.833 6.269 0 12.008 2.212 16.281 5.833 4.367 3.68 7.237 8.89 7.58 14.785.33 6.05-2.106 11.696-6.363 15.876-4.367 4.242-10.543 6.924-17.498 6.924s-13.163-2.663-17.499-6.924c-4.273-4.18-6.706-9.794-6.363-15.845z" fill="#265787"/><path d="M56.297 93.99c.04 2.308.777 6.8 1.88 10.293 2.322 7.423 6.27 14.286 11.729 20.305 5.614 6.207 12.539 11.198 20.523 14.754 8.39 3.711 17.499 5.614 26.95 5.614 9.45-.012 18.558-1.946 26.948-5.708 7.985-3.587 14.91-8.577 20.524-14.816 5.49-6.082 9.42-12.944 11.728-20.367a51.458 51.458 0 002.205-11.354c.29-3.743.169-7.517-.365-11.291-1.042-7.33-3.587-14.223-7.486-20.461-3.555-5.77-8.172-10.792-13.661-15.034l.012-.01-55.208-42.42c-.05-.037-.09-.077-.143-.112C98.314.601 92.2.61 88.24 3.4c-4.024 2.82-4.492 7.486-.905 10.418l-.015.015 23.05 18.746-70.18.075h-.094c-5.801.006-11.384 3.805-12.476 8.64-1.135 4.897 2.807 8.983 8.858 8.983l-.009.022 35.558-.069-63.63 48.658c-.081.06-.168.122-.243.18-5.989 4.586-7.923 12.228-4.149 17.031 3.837 4.897 11.978 4.928 18.029.028l34.622-28.384s-.505 3.837-.465 6.114zm89.206 12.82c-7.142 7.267-17.155 11.415-27.947 11.415-10.823.02-20.835-4.054-27.978-11.322-3.493-3.556-6.051-7.61-7.642-11.946a31.054 31.054 0 01-1.753-13.35 31.324 31.324 0 013.837-12.57c2.083-3.774 4.959-7.205 8.484-10.106 6.955-5.645 15.782-8.733 25.015-8.733 9.264-.013 18.09 3.022 25.046 8.67 3.525 2.883 6.394 6.302 8.484 10.076a31.125 31.125 0 013.837 12.57 31.153 31.153 0 01-1.76 13.35c-1.584 4.366-4.148 8.42-7.641 11.977z" fill="#ea7600"/></g></svg></a>,
            ]}
            showcase={MysteryShackProject}
            />
            <Project
            title="Project Carbon Zero"
            description="Project Carbon Zero is a social initiative done as part of my college's service learning project to 
            raise awareness on carbon footprint and environmental care. This project was my first attempt in using Next.JS with React."
            referenceIcons={[
                <a title="GitHub Repo" href="https://github.com/vrevolverrr/service-learning" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon" strokeWidth="0" fill="#575757" viewBox="0 0 496 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>,
                <a title="External Website" href="https://carbonzero.vercel.app/" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon"  xmlns="http://www.w3.org/2000/svg" fill="#575757" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                </a>,
            ]}
            stackIcons={[
                <a title="React" href="https://reactjs.org/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="reactjs" viewBox="0 0 256 228"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345c.522 2.107.986 4.173 1.386 6.193zM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94zM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18zM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3zM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86z" fill="#00D8FF"></path></svg></a>,
                <a title="Javascript" href="https://reactjs.org/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="javascript" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg></a>,
                <a title="CSS3" href="https://reactjs.org/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="css3" viewBox="0 0 128 128"><path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154"></path><path fill="#1572B6" d="M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z"></path></svg></a>,
                <a title="HTML5" href="https://reactjs.org/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="html5" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499 8.096-90.102h-88.862zm72.041 20.471l-.507 5.834-.223 2.695h-42.569l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69-22.79 6.134v-.005l-.027.012-22.777-5.916-1.546-17.055h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649 1.296-13.728h-38.555l-2.734-30.836-.267-3.164h55.724000000000004l-.266 2.471zM27.956 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.738 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.777 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.513 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path></svg></a>,
            ]}
            showcase={CarbonZeroProject}
            />
            <Project
            title="Market Connect"
            description="MarketConnect is a social platform to connect small businesses who are unable to transition to 
            the online market during the pandemic era with potential customers nearby. This project was done as part of 
            the Young Malaysian Engineers (YME) Hackathon 2021 and was ranked 4th out of 24 teams."
            referenceIcons={[
                <a title="GitHub Repo" href="https://github.com/vrevolverrr/MarketConnect" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon" strokeWidth="0" fill="#575757" viewBox="0 0 496 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>,
            ]}
            stackIcons={[
                <a title="Flutter" href="https://flutter.dev/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="flutter" viewBox="0 0 1999 2474.2"><path d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381" fill="#42a5f5"></path><path d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3" fill="#0d47a1"></path><path d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z" fill="#42a5f5"></path><path d="m952 2188.5 380.4-380.4 53.1 53.1-380.4 380.4z" fill="url(#a)"></path><path d="m951.7 2188.8 565.3-195.3-184.3-185.7" fill="url(#b)"></path></svg></a>,
                <a title="Dart" href="https://dart.dev/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="dart" viewBox="0 0 256 256"><g><path d="M70.534,69.696 L53.988,53.15 L54.058,172.75 L54.256,178.34 C54.338,180.97 54.826,183.938 55.64,187.014 L186.744,233.244 L219.516,218.724 L219.528,218.684 L70.534,69.696" fill="#00D2B8"></path><path d="M55.64,187.014 L55.648,187.022 C55.64,186.968 55.612,186.908 55.612,186.852 C55.612,186.908 55.62,186.96 55.64,187.014 L55.64,187.014 Z M219.516,218.724 L186.744,233.244 L55.648,187.022 C58.152,196.63 63.696,207.43 69.662,213.336 L112.446,255.876 L207.576,256 L219.528,218.684 L219.516,218.724 L219.516,218.724 Z" fill="#55DDCA"></path><path d="M3.034,130.116 C-1.202,134.638 0.902,143.966 7.722,150.838 L37.14,180.5 L55.64,187.014 C54.826,183.938 54.338,180.97 54.256,178.34 L54.058,172.75 L53.988,53.15 L3.034,130.116 Z" fill="#0081C6"></path><path d="M187.82,54.686 C184.744,53.9 181.794,53.414 179.12,53.33 L173.212,53.126 L53.988,53.142 L219.544,218.684 L219.558,218.684 L234.098,185.88 L187.82,54.686" fill="#0079B3"></path><path d="M187.67,54.654 C187.734,54.668 187.784,54.686 187.826,54.692 L187.82,54.686 C187.784,54.668 187.734,54.668 187.67,54.654 L187.67,54.654 Z M214.118,68.732 C208.11,62.674 197.452,57.168 187.826,54.692 L234.098,185.88 L219.558,218.684 L219.544,218.684 L255.076,207.336 L255.152,109.92 L214.118,68.732 L214.118,68.732 Z" fill="#00A4E4"></path><path d="M181.338,36.298 L151.684,6.862 C144.826,0.068 135.494,-2.046 130.984,2.178 L53.988,53.142 L173.212,53.126 L179.12,53.33 C181.794,53.414 184.744,53.9 187.82,54.686 L181.338,36.298 L181.338,36.298 Z" fill="#00D2B8"></path></g></svg></a>
            ]}
            showcase={MarketConnectProject}
            />
            <Project
            title="Pandemic App Concept"
            description="While the COVID-19 pandemic has greatly affected our lives, its impact towards our lives is far less 
            tragic than previous pandemics due to the advancements in technology. A good pandemic app should not only be 
            functional but must also be extremely user friendly to entice users of all demographics. That is why I 
            created this app in Flutter, to show that it is possible to create a beautiful yet functional app."
            referenceIcons={[
                <a title="GitHub Repo" href="https://github.com/vrevolverrr/mysejahtera" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon" strokeWidth="0" fill="#575757" viewBox="0 0 496 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>,
                <a title="Instagram Post" href="https://www.instagram.com/p/CP5rTwbMcbJ/" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon" strokeWidth="0" fill="#575757" viewBox="0 0 448 512" fisize="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
            ]}
            stackIcons={[
                <a title="Flutter" href="https://flutter.dev/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="flutter" viewBox="0 0 1999 2474.2"><path d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381" fill="#42a5f5"></path><path d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3" fill="#0d47a1"></path><path d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z" fill="#42a5f5"></path><path d="m952 2188.5 380.4-380.4 53.1 53.1-380.4 380.4z" fill="url(#a)"></path><path d="m951.7 2188.8 565.3-195.3-184.3-185.7" fill="url(#b)"></path></svg></a>,
                <a title="Dart" href="https://dart.dev/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="dart" viewBox="0 0 256 256"><g><path d="M70.534,69.696 L53.988,53.15 L54.058,172.75 L54.256,178.34 C54.338,180.97 54.826,183.938 55.64,187.014 L186.744,233.244 L219.516,218.724 L219.528,218.684 L70.534,69.696" fill="#00D2B8"></path><path d="M55.64,187.014 L55.648,187.022 C55.64,186.968 55.612,186.908 55.612,186.852 C55.612,186.908 55.62,186.96 55.64,187.014 L55.64,187.014 Z M219.516,218.724 L186.744,233.244 L55.648,187.022 C58.152,196.63 63.696,207.43 69.662,213.336 L112.446,255.876 L207.576,256 L219.528,218.684 L219.516,218.724 L219.516,218.724 Z" fill="#55DDCA"></path><path d="M3.034,130.116 C-1.202,134.638 0.902,143.966 7.722,150.838 L37.14,180.5 L55.64,187.014 C54.826,183.938 54.338,180.97 54.256,178.34 L54.058,172.75 L53.988,53.15 L3.034,130.116 Z" fill="#0081C6"></path><path d="M187.82,54.686 C184.744,53.9 181.794,53.414 179.12,53.33 L173.212,53.126 L53.988,53.142 L219.544,218.684 L219.558,218.684 L234.098,185.88 L187.82,54.686" fill="#0079B3"></path><path d="M187.67,54.654 C187.734,54.668 187.784,54.686 187.826,54.692 L187.82,54.686 C187.784,54.668 187.734,54.668 187.67,54.654 L187.67,54.654 Z M214.118,68.732 C208.11,62.674 197.452,57.168 187.826,54.692 L234.098,185.88 L219.558,218.684 L219.544,218.684 L255.076,207.336 L255.152,109.92 L214.118,68.732 L214.118,68.732 Z" fill="#00A4E4"></path><path d="M181.338,36.298 L151.684,6.862 C144.826,0.068 135.494,-2.046 130.984,2.178 L53.988,53.142 L173.212,53.126 L179.12,53.33 C181.794,53.414 184.744,53.9 187.82,54.686 L181.338,36.298 L181.338,36.298 Z" fill="#00D2B8"></path></g></svg></a>
            ]}
            showcase={MySJProject}
            />
            <Project
            title="Chrome Discord Presence"
            description="Ever wanted to show your browsing activity on one of the most widely used digital distribution platform? 
            This project takes advantage of the Discord Rich Presence API in combination with a Google Chrome extension to make that happen! 
            It displays a customised status for up to 15 websites and shows a generic status for everything else."
            referenceIcons={[
                <a title="GitHub Repo" href="https://github.com/vrevolverrr/chrome-discord-presence" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon" strokeWidth="0" fill="#575757" viewBox="0 0 496 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>
            ]}
            stackIcons={[
                <a title="JavaScript" href="https://www.javascript.com/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="javascript" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg></a>,
                <a title="Python" href="https://www.python.org/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="python" viewBox="0 0 448 512"><path fill="#366994" d="M167.8 36.4c-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1zm-6.7 28.4c11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4zm185.2 81.4v47.5c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6-7.7-30.9-22.3-54.2-53.4-54.2h-40.1zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3z"></path></svg></a>,
            ]}
            showcase={ChromeRPCProject}
            />
            <Project
            title="Low Poly McDonald's Render"
            description="A low polygon render of my local McDonald's made in Blender and rendered with the Cycles engine. 
            All of the models were created from scratch by using primitive shapes. This was my first ever completed render with 
            Blender after learning it for some time."
            referenceIcons={[
                <a title="Google Drive" href="https://drive.google.com/drive/folders/1_6OO6qY2AlkKXnIFFjTSED1lMtShjJH3?usp=sharing" target="_blank" rel="noreferrer">
                       <svg className="project-reference-icon" viewBox="0 0 32 32"><path fill="#537ABD" d="M31.868 21h-22l-5 9h21.688" /><path fill="#2EB672" d="M10.962 2l-11 18 5 10 10.721-19.655" /><path fill="#FED14B" d="M20.962 2h-10l10.75 19h10.25l-11-19" /></svg>
                </a>
            ]}
            stackIcons={[
                <a title="Blender" href="https://www.blender.org/foundation/" target="_blank" rel="noreferrer"><svg style={{position: "relative", top: "-6px"}} className="stack-used-icon" alt="blender" viewBox="0 0 181 148" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit={2}><path d="M68.296 82.919c.643-11.472 6.251-21.608 14.749-28.77 8.315-7.041 19.483-11.35 31.744-11.35 12.2 0 23.368 4.303 31.683 11.35 8.498 7.162 14.082 17.298 14.75 28.77.643 11.775-4.098 22.76-12.383 30.894-8.497 8.255-20.515 13.474-34.05 13.474s-25.614-5.183-34.05-13.474c-8.316-8.133-13.05-19.059-12.383-30.834z" fillRule="nonzero" fill="#fff"/><g fillRule="nonzero"><path d="M93.726 81.514c.33-5.895 3.213-11.104 7.58-14.785 4.273-3.618 10.012-5.833 16.313-5.833 6.269 0 12.008 2.212 16.281 5.833 4.367 3.68 7.237 8.89 7.58 14.785.33 6.05-2.106 11.696-6.363 15.876-4.367 4.242-10.543 6.924-17.498 6.924s-13.163-2.663-17.499-6.924c-4.273-4.18-6.706-9.794-6.363-15.845z" fill="#265787"/><path d="M56.297 93.99c.04 2.308.777 6.8 1.88 10.293 2.322 7.423 6.27 14.286 11.729 20.305 5.614 6.207 12.539 11.198 20.523 14.754 8.39 3.711 17.499 5.614 26.95 5.614 9.45-.012 18.558-1.946 26.948-5.708 7.985-3.587 14.91-8.577 20.524-14.816 5.49-6.082 9.42-12.944 11.728-20.367a51.458 51.458 0 002.205-11.354c.29-3.743.169-7.517-.365-11.291-1.042-7.33-3.587-14.223-7.486-20.461-3.555-5.77-8.172-10.792-13.661-15.034l.012-.01-55.208-42.42c-.05-.037-.09-.077-.143-.112C98.314.601 92.2.61 88.24 3.4c-4.024 2.82-4.492 7.486-.905 10.418l-.015.015 23.05 18.746-70.18.075h-.094c-5.801.006-11.384 3.805-12.476 8.64-1.135 4.897 2.807 8.983 8.858 8.983l-.009.022 35.558-.069-63.63 48.658c-.081.06-.168.122-.243.18-5.989 4.586-7.923 12.228-4.149 17.031 3.837 4.897 11.978 4.928 18.029.028l34.622-28.384s-.505 3.837-.465 6.114zm89.206 12.82c-7.142 7.267-17.155 11.415-27.947 11.415-10.823.02-20.835-4.054-27.978-11.322-3.493-3.556-6.051-7.61-7.642-11.946a31.054 31.054 0 01-1.753-13.35 31.324 31.324 0 013.837-12.57c2.083-3.774 4.959-7.205 8.484-10.106 6.955-5.645 15.782-8.733 25.015-8.733 9.264-.013 18.09 3.022 25.046 8.67 3.525 2.883 6.394 6.302 8.484 10.076a31.125 31.125 0 013.837 12.57 31.153 31.153 0 01-1.76 13.35c-1.584 4.366-4.148 8.42-7.641 11.977z" fill="#ea7600"/></g></svg></a>,
            ]}
            showcase={McDonaldsProject}
            />
            <Project
            title="TeachablePython"
            description="TeachablePy was created to further ease the integration of machine learning models created by using 
            Google's Teachable Machine into your own projects using Tensorflow with little to no expertise in machine learning. 
            This project is still in early stages of development and is still not ready for production use. Currently only hotword 
            detection has been implemented but plans for pose detection and image detection is underway."
            referenceIcons={[
                <a title="GitHub Repo" href="https://github.com/vrevolverrr/teachablepy" target="_blank" rel="noreferrer">
                    <svg className="project-reference-icon" strokeWidth="0" fill="#575757" viewBox="0 0 496 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>
            ]}
            stackIcons={[
                <a title="Python" href="https://www.python.org/" target="_blank" rel="noreferrer"><svg className="stack-used-icon" alt="python" viewBox="0 0 448 512"><path fill="#366994" d="M167.8 36.4c-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1zm-6.7 28.4c11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4zm185.2 81.4v47.5c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6-7.7-30.9-22.3-54.2-53.4-54.2h-40.1zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3z"></path></svg></a>,
            ]}
            showcase={TeachablePyProject}
            />
            <Project
            title="Library Week Badges"
            description="These badges were made by me for an annual event held at my school. The badges were sold during the 
            period of the event at the school courtyard as a merchandise to raise funds for my schools Board of Student Librarians."
            referenceIcons={[
                <a title="Google Drive" href="https://drive.google.com/drive/folders/1ZPO8tKwMAUcvwdm3sJ0bOqX98_f1TdJ7?usp=sharing" target="_blank" rel="noreferrer">
                       <svg className="project-reference-icon" viewBox="0 0 32 32"><path fill="#537ABD" d="M31.868 21h-22l-5 9h21.688" /><path fill="#2EB672" d="M10.962 2l-11 18 5 10 10.721-19.655" /><path fill="#FED14B" d="M20.962 2h-10l10.75 19h10.25l-11-19" /></svg>
                </a>
            ]}
            stackIcons={[
                <a title="Adobe Illustrator" href="https://www.adobe.com/sea/products/illustrator.html" target="_blank" rel="noreferrer"><svg className="stack-used-icon" height="30" viewBox="0 0 512 512" width="30"><path fill="#f0a024" d="M1.207.711h510.576v510.578H1.207z" /><path fill="#373122" d="M23.669 23.179h465.646v465.646H23.669z" /><path d="M177.76 291.347l-18.431 61.119c-.303 2.109-1.21 2.813-3.021 2.813h-30.82c-2.113 0-2.714-1.057-2.113-3.511 16.317-53.748 43.809-143.321 63.144-204.092.908-3.511 1.815-7.025 2.417-19.32 0-1.403.908-2.107 1.815-2.107h41.696c1.508 0 1.811.352 2.416 1.756 22.354 72.011 46.827 151.4 69.788 224.113.605 2.104 0 3.161-1.811 3.161h-33.841c-1.511 0-2.115-.703-2.716-2.108l-19.339-61.823H177.76zm61.027-34.427c-6.043-23.535-20.848-70.956-26.887-95.545h-.303c-4.535 23.183-16.918 62.877-25.983 95.545h53.173zM335.278 139.531c0-12.996 8.607-21.776 20.183-21.776 12.172 0 19.595 8.78 19.595 21.776 0 13.35-8.016 21.78-19.889 21.78-11.877 0-19.889-8.43-19.889-21.78zm2.076 47.773c0-2.107.592-2.808 2.08-2.808h31.463c1.782 0 2.379.351 2.379 2.808v165.098c0 1.76-.597 2.808-2.379 2.808h-30.871c-1.78 0-2.672-.698-2.672-3.157V187.304z" fill="#f0a024"/></svg></a>,
            ]}
            showcase={BadgesProject}
            />
            <p style={{ fontSize: "18px" }}>and many more to come!</p>
        </div>
    );
}