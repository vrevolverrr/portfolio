export default function Project(props) {
    return (
        <div className="project-item-container">
            <div className="project-item-content-container">
                <h2 className="project-item-title-container"><span className="project-item-title">{props.title}</span>
                    {props.referenceIcons}
                </h2>
                <p className="project-item-description">{props.description}</p>
                <div className="stack-used-container">
                    {props.stackIcons}
                </div>
            </div>
            <img src={props.showcase} className="project-item-image" alt="showcase"></img>
    </div>
    );
}