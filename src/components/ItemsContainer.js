import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: hsl(156.7, 37.2%, 57.5%);
  padding: 5px 10px;
`;

export default class ItemsContainer extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    func: PropTypes.func,
  }

  render() {
    const {
      items,
      ...other
    } = this.props;
    return (
      <Container>
        {items.map(el => (
          <Item
            key={el.id}
            id={el.id}
            icon={el.icon}
            title={el.title}
            price={el.price}
            {...other}
          />
          ))}
      </Container>
    );
  }
}
