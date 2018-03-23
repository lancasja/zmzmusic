import React from 'react';

const ContactLink = ({ label, icon, href, onClick }) => (
    <a className="contact-link" href={ href } onClick={ onClick }>
      <span
        className="contact-link--icon"
        style={{ backgroundImage: `url(${icon})` }}></span>
      <span className="contact-link--label">{ label }</span>
    </a>
);

export default ContactLink;
