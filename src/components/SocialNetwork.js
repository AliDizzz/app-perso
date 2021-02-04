import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        
    }

    return (
        <div className="social-network">
            <ul className="content">
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover">
                    <li><i className="fab fa-facebook-f"></i></li>
                </a>
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover">
                    <li><i className="fab fa-twitter"></i></li>
                </a>
                <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover">
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;