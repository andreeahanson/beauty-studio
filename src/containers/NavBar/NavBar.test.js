import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';
import { loadError, loadLoading, loadBlush, loadBronzer, loadEyebrow, loadEyeliner, loadEyeshadow, loadFoundation, loadLipliner, loadLipstick, loadMascara} from '../../actions';

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

  describe('mapStateToProps', () => {
    let initialState = {
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

    let wrapper = shallow(<NavBar initialState={initialState}/>)

    it('should return arrays of all products', () => {
      let mappedProps = mapStateToProps(initialState);

      expect(mappedProps).toEqual(initialState);
    })
  })

  describe('mapDispatchToProps', () => {
    let initialState = {
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

    let wrapper = shallow(<NavBar initialState={initialState}/>)

    it('calls dispatch with a loadBlush action when loadBlush is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadBlush(initialState.blush);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadBlush(initialState.blush);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadBronzer action when loadBronzer is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadBronzer(initialState.bronzer);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadBronzer(initialState.bronzer);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadEyebrow action when loadEyebrow is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadEyebrow(initialState.eyebrow);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadEyebrow(initialState.eyebrow);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadEyeliner action when loadEyeliner is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadEyeliner(initialState.eyeliner);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadEyeliner(initialState.eyeliner);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadEyeshadow action when loadEyeshadow is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadEyeshadow(initialState.eyeshadow);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadEyeshadow(initialState.eyeshadow);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadFoundation action when loadFoundation is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadFoundation(initialState.foundation);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadFoundation(initialState.foundation);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadLipliner action when loadLipliner is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadLipliner(initialState.lipliner);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadLipliner(initialState.lipliner);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadLipstick action when loadLipstick is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadLipstick(initialState.lipstick);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadLipstick(initialState.lipstick);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadMascara action when loadMascara is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadMascara(initialState.mascara);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadMascara(initialState.mascara);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })



  })



})