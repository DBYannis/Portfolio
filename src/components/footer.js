import React from 'react';
import GitHubLogo from '../images/github_footer.svg';
import EnvelopeLogo from '../images/envelope.svg';
import LinkedInLogo from '../images/brand-linkedin.svg';

const Footer = () => {
  return (
    <div id="footer">
      <a href="https://github.com/DBYannis" target="_blank" rel="noopener noreferrer" className="link">
        <img src={GitHubLogo} alt="logo github" className="footer_logo" />
      </a>
      <a href="mailto:yannisdenant@gmail.com">
        <img src={EnvelopeLogo} alt="logo enveloppe" className="footer_logo" />
      </a>
      <a href="https://www.linkedin.com/in/yannis-denant-boemont-341819253/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInLogo} alt="logo linkedin" className="footer_logo" />
      </a>
    </div>
  );
};

export default Footer;
