import React from 'react';
import { connect } from "react-redux";

const Total = ({ price, additionalPrice }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = ({ car, additionalPrice }) => ({
  price: car.price,
  additionalPrice
})

export default connect(mapStateToProps, {})(Total);
