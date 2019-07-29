import React from 'react';
import ProductCollection from './ProductCollection';
import { shallow } from 'enzyme';

describe('ProductCollection', () => {
  let products = [{id:1}, {id:2}]
  let mockToggleFavorite = jest.fn()


  it('should match the snapshot', () => {
    let wrapper=shallow(
    <ProductCollection 
    products={products}
    toggleFavorite={mockToggleFavorite}
    />)

    expect(wrapper).toMatchSnapshot();
  })
}) 