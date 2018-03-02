import React, { Component } from 'react';
import styled from 'styled-components';
import 'normalize.css';

import ItemsContainer from './components/ItemsContainer';
import CartContainer from './components/CartContainer';

const mobileWidth = '720px';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${mobileWidth}) {
    flex-direction: column;
  }
`;

const ShoppingArea = styled.div`
  flex-grow: 1;
  width: 66vw;
  padding: 0 40px;
  @media (max-width: ${mobileWidth}) {
    width: 100%;
  }
`;

const CartArea = styled.div`
  flex-grow: 1;
  padding: 0 40px;
  height: 100%;
  background-color: #152B3C;
  color: #F0DDAA;
`;

const MainTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  margin: 50px 0;
  font-weight: normal;
`;

const Separator = styled.hr`
  border: none;
  box-shadow: 0 0 0 2px #152B3C;
  margin-bottom: 110px;
`;

const LightSeparator = styled(Separator)`
  box-shadow: 0 0 0 2px #F0DDAA;
`;

const itemsSource = [
  {
    id: 'it001',
    icon: 'anchor',
    title: 'Good ol\' anchor',
    price: 349.99,
  },
  {
    id: 'it002',
    icon: 'camera',
    title: 'DSLR camera',
    price: 1896.95,
  },
  {
    id: 'it003',
    icon: 'smartphone',
    title: 'Smartphone X',
    price: 999.00,
  },
  {
    id: 'it004',
    icon: 'watch',
    title: 'Smartwatch',
    price: 299.00,
  },
  {
    id: 'it005',
    icon: 'package',
    title: 'Mistery box',
    price: 0.99,
  },
  {
    id: 'it006',
    icon: 'film',
    title: 'A ticket to the movies',
    price: 12.25,
  },
  {
    id: 'it007',
    icon: 'book',
    title: 'Magic Kid and some Stone',
    price: 8.00,
  },
  {
    id: 'it008',
    icon: 'headphones',
    title: 'AirBuds',
    price: 159.00,
  },
  {
    id: 'it009',
    icon: 'speaker',
    title: 'HomeHome speaker',
    price: 319.00,
  },
  {
    id: 'it010',
    icon: 'layers',
    title: 'Square cake',
    price: 10.50,
  },
  {
    id: 'it011',
    icon: 'search',
    title: 'Titled lollipop',
    price: 1.50,
  },
  {
    id: 'it012',
    icon: 'tablet',
    title: 'iTablet Pro 14',
    price: 899.00,
  },
];

export default class App extends Component {
  state = {
    items: [...itemsSource],
  }

  addToCart = (e) => {
    const itemAdded = e.target.id;
    const newState = [...this.state.items];

    const itemToUpdate = newState.filter(el => el.id === itemAdded)[0];
    itemToUpdate.inCart = itemToUpdate.inCart ? itemToUpdate.inCart + 1 : 1;

    this.setState((prevState) => {
      const result = {
        ...prevState,
        items: newState,
      };
      return result;
    });
  }

  handlePurchase = (e) => {
    e.preventDefault();
    const emptyCart = this.state.items.map((el) => {
      const newEl = {
        ...el,
        inCart: 0,
      };
      return newEl;
    });
    this.setState({ items: emptyCart });
  }

  render() {
    const { items } = this.state;
    return (
      <AppContainer>
        <ShoppingArea>
          <MainTitle>Shopping Area</MainTitle>
          <Separator />
          <ItemsContainer items={items} func={this.addToCart} />
        </ShoppingArea>
        <CartArea>
          <MainTitle>Shopping Cart</MainTitle>
          <LightSeparator />
          <CartContainer items={items.filter(el => el.inCart > 0)} purchase={this.handlePurchase} />
        </CartArea>
      </AppContainer>
    );
  }
}
