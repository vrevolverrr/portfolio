import './css/toggle-switch.css';

export default function ToggleSwitch(props) {
    return (
        <label className="switch">
            <input type="checkbox" onClick={props.onClick}/>
            <span className="slider round"></span>
        </label>
    )
}