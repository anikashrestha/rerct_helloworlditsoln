import React from 'react';
import '../assets/css/Footer.css';


const OfficeInfo = () => {
    return (
        <div className="office-info-container">
            <h1 className="idea-text">We will convert your idea<br/>into an Application.</h1>
            <div className="contact-details">
                <div className="phone-info">
                    <i className="phone-icon"></i>
                    <span>+977-9841160918, +977-9845422250</span>
                </div>
                <div className="email-info">
                    <i className="email-icon"></i>
                    <span>info@helloworldnepal.com</span>
                </div>
            </div>
        </div>
    );
};

export default OfficeInfo;