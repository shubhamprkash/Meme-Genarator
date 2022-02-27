import React from 'react';

export default function Header() {
  return <div className="header">

      <img className="header-img" src={require("../images/meme-logo.png")} alt="logo" />

      <h2 className="header-title">Meme Genarator</h2>

      <h5 className="header-note">React Project</h5>
  </div>;
}
