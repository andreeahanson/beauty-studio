import * as actions from './index';

describe('actions', () => {
  
  it('should have a type of LOAD_BLUSH', () => {
    //setup
    const blush = {product: 1};
    const expectedAction = {
      type: 'LOAD_BLUSH',
      blush: {product: 1}
    }

    //execution
    const result = actions.loadBlush(blush);
    //expectation
    expect(result).toEqual(expectedAction);
  })


  it('should have a type of LOAD_BRONZER', () => {
    //setup
    const bronzer = {product: 1};
    const expectedAction = {
      type: 'LOAD_BRONZER',
      bronzer: {product: 1}
    }

    //execution
    const result = actions.loadBronzer(bronzer);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_EYEBROW', () => {
    //setup
    const eyebrow = {product: 1};
    const expectedAction = {
      type: 'LOAD_EYEBROW',
      eyebrow: {product: 1}
    }

    //execution
    const result = actions.loadEyebrow(eyebrow);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_EYELINER', () => {
    //setup
    const eyeliner = {product: 1};
    const expectedAction = {
      type: 'LOAD_EYELINER',
      eyeliner: {product: 1}
    }

    //execution
    const result = actions.loadEyeliner(eyeliner);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_FOUNDATION', () => {
    //setup
    const foundation = {product: 1};
    const expectedAction = {
      type: 'LOAD_FOUNDATION',
      foundation: {product: 1}
    }

    //execution
    const result = actions.loadFoundation(foundation);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_LIPLINER', () => {
    //setup
    const lip_liner = {product: 1};
    const expectedAction = {
      type: 'LOAD_LIPLINER',
      lip_liner: {product: 1}
    }

    //execution
    const result = actions.loadLipliner(lip_liner);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_LIPSTICK', () => {
    //setup
    const lipstick = {product: 1};
    const expectedAction = {
      type: 'LOAD_LIPSTICK',
      lipstick: {product: 1}
    }

    //execution
    const result = actions.loadLipstick(lipstick);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_MASCARA', () => {
    //setup
    const mascara = {product: 1};
    const expectedAction = {
      type: 'LOAD_MASCARA',
      mascara: {product: 1}
    }

    //execution
    const result = actions.loadMascara(mascara);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of IS_LOADING', () => {
    //setup
    const isLoading = true;
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    //execution
    const result = actions.loadLoading(true);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_FAVORITES', () => {
    //setup
    const favorites = {product: 1};
    const expectedAction = {
      type: 'LOAD_FAVORITES',
      favorites: {product: 1}
    }

    //execution
    const result = actions.loadFavorites(favorites);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of ADD_FAVORITE_ID', () => {
    //setup
    const id = 1;
    const expectedAction = {
      type: 'ADD_FAVORITE_ID',
      id: 1
    }

    //execution
    const result = actions.addFavoriteId(1);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of DELETE_FAVORITE', () => {
    //setup
    const id = 1;
    const expectedAction = {
      type: 'DELETE_FAVORITE',
      id: 1
    }

    //execution
    const result = actions.deleteFavorite(1);
    //expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_ERROR', () => {
    //setup
    const errorMsg = 'error';
    const expectedAction = {
      type: 'LOAD_ERROR',
      errorMsg: 'error'
    }

    //execution
    const result = actions.loadError('error');
    //expectation
    expect(result).toEqual(expectedAction);
  })
})