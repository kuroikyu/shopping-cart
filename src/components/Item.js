import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Feather from 'feather-icons-react';
import styled from 'styled-components';

const Circle = styled.div`
  background-color: #152B3C;
  border-radius: 50%;
  color: #F0DDAA;
  padding: 10px;
  height: 45px;
  width: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Ubuntu, sans-serif;

  &:hover {
    box-shadow: 0 0 0 3px hsl(156.7, 37.2%, 57.5%) inset,
    0 0 0 5px hsla(206.2,48.1%,15.9%,0.75) inset;
  }
`;

const DetailsContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
`;

const AddToCart = styled.button`
  background-color: #152B3C;
  color: #F0DDAA;
  font-size: 1em;
  padding: 10px 20px;
  border: none;
  font-family: Ubuntu, sans-serif;
  &:focus {
    box-shadow: 0 0 0 3px #152B3C inset,
    0 0 0 4px #F0DDAA inset;
    outline: none;
  }
`;

export default class Item extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    func: PropTypes.func.isRequired,
  }

  render() {
    const {
      id,
      icon,
      title,
      price,
      func,
    } = this.props;

    const formattedPrice = price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });

    return (
      <ItemContainer>
        <Circle>
          <Feather icon={icon} />
        </Circle>
        <DetailsContainer>
          <strong>{title}</strong>
          <span>{formattedPrice}</span>
        </DetailsContainer>
        <AddToCart id={id} onClick={func}>Buy</AddToCart>
      </ItemContainer>
    );
  }
}
