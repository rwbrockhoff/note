import React from 'react';
import {CardElement} from 'react-stripe-elements';


class CardSection extends React.Component {
  render() {
    return (
      <label>
        <CardElement style={{base: {fontSize: '18px', fontFamily: 'Nunito Sans'}}} />
      </label>
    );
  }
}

export default CardSection;