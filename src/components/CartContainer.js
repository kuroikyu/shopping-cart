import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Feather from 'feather-icons-react';

// color: ${items => (items.items.length > 0 ? 'hsl(43.7,70%,80.4%)' : 'hsl(206.2,48.1%,30.9%)')};
const Container = styled.div`
  padding: 25px 25px;
  background-color: hsl(206.2, 48.1%, 20.9%);
`;
const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 50px;
  padding: 12px 10px;
  background: #59B390;
  text-transform: uppercase;
  font-size: 1.25em;
  font-family: Ubuntu, sans-serif;
`;

function curr(nummy) {
  return nummy.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
}

export default class CartContainer extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape),
    purchase: PropTypes.func.isRequired,
  }

  static defaultProps = {
    items: [],
  }

  render() {
    const { items, purchase } = this.props;
    return (
      <Container items={items}>
        <table>
          <thead>
            <tr>
              <th />
              <th style={{ textAlign: 'left' }}>Item</th>
              <th className="price">Qty</th>
              <th className="price">Amout</th>
            </tr>
          </thead>
          <tbody>
            {items.map(el => (
              <tr key={el.id}>
                <td><Feather icon={el.icon} /></td>
                <td>{el.title}</td>
                <td className="price">{el.inCart}</td>
                <td className="price">{curr(el.inCart * el.price)}</td>
              </tr>
          ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2">Total</th>
              <td className="price">{items.reduce((acc, el) => (el.inCart + acc), 0)}</td>
              <td className="price">
                {curr(items.reduce((acc, el) => (el.inCart * el.price) + acc, 0))}
              </td>
            </tr>
          </tfoot>
        </table>
        <Button onClick={purchase}>Pay for the goods</Button>
      </Container>
    );
  }
}
