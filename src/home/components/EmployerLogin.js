import React, { useState } from 'react';
import Header from 'common/components/Header';

export default function EmployerLogin() {
  const [phone, setPhone] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Handler for phone number text change
   * @param {*} event
   */
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  /**
   * Handler for email input change
   * @param {*} event
   */
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  /**
   * Handler for password input change
   * @param {*} event
   */
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function renderLoginWithPhone() {
    return (
      <div className="login-with-phone mt-4 text-left">
        <form>
          <input
            type="text"
            className="input-box"
            placeholder="Phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <button className="btn bdr-radius32 btn-primary mt-2">
            Login with OTP
          </button>
        </form>
      </div>
    );
  }

  function renderLoginWithEmail() {
    return (
      <div className="login-with-email mt-40 text-left">
        <form>
          <input
            type="text"
            className="input-box"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="input-box mt-2"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="btn btn-primary bdr-radius32 mt-2">
            Login with Email
          </button>
        </form>
      </div>
    );
  }

  function newToUnnati() {
    return (
      <div className="new-to-unnati mt-5">
        <div className="bold">New to Unnati?</div>
        <div className="sub-heading">
          Register your company today and connect with millions of jobseekers
        </div>
        <button
          type="button"
          className="btn secondary-btn bdr-radius32 mt-3"
          // onClick={hirePeople}
        >
          Register Company
        </button>
      </div>
    );
  }

  return (
    <div className="app-content employer px-4">
      <Header title="Login / Register as employer" />
      <div className="mt-5 text-left">
        <div className="bold">Login to Jobs</div>
        <div className="sub-heading text-left">
          Login with the credentials you created or received from the company
        </div>
      </div>
      {renderLoginWithPhone()}
      {renderLoginWithEmail()}
      {newToUnnati()}
    </div>
  );
}
