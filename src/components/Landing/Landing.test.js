import React from "react";
import Landing from "./Landing";
import { shallow } from "enzyme";

describe("Landing", () => {
  it("should match the snapshot", () => {
    let wrapper = shallow(<Landing />);

    expect(wrapper).toMatchSnapshot();
  });
});
