import './css/hero.css';
import './css/svg.earth.css';
import TextLoop from "react-text-loop";

export default function Hero() {

    const languages = ["Hello", "您好", "Bonjour", "Annyeong", "Hola", "Ciao"];

    return (
        <div className="hero">
            <div style={{ padding: "20px" }}>
                <h2 className="hero--title"><TextLoop children={languages}></TextLoop>.</h2>
                <p className="hero--text">I am Bryan Soong, a self-taught passionate hobbyist programmer who likes to innovate and create new things!</p>
            </div>
            <div style={{ width: "660px", margin: "10px" }}>
                <svg style={{ maxWidth: "660px", maxHeight: "660px" }} viewBox="0 0 800.96 800.96">
                    <rect id="Bounding_Rect" className="cls-1" width="800.96" height="800.96"/>
                    <g id="Day_Shine" data-name="Day Shine">
                        <g className="cls-2">
                            <circle className="cls-3" cx="960.16" cy="547.64" r="354.55" transform="translate(-671.14 700.79) rotate(-45)"/>
                            <circle className="cls-3" cx="395.04" cy="409.09" r="309.7"/>
                            <circle className="cls-4" cx="960.16" cy="547.64" r="261.31" transform="translate(-671.14 700.79) rotate(-45)"/>
                        </g>
                        <g>
                            <path className="cls-5" d="M857.71,283.78a4.88,4.88,0,1,1-4.88-4.88A4.88,4.88,0,0,1,857.71,283.78Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-6" d="M589.15,666.55a4.88,4.88,0,1,1-4.88-4.87A4.87,4.87,0,0,1,589.15,666.55Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-5" d="M587.84,445.55a4.88,4.88,0,1,1-5.45,4.23A4.88,4.88,0,0,1,587.84,445.55Z" transform="translate(-565.12 -138.55)"/>

                            {/* Clouds */} 
                            <polygon className="cls-6" style={{animationDelay: "0.7s"}} points="699.73 53.19 702.39 62.29 711.49 64.95 702.39 67.61 699.73 76.7 697.08 67.61 687.98 64.95 697.08 62.29 699.73 53.19"/>
                            <polygon className="cls-6" style={{animationDelay: "0.6s"}} points="30.83 157.35 33.49 166.45 42.59 169.11 33.49 171.77 30.83 180.87 28.17 171.77 19.07 169.11 28.17 166.45 30.83 157.35"/>
                            <polygon className="cls-5" style={{animationDelay: "0.1s"}} points="102.53 52.5 105.19 61.6 114.29 64.26 105.19 66.92 102.53 76.02 99.87 66.92 90.77 64.26 99.87 61.6 102.53 52.5"/>
                            <polygon className="cls-5" style={{animationDelay: "1.0s"}} points="774.93 274.01 777.59 283.11 786.68 285.77 777.59 288.43 774.93 297.53 772.27 288.43 763.17 285.77 772.27 283.11 774.93 274.01"/>
                            <polygon className="cls-5" style={{animationDelay: "0.5s"}} points="464.21 112.18 466.87 121.28 475.97 123.94 466.87 126.6 464.21 135.7 461.55 126.6 452.45 123.94 461.55 121.28 464.21 112.18"/>
                            <polygon className="cls-5" style={{animationDelay: "0.2s"}}  points="89.21 672.38 91.87 681.48 100.97 684.14 91.87 686.8 89.21 695.9 86.56 686.8 77.45 684.14 86.56 681.48 89.21 672.38"/>
                            <polygon className="cls-5" style={{animationDelay: "0.8s"}} points="672.59 695.15 675.25 704.25 684.35 706.91 675.25 709.57 672.59 718.67 669.93 709.57 660.84 706.91 669.93 704.25 672.59 695.15"/>
                            <polygon className="cls-6" style={{animationDelay: "0.3s"}} points="771.16 576.54 773.82 585.64 782.92 588.3 773.82 590.95 771.16 600.05 768.5 590.95 759.4 588.3 768.5 585.64 771.16 576.54"/>
                        </g>
                    </g>
                    <g id="Orbit" className="rotating">
                        <circle id="Orbit_Path" data-name="Orbit Path" className="cls-7" cx="400.48" cy="400.91" r="336.37"/>
                        <g id="Moon">
                            <circle className="cls-8" cx="397.23" cy="64.88" r="59.93"/>
                            <circle className="cls-9" cx="383" cy="89.26" r="20.03"/>
                            <circle className="cls-10" cx="430.63" cy="55.11" r="13.96"/>
                            <circle className="cls-9" cx="370.37" cy="49.2" r="8.82"/>
                        </g>    
                        <ellipse id="Sun" className="cls-11" cx="955.35" cy="877.8" rx="58.77" ry="58.95" transform="translate(-849.35 1122.21) rotate(-59.75)"/>
                    </g>
                    <g id="Earth">
                        <g>
                            <path className="cls-12" d="M1022.13,739.89c-5.44-19.39,3.82-40.13,3.82-40.13,4.44-15.33,20.28-20.86,29.37-22.94,12.18-2.78,24.09-9.52,29.67-27.32s53.29-5.65,62.91.38c3,1.86,11.15,4.26,20.94,7.39a229.31,229.31,0,0,0,22.89-62.78,27.44,27.44,0,0,1-7.32-.42c-25.63-4.52-24.12-35.43-24.12-46.73s-29-19.28-32.22-10.48c-1.31,3.61,4.92,15.39,6.43,19.15s4.68,22.23-19.44,21.48-35.42-41.46-35.42-60.3,18.84-12.82,36.18-12.82,6.78-12.05,0-21.85-15.08,6.78-18.09,10.55c-2.22,2.77-29.31-.17-43.48-1.91a26.85,26.85,0,0,0-16,3c-12.09,6.48-35.33,18.3-43,17.75-10.55-.75-15.08-20.35-16.58-32.41-1.1-8.76,32.05-55.35,50.24-80.16a53.93,53.93,0,0,1,30.62-20.52c18.23-4.44,35.5-7.84,51.61-10.43a230.33,230.33,0,0,0-76.85-41.26q-10.85-3.37-22.13-5.69a233.16,233.16,0,0,0-93.06,0q-11.28,2.31-22.13,5.69A230,230,0,0,0,860.49,342q-10,5.1-19.33,11.12c-1.57,1-3.11,2-4.65,3.05q-4.6,3.12-9,6.44-1.73,1.29-3.4,2.61c.72.36,1.45.74,2.17,1.15,30.21,17.26,48.08,15.41,28.36,39.46s-26.51,30.82-13,41.3,13.5-2.47,21.24-10.48,24.38-8.63,33,10.48,22.81,28.36,0,46.24S846,539.61,830.54,539s-29,1.23-24,20.34,21,27.74,35.76,31.44,95.55,23.43,98,47.47-53,104.8-53.64,125.14c0,.44,0,.85,0,1.26q5.11,1.86,10.32,3.49,10.84,3.38,22.13,5.69a233.16,233.16,0,0,0,93.06,0c6.9-1.41,13.69-3.15,20.35-5.16C1027.71,760.72,1025.22,750.91,1022.13,739.89ZM958.94,412.63c-5.22,3.73-1.49,27.6-23.12,23.12S914.93,414.87,915.68,397s-15.55-23.12-32.08-25.37c-14.56-2-9.69-15.66-9.69-15.66,3.94-12.08,13.43-13.81,33.56-13.43,41.29.79,46.86-20,81.31-8.2,18.35,6.26,2.24,16.41-3.73,49.23S964.16,408.9,958.94,412.63Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-12" d="M853.36,685.3c-13.84-2.68-38-11.16-28.13-28.58s14.29-25,12.06-29.48-9.16-10.11-14.52-24-32.61-18.5-41.54-23.54-13.68-7.43-20.35-31.55c-5.9-21.33-6.23-64.68-11.79-80.89a228.79,228.79,0,0,0-11.58,44.36c-.08.51-.16,1-.23,1.52a233,233,0,0,0-2.56,34.46,230.49,230.49,0,0,0,88.34,181.64q2.18,1.71,4.4,3.37,4.44,3.33,9,6.44c1.54,1,3.08,2.06,4.65,3.06,4.23,2.71,8.57,5.28,13,7.72a137,137,0,0,1,2.35-17.23C860.51,711.65,867.21,688,853.36,685.3Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-13" d="M940.28,638.25c-2.47-24-83.23-43.77-98-47.47s-30.83-12.33-35.76-31.44,8.63-21,24-20.34,42.54-27.75,65.35-45.62,8.63-27.13,0-46.24-25.27-18.49-33-10.48-7.68,21-21.24,10.48-6.78-17.26,13-41.3,1.85-22.2-28.36-39.46c-.72-.41-1.45-.79-2.17-1.15q-4.89,3.79-9.56,7.82a232.33,232.33,0,0,0-27.06,27.72q-1.77,2.14-3.48,4.32a230.28,230.28,0,0,0-34.87,62.21h0c5.56,16.21,5.89,59.56,11.79,80.89,6.67,24.12,11.42,26.51,20.35,31.55s36.18,9.7,41.54,23.54,12.28,19.5,14.52,24-2.24,12.06-12.06,29.48,14.29,25.9,28.13,28.58,7.15,26.35,3.13,47.34a137,137,0,0,0-2.35,17.23h0c2.1,1.16,4.21,2.3,6.35,3.39q5,2.55,10.09,4.87t10.36,4.38c1.88.74,3.78,1.45,5.68,2.14,0-.41,0-.82,0-1.26C887.26,743.05,942.74,662.29,940.28,638.25Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-13" d="M988.78,334.31c-34.45-11.76-40,9-81.31,8.2-20.13-.38-29.62,1.35-33.56,13.43,0,0-4.87,13.69,9.69,15.66,16.53,2.25,32.82,7.46,32.08,25.37s-1.49,34.31,20.14,38.78,17.9-19.39,23.12-23.12,20.14,3.73,26.11-29.09S1007.13,340.57,988.78,334.31Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-13" d="M1028.88,399.34c-18.19,24.81-51.34,71.4-50.24,80.16,1.5,12.06,6,31.66,16.58,32.41,7.68.55,30.92-11.27,43-17.75a26.85,26.85,0,0,1,16-3c14.17,1.74,41.26,4.68,43.48,1.91,3-3.77,11.3-20.35,18.09-10.55s17.33,21.85,0,21.85-36.18-6-36.18,12.82,11.3,59.54,35.42,60.3,21-17.71,19.44-21.48-7.74-15.54-6.43-19.15c3.18-8.8,32.22-.83,32.22,10.48s-1.51,42.21,24.12,46.73a27.44,27.44,0,0,0,7.32.42h0a232.34,232.34,0,0,0-7.38-120.91c-.6-1.78-1.23-3.56-1.87-5.33A230.45,230.45,0,0,0,1153.89,414q-3.23-4.53-6.65-8.89-6.85-8.71-14.51-16.75-5.73-6-11.89-11.61-4.74-4.31-9.73-8.34c-16.11,2.59-33.38,6-51.61,10.43A53.93,53.93,0,0,0,1028.88,399.34Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-13" d="M1085,649.5c-5.58,17.8-17.49,24.54-29.67,27.32-9.09,2.08-24.93,7.61-29.37,22.94,0,0-9.26,20.74-3.82,40.13,3.09,11,5.58,20.83,10.35,28.78h0l1.78-.53q8.13-2.53,16-5.63,5.25-2.07,10.36-4.38a231.44,231.44,0,0,0,47.53-28.85q4.35-3.43,8.55-7.06c1.39-1.21,2.78-2.44,4.14-3.68a231.84,231.84,0,0,0,48-61.27h0c-9.79-3.13-18-5.53-20.94-7.39C1138.28,643.85,1090.58,631.69,1085,649.5Z" transform="translate(-565.12 -138.55)"/>
                        </g>
                        <g id="Face">
                            <path className="cls-14" d="M918.44,502h86.73c14.94,0,24.92,15.63,18.36,29.05-9.29,19-27.37,40.37-61.72,40.37s-52.44-21.35-61.73-40.37C893.52,517.65,903.5,502,918.44,502Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-5" d="M933.05,527.2h0a12,12,0,0,1-11.95-12v-3.2H945v3.2A12,12,0,0,1,933.05,527.2Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-5" d="M384.73,373.5h23.9a0,0,0,0,1,0,0v7.78a7.37,7.37,0,0,1-7.37,7.37h-9.16a7.37,7.37,0,0,1-7.37-7.37V373.5A0,0,0,0,1,384.73,373.5Z"/>
                            <path className="cls-5" d="M990.56,527.2h0a12,12,0,0,1-11.95-12v-3.2h23.9v3.2A12,12,0,0,1,990.56,527.2Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-15" d="M925.89,552s10.33-9.25,33.28-9.25S993.58,552,993.58,552,962.9,571.23,925.89,552Z" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-16" d="M1000.89,473.87v-5.26A14.65,14.65,0,0,1,1015.54,454h0a14.65,14.65,0,0,1,14.65,14.65v5.65" transform="translate(-565.12 -138.55)"/>
                            <path className="cls-16" d="M893.42,473.87v-5.26A14.65,14.65,0,0,1,908.07,454h0a14.65,14.65,0,0,1,14.65,14.65v5.65" transform="translate(-565.12 -138.55)"/>
                        </g>
                    </g>
                    <g id="Clouds">
                        <g id="Cloud_5" className="floaty" style={{animationDelay: "0.2s"}} data-name="Cloud 5">
                            <path className="cls-5" d="M875.49,778.7h-192S697.6,721,747.25,721c36.78,0,55.87,23.27,63.3,35.32,14.51-5.67,45.75-12.56,64.94,22.34" transform="translate(-565.12 -138.55)"/>
                        </g>
                        <g id="Cloud_4" className="floaty" style={{animationDelay: "6.1s"}} data-name="Cloud 4">
                            <path className="cls-5" d="M1091,667.77a34.2,34.2,0,0,1,17.16,4.62,55,55,0,0,1,94.15-3.3c5.3-18.16,21.71-31.4,41.15-31.4,22.07,0,40.23,17,42.67,39a34.24,34.24,0,0,1,36.42,18.74H1057C1060.6,679.58,1074.45,667.77,1091,667.77Z" transform="translate(-565.12 -138.55)"/>
                        </g>    
                        <g id="Cloud_3" className="floaty" style={{animationDelay: "3.3s"}} data-name="Cloud 3">
                            <path className="cls-5" d="M1160.14,433.72a24,24,0,0,1,12.07,3.26,38.71,38.71,0,0,1,66.26-2.33,30.35,30.35,0,0,1,29-22.09c15.53,0,28.3,12,30,27.44a24.13,24.13,0,0,1,3.83-.34,24.55,24.55,0,0,1,21.8,13.52H1136.19A24.75,24.75,0,0,1,1160.14,433.72Z" transform="translate(-565.12 -138.55)"/>
                        </g>
                        <g id="Cloud_2" className="floaty" style={{animationDelay: "4.2s"}} data-name="Cloud 2">
                            <path className="cls-5" d="M755.83,593.62H608.12s10.82-44.37,49-44.37c28.3,0,43,17.9,48.71,27.18,11.17-4.37,35.2-9.67,50,17.19" transform="translate(-565.12 -138.55)"/>
                        </g>
                        <g id="Cloud_1" className="floaty" style={{animationDelay: "1.2s"}} data-name="Cloud 1">
                            <path className="cls-5" d="M666.22,340.74a34.14,34.14,0,0,1,17.15,4.62,55,55,0,0,1,94.16-3.3c5.3-18.16,21.71-31.4,41.15-31.4,22.07,0,40.23,17,42.67,39a34.24,34.24,0,0,1,36.42,18.74H632.18C635.81,352.55,649.65,340.74,666.22,340.74Z" transform="translate(-565.12 -138.55)"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}