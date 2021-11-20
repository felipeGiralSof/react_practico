import React from 'react';
import '@styles/Order.scss';

const Order = () => {
  return(
    <div className="order">
      <p>
        <span>21-10-2021</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src="/assets/icons/flechita.svg" alt="arrow"/>
    </div>
  );
}

export default Order;