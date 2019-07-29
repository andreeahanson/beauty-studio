import React from 'react';
import { ProductCard, mapStateToProps } from './ProductCard';
import { shallow } from 'enzyme';

describe('ProductCard', () => {
  let id = 1
  let key = 2
  let brand = "X"
  let name = "Y"
  let price = 12
  let image = 'string'
  let colors = []
  let description = 'bla'
  let type = 'another string'
  let tagList = []
  let toggleFavorite = jest.fn()
  let favorites=[]

  it('should match the snapshot', () => {
    let wrapper=shallow(
    <ProductCard 
    id={id}
    key={key}
    brand={brand}
    name={name}
    price={price}
    image={image}
    colors={colors}
    description={description}
    type={type}
    tagList={tagList}
    toggleFavorite={toggleFavorite}
    favorites={favorites}
    />)

    expect(wrapper).toMatchSnapshot();
  })
}) 