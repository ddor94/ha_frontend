import React from 'react';

function Footer() {
  return (
    <footer className="footer has-background-black is-paddingless">
      <div className="has-text-centered footer__content">
        <p className="has-text-white">
          © {(new Date().getFullYear())} HereArt
        </p>
      </div>
    </footer>
  );
}

export default Footer;
