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

  button {
    transition: all 150ms ease-in-out;
  }

  &:hover button {
    color: #f1f1f1;
    box-shadow: 0 6px 10px -3px rgba(0,0,0,0.4);
    transform: translateY(-3px);
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
