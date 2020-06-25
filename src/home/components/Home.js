import React from 'react';
import logo from 'assets/logo/ic-logo-small.svg';

export default function Home() {
  return (
    <div className="app-container">
      <div className="app-content">
        <div className="login-logo">
          <div className="logo">
            <img src={logo} alt="Logo"></img>
          </div>
          <div className="logo-heading">Unnati</div>
        </div>
      </div>
    </div>
  );
}
