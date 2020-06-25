import React from 'react';
import PropTypes from 'prop-types';
import BackButton from 'common/components/BackButton';

/**
 * Component to render application header
 * @param {Object} props The component props
 */
export default function Header(props) {
  /**
   * Renders the header title
   */
  function renderTitle() {
    if (props.title.length > 0) {
      return <div className="page-title">{props.title}</div>;
    }
  }

  return (
    <div className="header">
      <BackButton />
      {renderTitle()}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};
