import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow, mount } from 'enzyme';
import { loadLoading } from '../../actions';

describe('App', () => {
  let wrapper;

  beforeEach(()=> {
    let findFavoriteMock = jest.fn();
    let toggleFavoriteMock = jest.fn();
    let setFavoritesMock = jest.fn();
    let mockBlush = [{id:1, product_type:"blush"}]
    let mockBronzer = [{id:2, product_type:"bronzer"}]
    let mockLipstick = [{id: 3, product_type:"lipstick"}]
    let mockLipliner = [{id: 4, product_type:"lip_liner"}]
    let mockMascara =[{id:5, product_type:"mascara"}]
    let mockFoundation = [{id:6, product_type:"foundation"}]
    let mockEyeliner = [{id:7, product_type:"eyeliner"}]
    let mockEyeshadow = [{id: 8, product_type:"eyeshadow"}]
    let mockEyebrow = [{id:9, product_type:"eyebrow"}]
    let mockAllProducts=[{id:1, product_type:"blush"}, {id:2, product_type:"bronzer"},{id: 3, product_type:"lipstick"},{id: 4, product_type:"lip_liner"},{id:5, product_type:"mascara"},{id:6, product_type:"foundation"},{id:7, product_type:"eyeliner"}, {id: 8, product_type:"eyeshadow"}, {id:9, product_type:"eyebrow"}]

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
      isLoading: false,
      favorites: []
    }

    const allProducts = [{id:1}, {id:2}]

    wrapper=shallow(
    <App 
    initialState={initialState} 
    blush={mockBlush} 
    bronzer={mockBronzer}
    lipstick={mockLipstick}
    lip_liner={mockLipliner}
    mascara={mockMascara}
    foundation={mockFoundation}
    eyeliner={mockEyeliner}
    eyeshadow={mockEyeshadow}
    eyebrow={mockEyebrow}
    />)    
  })

      it('should match the snapshot', () => {


        wrapper=shallow(<App blush={[]} />)    
        // wrapper.setProps({blush:[]})
        expect(wrapper).toMatchSnapshot();
      })

    // wrapper=shallow(
    // <App 
    // findFavorite={findFavoriteMock}
    // toggleFavorite={toggleFavoriteMock}
    // setFavorites={setFavoritesMock}
    // blush={mockBlush}
    // bronzer={mockBronzer}
    // lipstick={mockLipstick}
    // lip_liner={mockLipliner}
    // mascara={mockMascara}
    // foundation={mockFoundation}
    // eyeliner={mockEyeliner}
    // eyeshadow={mockEyeshadow}
    // eyebrow={mockEyebrow}
    // allProducts={mockAllProducts}
    // />)




  // it('should findFavorite product when findFavorite is called', () => {
    
    
  // });

  // it('should toggleFavvorite when the function is called', () => {

  //   let wrapper = shallow(<App allProducts={[{id:1, product_type:"blush"}, {id:2, product_type:"bronzer"}]} favorites={[]} />)

  //   wrapper.instance().findFavorite = jest.fn();
  //   jest.spyOn(wrapper.instance(), 'toggleFavorite')

  //   wrapper.find('.heart').simulate('click');

  //   expect(wrapper.instance().toggleFavorite).toHaveBeenCalled();
  // })

  // it('should set favorites to store when setFavorites is called', () => {
  //   let mockSetFavorites = jest.fn();
  //   wrapper = shallow(<App allProducts={[{id:1, product_type:"blush"}, {id:2, product_type:"bronzer"}]} favorites={[]} setFavorites={mockSetFavorites}/>)

  //   wrapper.instance().setFavorites();

  //   const result = [{id:2, product_type:"bronzer"}]

  //   expect(wrapper.instance().setFavorites).toEqual(result);
  // })

  describe('mapStateToProps', () => {
    let initialState = {
      blush: [],
      bronzer: [],
      lipstick: [],
      lip_liner: [],
      mascara:[],
      foundation: [],
      eyeliner: [],
      eyeshadow: [],
      eyebrow: [],
      isLoading: false,
      favorites: []
    }

    it('should return an array for all product types, as well as a boolean for isLoading, and an array for favorites', () => {
      const mappedProps = mapStateToProps(initialState);
      expect(mappedProps).toEqual(initialState);
    })
  })

  // describe('mapDispatchToProps', () => {
  //   let initialState = {
  //     blush: [{id:1, product_type:"blush"}],
  //     bronzer: [{id:2, product_type:"bronzer"}],
  //     lipstick: [{id: 3, product_type:"lipstick"}],
  //     lipliner: [{id: 4, product_type:"lip_liner"}],
  //     mascara:[{id:5, product_type:"mascara"}],
  //     foundation: [{id:6, product_type:"foundation"}],
  //     eyeliner: [{id:7, product_type:"eyeliner"}],
  //     eyeshadow: [{id: 8, product_type:"eyeshadow"}],
  //     eyebrow: [{id:9, product_type:"eyebrow"}],
  //     isLoading: false,
  //     favorites: [{id:9, product_type:"eyebrow"}]
  //   }

  //   it('calls dispatch with a loadLoading action when loadLoading is called', () => {
  //     const mockDispatch = jest.fn();
  //     const mockAction = loadLoading(initialState.isLoading);

  //     const mappedProps = mapDispatchToProps(mockDispatch);
  //     mappedProps.loadLoading(initialState.isLoading);

  //     expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  //   })
  // })



})





