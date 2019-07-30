import React from "react";
import { ProductCollection, mapStateToProps } from "./ProductCollection";
import { shallow } from "enzyme";

describe("ProductCollection", () => {
  let products = [{ id: 1 }, { id: 2 }];
  let mockToggleFavorite = jest.fn();
  let mockIsLoading = false;

  it("should match the snapshot", () => {
    let wrapper = shallow(
      <ProductCollection
        products={products}
        toggleFavorite={mockToggleFavorite}
        isLoading={mockIsLoading}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    let initialState = {
      isLoading: false
    };

    it("should return a property of isLoading with the value of false", () => {
      const mappedProps = mapStateToProps(initialState);
      expect(mappedProps).toEqual(initialState);
    });
  });
});
