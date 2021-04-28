import './section.css';

export default function Section(props) {
    const shouldInvertHorizontally = props.invert || false;

    return (
        <div className="section-container">
            {(shouldInvertHorizontally) ?
                [<div className="text-container">
                    <h2 className="section-title">{props.title}</h2>
                    <div className="section-text">{props.text}</div>
                </div>,
                <div className="image-container">
                    <img src={props.image} className="section-image" alt="section-1"></img>
                </div>]
            :
                [<div className="image-container">
                    <img src={props.image} className="section-image" alt="section-1"></img>
                </div>,
                <div className="text-container">
                    <h2 className="section-title">{props.title}</h2>
                    <div className="section-text">{props.text}</div>
                </div>]
            }
        </div>
    )
}