import React from 'react';
import ContactLink from './ContactLink';

const Header = ({ title, contactLinks, logo, subTitle }) => (
    <header className="header">
      <div className="logo">
        <img src={ logo } alt="ZMZMUSIC"/>
      </div>
      <h1 className="site-title">
        <span>{ title }</span>
        <span>{ subTitle }</span>
      </h1>
      <div className="contact">
        { contactLinks.map((link, index) => {
            return (
              <ContactLink
                key={ index }
                label={ link.label }
                icon={ link.icon }
                href={ link.href }
                onClick={ link.onClick }/>
            );
          }) }
      </div>
    </header>
);

export default Header;
