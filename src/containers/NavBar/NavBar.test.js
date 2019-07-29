import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';

describe('NavBar', () => {
  let wrapper, initialState;
  
  beforeEach(() => {
    initialState = {
      blush: [],
      bronzer: [],
      eyebrow: [],
      eyeliner: [],
      eyeshadow: [],
      foundation: [],
      lip_liner: [],
      lipstick: [],
      mascara: [],
      error: ''
    }

    wrapper = shallow(<NavBar initialState={initialState}/>)
  })

  it('should match the snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  })

})