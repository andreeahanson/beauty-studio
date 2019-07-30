import React from "react";
import { ProductCard, mapStateToProps } from "./ProductCard";
import { shallow } from "enzyme";

describe("ProductCard", () => {
  let id = 1;
  let brand = "X";
  let name = "Y";
  let price = 12;
  let image = "string";
  let colors = [];
  let description = "bla";
  let type = "another string";
  let tagList = [];
  let toggleFavorite = jest.fn();
  let favorites = [];

  it("should match the snapshot", () => {
    let wrapper = shallow(
      <ProductCard
        id={id}
        brand={brand}
        name={name}
        price={price}
        image={image}
        colors={colors}
        description={description}
        type={type}
        tagList={tagList}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    let initialState = {
      favorites: [{ id: 1 }, { id: 2 }]
    };

    it("should return an array of favorite products", () => {
      const mappedProps = mapStateToProps(initialState);
      expect(mappedProps).toEqual(initialState);
    });
  });
});
