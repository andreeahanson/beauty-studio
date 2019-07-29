import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';
import { loadError, loadLoading, loadBlush, loadBronzer, loadEyebrow, loadEyeliner, loadEyeshadow, loadFoundation, loadLipliner, loadLipstick, loadMascara} from '../../actions';
import { fetchMakeup } from '../../apiCalls';
import { dataCleanup } from '../../dataCleaner';

jest.mock('../../apiCalls')

jest.mock('../../dataCleaner')
fetchMakeup.mockImplementation(() => ({
  id:2, product_type:"blush"
}))
dataCleanup.mockImplementation(() => ({
  id:2, product_type:"blush"
}))


describe('NavBar', () => {
  let wrapper, initialState;
  
  let mockLoadLoading = jest.fn()
  let mockLoadBlush = jest.fn()


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
      loading: false,
      error: ''
    }

    // let mockBlush = [{id:1, product_type:"blush"}]
    // let mockBronzer = [{id:2, product_type:"bronzer"}]
    // let mockLipstick = [{id: 3, product_type:"lipstick"}]
    // let mockLipliner = [{id: 4, product_type:"lip_liner"}]
    // let mockMascara =[{id:5, product_type:"mascara"}]
    // let mockFoundation = [{id:6, product_type:"foundation"}]
    // let mockEyeliner = [{id:7, product_type:"eyeliner"}]
    // let mockEyeshadow = [{id: 8, product_type:"eyeshadow"}]
    // let mockEyebrow = [{id:9, product_type:"eyebrow"}]

    let mockBlush = []
    let mockBronzer = [{id:2, product_type:"bronzer"}]
    let mockLipstick = [{id: 3, product_type:"lipstick"}]
    let mockLipliner = [{id: 4, product_type:"lip_liner"}]
    let mockMascara =[{id:5, product_type:"mascara"}]
    let mockFoundation = [{id:6, product_type:"foundation"}]
    let mockEyeliner = [{id:7, product_type:"eyeliner"}]
    let mockEyeshadow = [{id: 8, product_type:"eyeshadow"}]
    let mockEyebrow = [{id:9, product_type:"eyebrow"}]


    wrapper = shallow(
    <NavBar 
    initialState={initialState}
    blush={mockBlush}
    loadLoading={mockLoadLoading}
    loadBlush={mockLoadBlush}
    loading={false}
    />)
    let mockProduct = { id: 1 }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProduct)
      })
    })

  })

  it('should match the snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  })

 //pickBlush

 //FIRST PART OF THE IF STATEMENT >>>> blush=[]
 //test that loadLoading is fired with the value of true

  it('should call loadLoading with a value of true, if the store is empty', async () => {
    const mockEvent = {
      target: {
        name : 'blush'
      }
    }

    await wrapper.instance().pickBlush(mockEvent)

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith('blush');
    expect(dataCleanup).toHaveBeenCalledWith({
      id:2, product_type:"blush"
    })
    expect(mockLoadBlush).toHaveBeenCalledWith({
      id:2, product_type:"blush"
    })
    expect(mockLoadLoading).toHaveBeenCalledWith(false);

  })


 //mock fetch???
 //test that dataCleanup was invoked with products as parameter
 //test that loadBlush was invoked with cleanProducts as parameter
 //test that loadLoading is fired with the value of false

 //SECOND PART OF THE IF STATEMENT >>>> blush=[{id: 1}, { id: 2}]
 //test that loadBlush was invoked with blush



















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
      loading: false,
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
      loading: false,
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

    it('calls dispatch with a loadLoading action when loadLoading is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadLoading(initialState.loading);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadLoading(initialState.loading);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('calls dispatch with a loadError action when loadError is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadError(initialState.error);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadError(initialState.error);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })


  })



})