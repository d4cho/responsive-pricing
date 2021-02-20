import React from 'react';
import Card from './Card';

const CardsContainer = ({ plans, isAnnually }) => {
  const renderCards = () =>
    plans.map((plan) => <Card plan={plan} isAnnually={isAnnually} />);

  return <div className='container-CardsContainer'>{renderCards()}</div>;
};

export default CardsContainer;
