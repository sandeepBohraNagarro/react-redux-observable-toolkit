import React from 'react';
import backButtonIcon from 'assets/icons/ic-back.svg';
import history from 'common/utils/history';

/**
 * Component to render back button for navigation
 * in header.
 */
export default function BackButton() {
  /**
   * Event handler that gets called on button
   * click
   */
  function handleClick() {
    history.goBack();
  }

  return (
    <div className="back-button">
      <button type="buttton" onClick={handleClick}>
        <img src={backButtonIcon} alt="Back button"></img>
      </button>
    </div>
  );
}
