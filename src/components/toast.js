import './toast.css';
import { hideToast } from '../utils/toast-controller';

export default function Toast() {
    return (
        <div className="toast-box">
            <svg onClick={hideToast} data-name="close-cross" className="close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.89 44.89">
                <path className="cross" d="M964,519.19a4.94,4.94,0,0,0-2.61,1.49,5.15,5.15,0,0,0-1.21,2.09,5.48,5.48,0,0,0,.27,3.4c.38.77.83,1.25,8.5,8.93l6.43,6.44L969,547.9c-7.55,7.57-8.21,8.27-8.58,9a5,5,0,0,0,6.82,6.55c.76-.46,1.31-1,8.71-8.38l6.48-6.46,6.45,6.44c7.32,7.31,8,7.94,8.73,8.4a4.57,4.57,0,0,0,2.19.52,4.39,4.39,0,0,0,2.21-.47,5,5,0,0,0,2.82-3.85,5.42,5.42,0,0,0-.34-2.64c-.37-.82-.72-1.19-9.55-10l-5.43-5.44L996,535.1c7.32-7.34,7.95-8,8.4-8.74a5,5,0,0,0,.49-3,5.1,5.1,0,0,0-3.15-4,5.28,5.28,0,0,0-3.4-.08c-1.06.35-1,.32-9.61,8.89l-6.25,6.22-5.37-5.36c-8.43-8.41-9.16-9.12-9.74-9.43a5.34,5.34,0,0,0-3.35-.48Z" transform="translate(-960 -519.1)"/>
            </svg>
            <p className="toast-text">🎉 Hi! Welcome to my portfolio</p>
        </div>
    )
}