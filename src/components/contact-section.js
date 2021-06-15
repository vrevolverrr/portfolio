import './css/contact-section.css';
import MailPicture from '../assets/mail.svg';
import { showToast, showErrorToast } from '../utils/toast-controller';
import { useState } from 'react';

export default function ContactSection() {
    const [sending, setSending] = useState(false);

    const submit = () => {
        setSending(true);

        const email = document.querySelector("#input-email").value;
        const name = document.querySelector("#input-name").value;
        const message = document.querySelector("#input-message").value;

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                setSending(false);
                switch (this.status) {
                    case 200:
                        showToast("Successfully sent message");
                        break;
                    case 500:
                        showErrorToast("Failed to send message");
                        break;
                    default:
                        break
                }
            }
        };
        xhttp.open("PUT", "https://asia-southeast2-vrevolver-0502.cloudfunctions.net/submitMessage", true);
        xhttp.send(JSON.stringify({email: email, name: name, message: message}));
    }

    return (
       <div className="section-container contact-container">
            <h2 className="section-title" style={{paddingTop: "50px", paddingBottom: "50px"}}>Contact Me</h2>
            <img src={MailPicture} className="mail-picture" alt="mail"></img>
            <div className="form-container">
                <p style={{marginLeft: "2px"}}>Email</p>
                <input type="text" id="input-email" placeholder="example@gmail.com"/>
                <p style={{marginLeft: "2px"}}>Name</p>
                <input type="text" id="input-name" placeholder="Bryan Soong"/>
                <p style={{marginLeft: "2px"}}>Message </p>
                <textarea type="text" id="input-message" placeholder="Message"/>
                <button className="submit-btn" onClick={submit} disabled={sending}>{sending ? "Pending" : "Submit"}</button>
            </div>
       </div>
    );
}