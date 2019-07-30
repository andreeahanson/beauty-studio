import {
  blushReducer,
  bronzerReducer,
  eyebrowReducer,
  eyelinerReducer,
  eyeshadowReducer,
  foundationReducer,
  liplinerReducer,
  lipstickReducer,
  mascaraReducer,
  favoritesReducer,
  loadErrorReducer,
  isLoadingReducer
} from "./ProductsReducer";

describe("blushReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = blushReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_BLUSH was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_BLUSH",
      blush: [{ product: 1 }]
    };

    const result = blushReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("bronzerReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = bronzerReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_Bronzer was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_BRONZER",
      bronzer: [{ product: 1 }]
    };

    const result = bronzerReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("eyebrowReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = eyebrowReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_eyebrow was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_EYEBROW",
      eyebrow: [{ product: 1 }]
    };

    const result = eyebrowReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("eyelinerReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = eyelinerReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_eyeliner was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_EYELINER",
      eyeliner: [{ product: 1 }]
    };

    const result = eyelinerReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("eyeshadowReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = eyeshadowReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_eyeshadow was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_EYESHADOW",
      eyeshadow: [{ product: 1 }]
    };

    const result = eyeshadowReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("foundationReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = foundationReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_foundation was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_FOUNDATION",
      foundation: [{ product: 1 }]
    };

    const result = foundationReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("liplinerReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = liplinerReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_lipliner was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_LIPLINER",
      lip_liner: [{ product: 1 }]
    };

    const result = liplinerReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("lipstickReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = lipstickReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_lipstick was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_LIPSTICK",
      lipstick: [{ product: 1 }]
    };

    const result = lipstickReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("mascaraReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = mascaraReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after LOAD_mascara was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_MASCARA",
      mascara: [{ product: 1 }]
    };

    const result = mascaraReducer([], action);

    expect(result).toEqual(expected);
  });
});

describe("isLoadingReducer", () => {
  it("should return the initial state", () => {
    const expected = false;
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after isLoading was fired", () => {
    const expected = true;
    const action = {
      type: "IS_LOADING",
      isLoading: true
    };

    const result = isLoadingReducer(false, action);

    expect(result).toEqual(expected);
  });
});

describe("favoritesReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after favorites was fired", () => {
    const expected = [{ product: 1 }];
    const action = {
      type: "LOAD_FAVORITES",
      favorites: [{ product: 1 }]
    };

    const result = favoritesReducer([], action);

    expect(result).toEqual(expected);
  });

  it("should add a favorite after ADD FAVORITE ID was fired", () => {
    const expected = [{ id: 1 }];
    const action = {
      type: "ADD_FAVORITE_ID",
      id: { id: 1 }
    };

    const result = favoritesReducer([], action);

    expect(result).toEqual(expected);
  });

  it("should delete a favorite after DELETE FAVORITE was fired", () => {
    const expected = [{ id: 1 }];
    const action = {
      type: "DELETE_FAVORITE",
      id: { id: 1 }
    };

    const result = favoritesReducer([{ id: 1 }], action);

    expect(result).toEqual(expected);
  });
});

describe("loadErrorReducer", () => {
  it("should return the initial state", () => {
    const expected = "";
    const result = loadErrorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the state after loadError was fired", () => {
    const action = {
      type: "LOAD_ERROR",
      errorMsg: "error"
    };

    const result = loadErrorReducer("error", action);

    expect(result).toEqual(action.errorMsg);
  });
});
