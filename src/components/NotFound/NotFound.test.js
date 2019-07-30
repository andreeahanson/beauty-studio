import React from "react";
import NotFound from "./NotFound";
import { shallow } from "enzyme";

describe("NotFound", () => {
  it("should match the snapshot", () => {
    let wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchSnapshot();
  });
});
