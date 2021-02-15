import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure,mount } from "enzyme";
import Button from "./Button";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<Button />);
  });
});

it("includes two paragraphs", () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.find("p").length).toEqual(2);
});

it("should update state on click", () => {
  
  const changeSize = jest.fn();
  const wrapper = mount(<Button onClick={changeSize} />);
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(size => [size, changeSize]);
  wrapper.find("#para1").simulate("click");
  expect(changeSize).toHaveBeenCalledTimes(1)

});