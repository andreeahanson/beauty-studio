import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { loadLoading, loadFavorites, addFavoriteId, deleteFavorite } from '../../actions';

describe('App', () => {
  let wrapper;
  let wrapper2
  let findFavoriteMock = jest.fn();
  let toggleFavoriteMock = jest.fn();
  let setFavoritesMock = jest.fn();
  let mockAddFavoriteId = jest.fn();
  let mockDeleteFavorite = jest.fn()

  beforeEach(()=> {
    let mockBlush = [{id:1, product_type:"blush"}]
    let mockBronzer = [{id:2, product_type:"bronzer"}]
    let mockLipstick = [{id: 3, product_type:"lipstick"}]
    let mockLipliner = [{id: 4, product_type:"lip_liner"}]
    let mockMascara =[{id:5, product_type:"mascara"}]
    let mockFoundation = [{id:6, product_type:"foundation"}]
    let mockEyeliner = [{id:7, product_type:"eyeliner"}]
    let mockEyeshadow = [{id: 8, product_type:"eyeshadow"}]
    let mockEyebrow = [{id:9, product_type:"eyebrow"}]
    
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
    addFavoriteId={mockAddFavoriteId}
    deleteFavorite={mockDeleteFavorite}
    />)    

wrapper2=shallow(
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
  addFavoriteId={mockAddFavoriteId}
  deleteFavorite={mockDeleteFavorite}
  isLoading={true}
  />) 


  })

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper2).toMatchSnapshot();
      })

  it('should findFavorite product when findFavorite is called', () => {
    let mockAllProducts=[{id:1, product_type:"blush"}, {id:2, product_type:"bronzer"},{id: 3, product_type:"lipstick"},{id: 4, product_type:"lip_liner"},{id:5, product_type:"mascara"},{id:6, product_type:"foundation"},{id:7, product_type:"eyeliner"}, {id: 8, product_type:"eyeshadow"}, {id:9, product_type:"eyebrow"}]

    findFavoriteMock = jest.fn();
    let toggleFavoriteMock = jest.fn();

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
    let mockBlush = [{id:1, product_type:"blush"}]
    let mockBronzer = [{id:2, product_type:"bronzer"}]
    let mockLipstick = [{id: 3, product_type:"lipstick"}]
    let mockLipliner = [{id: 4, product_type:"lip_liner"}]
    let mockMascara =[{id:5, product_type:"mascara"}]
    let mockFoundation = [{id:6, product_type:"foundation"}]
    let mockEyeliner = [{id:7, product_type:"eyeliner"}]
    let mockEyeshadow = [{id: 8, product_type:"eyeshadow"}]
    let mockEyebrow = [{id:9, product_type:"eyebrow"}]
    let mockFavorites = [1]

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
      allProducts={mockAllProducts}
      findFavorite={findFavoriteMock}
      toggleFavorite={toggleFavoriteMock}
      favorites={mockFavorites}
      />)   

      const id = 1
      wrapper.instance().findFavorite(id)
      
      expect(wrapper.instance().findFavorite(id)).toEqual(1)
  });

  it('should call addFavoriteId intoggleFavorite when the id is not included in favorites', () => {

    const mockFavoriteId = 1;
    const mockFavorites = [3]
    let mockAllProducts = [{id:1}, {id:2}, {id:3}]

    let mockBlush = [{id:1, product_type:"blush"}]
    let mockBronzer = [{id:2, product_type:"bronzer"}]
    let mockLipstick = [{id: 3, product_type:"lipstick"}]
    let mockLipliner = [{id: 4, product_type:"lip_liner"}]
    let mockMascara =[{id:5, product_type:"mascara"}]
    let mockFoundation = [{id:6, product_type:"foundation"}]
    let mockEyeliner = [{id:7, product_type:"eyeliner"}]
    let mockEyeshadow = [{id: 8, product_type:"eyeshadow"}]
    let mockEyebrow = [{id:9, product_type:"eyebrow"}]

    wrapper=shallow(
      <App 
      blush={mockBlush} 
      bronzer={mockBronzer}
      lipstick={mockLipstick}
      lip_liner={mockLipliner}
      mascara={mockMascara}
      foundation={mockFoundation}
      eyeliner={mockEyeliner}
      eyeshadow={mockEyeshadow}
      eyebrow={mockEyebrow}
      allProducts={mockAllProducts}
      findFavorite={findFavoriteMock}
      toggleFavorite={toggleFavoriteMock}
      favorites={mockFavorites}
      addFavoriteId={mockAddFavoriteId}
      deleteFavorite={mockDeleteFavorite}
      />)   

      wrapper.instance().toggleFavorite(mockFavoriteId)
      
      expect(mockAddFavoriteId).toHaveBeenCalledWith(1)
  })

  it('should call deleteFavorite in toggleFavorite when the id is included in favorites', () => {

    const mockFavoriteId = 1;
    const mockFavorites = [1, 3]
    let mockAllProducts = [{id:1}, {id:2}, {id:3}]

    let mockBlush = [{id:1, product_type:"blush"}]
    let mockBronzer = [{id:2, product_type:"bronzer"}]
    let mockLipstick = [{id: 3, product_type:"lipstick"}]
    let mockLipliner = [{id: 4, product_type:"lip_liner"}]
    let mockMascara =[{id:5, product_type:"mascara"}]
    let mockFoundation = [{id:6, product_type:"foundation"}]
    let mockEyeliner = [{id:7, product_type:"eyeliner"}]
    let mockEyeshadow = [{id: 8, product_type:"eyeshadow"}]
    let mockEyebrow = [{id:9, product_type:"eyebrow"}]

    wrapper=shallow(
      <App 
      blush={mockBlush} 
      bronzer={mockBronzer}
      lipstick={mockLipstick}
      lip_liner={mockLipliner}
      mascara={mockMascara}
      foundation={mockFoundation}
      eyeliner={mockEyeliner}
      eyeshadow={mockEyeshadow}
      eyebrow={mockEyebrow}
      allProducts={mockAllProducts}
      findFavorite={findFavoriteMock}
      toggleFavorite={toggleFavoriteMock}
      favorites={mockFavorites}
      addFavoriteId={mockAddFavoriteId}
      deleteFavorite={mockDeleteFavorite}
      />)   

      wrapper.instance().toggleFavorite(mockFavoriteId)
      
      expect(mockDeleteFavorite).toHaveBeenCalledWith(1)
  })

  it('should set favorites to store when setFavorites is called', () => {
    wrapper = shallow(
    <App 
    allProducts={[{id:1, product_type:"blush"}, {id:2, product_type:"bronzer"}]} 
    blush={[]} 
    bronzer={[]}
    lipstick={[]}
    lip_liner={[]}
    mascara={[]}
    foundation={[]}
    eyeliner={[]}
    eyeshadow={[]}
    eyebrow={[]}
    favorites={[]} 
    setFavorites={setFavoritesMock}
    />)

    wrapper.instance().setFavorites();

    expect(wrapper.instance().setFavorites()).toEqual([]);
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
      mascara:[],
      isLoading: false,
      favorites: []
    }

    it('should return an array for all product types, as well as a boolean for isLoading, and an array for favorites', () => {
      const mappedProps = mapStateToProps(initialState);
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


    it('calls dispatch with a loadLoading action when loadLoading is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadLoading(initialState.loading);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadLoading(initialState.loading);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with a loadFavorites action when loadFavorites is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = loadFavorites(initialState.loading);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadFavorites(initialState.loading);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with an addFavoriteId action when addFavoriteId is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = addFavoriteId(initialState.loading);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addFavoriteId(initialState.loading);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with an deleteFavorite action when deleteFavorite is called', () => {
      const mockDispatch = jest.fn();
      const mockAction = deleteFavorite(initialState.loading);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteFavorite(initialState.loading);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  })

})





