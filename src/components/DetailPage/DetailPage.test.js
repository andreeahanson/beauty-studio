import React from 'react';
import { shallow } from 'enzyme';
import { DetailPage, mapStateToProps} from './DetailPage';

describe('DetailPage', () => {
  let wrapper;
  const store = {
    blush: [],
    bronzer: [],
    eyebrow: [],
    eyeliner: [],
    eyeshadow: [],
    foundation: [],
    lip_liner: [],
    lipstick: [],
    mascara: [],
    isLoading: [],
    favorites: []
  }
  let mockToggleFavorite = jest.fn()
  let product_colors = ["red", "yellow"]
  let tag_list = []
  let mockFavorites = [1,2]

  beforeEach(() => {
    wrapper = shallow(
    <DetailPage 
    store={store} 
    product_colors={product_colors} 
    tag_list={tag_list}
    favorites = {mockFavorites}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})