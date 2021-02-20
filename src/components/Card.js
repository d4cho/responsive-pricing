import React from 'react';
import Button from './Button';

const Card = ({ plan, isAnnually }) => {
  const { type, annual, monthly, storage, users, send } = plan;

  return (
    <div
      className='container-Card'
      style={type === 'Professional' ? styles.professional : null}>
      <p>{type}</p>
      <h1>
        <span>$</span> {isAnnually ? annual : monthly}
      </h1>
      <div className='div-container-Card'>{storage}</div>
      <div className='div-container-Card'>{users}</div>
      <div className='div-container-Card'>{send}</div>
      <Button type={type} />
    </div>
  );
};

export default Card;

const styles = {
  professional: {
    color: 'white',
    backgroundImage: 'linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%))'
  }
};
