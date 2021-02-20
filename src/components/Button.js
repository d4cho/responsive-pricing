import React from 'react';

const Button = ({ type }) => {
  return (
    <div className={type === 'Professional' ? 'pro-button' : 'button'}>
      LEARN MORE
    </div>
  );
};

export default Button;
