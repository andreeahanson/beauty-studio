import React from "react";
import { shallow } from "enzyme";
import { DetailPage, mapStateToProps } from "./DetailPage";

describe("DetailPage", () => {
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
  };
  let mockToggleFavorite = jest.fn();
  let product_colors = ["red", "yellow"];
  let tag_list = [];
  let mockFavorites = [1, 2];

  beforeEach(() => {
    wrapper = shallow(
      <DetailPage
        store={store}
        product_colors={product_colors}
        tag_list={tag_list}
        favorites={mockFavorites}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    let wrapper;
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
    };

    wrapper = shallow(
      <DetailPage
        initialState={initialState}
        product_colors={product_colors}
        tag_list={tag_list}
        favorites={mockFavorites}
      />
    );

    it("should return arrays of products, an array of favorites, and a boolean for isLoading", () => {
      const mappedProps = mapStateToProps(initialState);
      expect(mappedProps).toEqual(initialState);
    });

    it("should condition the rendering of the rating", () => {
      wrapper = shallow(
        <DetailPage
          initialState={initialState}
          product_colors={product_colors}
          tag_list={tag_list}
          favorites={mockFavorites}
          toggleFavorite={mockToggleFavorite}
          rating={1}
        />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
