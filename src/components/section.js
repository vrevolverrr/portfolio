import './css/section.css';

export default function Section(props) {
    const shouldInvertHorizontally = props.invert || false;

    return (
        <div className="section-container">
            {(shouldInvertHorizontally) ?
                [<div className="text-container">
                    <h2 className="section-title">{props.title}</h2>
                    <div className="section-text">{props.content}</div>
                </div>,
                <div className="image-container">
                    {props.image}
                </div>]
            :
                [<div className="image-container">
                    {props.image}
                </div>,
                <div className="text-container">
                    <h2 className="section-title">{props.title}</h2>
                    <div className="section-text">{props.content}</div>
                </div>]
            }
        </div>
    )
}