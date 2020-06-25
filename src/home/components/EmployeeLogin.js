import React, { useState } from 'react';
import Header from 'common/components/Header';
import phoneIcon from 'assets/icons/ic-phone.svg';

export default function EmployerLogin() {
  const [phone, setPhone] = useState();

  /**
   * Handler for phone number text change
   * @param {*} event
   */
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function renderLoginWithPhone() {
    return (
      <div className="login-with-phone mt-4 text-center">
        <form>
          <input
            type="text"
            className="input-box"
            placeholder="Phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <button className="btn bdr-radius32 btn-primary btn-block mt-3">
            Continue
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="app-content employer px-4">
      <Header title="Login / Register as employer" />
      <div className="text-left">
        <div className="my-3 text-center">Your phone number</div>
        <div className="logo text-center my-5">
          <img src={phoneIcon} alt="Logo" />
        </div>
      </div>
      {renderLoginWithPhone()}
    </div>
  );
}
