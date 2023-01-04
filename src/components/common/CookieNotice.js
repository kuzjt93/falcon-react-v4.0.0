import React from 'react';
import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CookieNotice = ({ show, setShow, children, ...rest }) => {
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      className="notice shadow-none bg-transparent"
      style={{
        maxWidth: '35rem'
      }}
      {...rest}
    >
      <Toast.Body className="my-3 ms-0 ms-md-5">{children}</Toast.Body>
    </Toast>
  );
};

CookieNotice.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default CookieNotice;
