import React, { useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';
import Pricing from './components/Pricing';

const plans = [
  {
    type: 'Basic',
    annual: 199.99,
    monthly: 19.99,
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    send: 'Send up to 3 GB'
  },
  {
    type: 'Professional',
    annual: 249.99,
    monthly: 24.99,
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    send: 'Send up to 10 GB'
  },
  {
    type: 'Master',
    annual: 399.99,
    monthly: 39.99,
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    send: 'Send up to 20 GB'
  }
];

const App = () => {
  const [isAnnually, setIsAnnually] = useState(true);

  return (
    <div className='container'>
      <Pricing isAnnually={isAnnually} setIsAnnually={setIsAnnually} />
      <CardsContainer plans={plans} isAnnually={isAnnually} />
    </div>
  );
};

export default App;
