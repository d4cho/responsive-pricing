import React from 'react';

const Pricing = ({ isAnnually, setIsAnnually }) => {
  return (
    <div className='container-pricing'>
      <h1 className='h1-pricing'>Our Pricing</h1>
      <div className='toggle-container'>
        <div>Annually</div>
        <div className='toggle' onClick={() => setIsAnnually(!isAnnually)}>
          <span className='dot' style={styles.toggle(isAnnually)}></span>
        </div>
        <div>Monthly</div>
      </div>
    </div>
  );
};

export default Pricing;

const styles = {
  toggle: (isAnnually) => {
    if (isAnnually) {
      return {
        left: '15%',
        transform: 'translate(-15%, -50%)'
      };
    } else {
      return {
        right: '15%',
        transform: 'translate(15%, -50%)'
      };
    }
  }
};
