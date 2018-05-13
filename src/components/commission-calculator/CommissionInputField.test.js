import React from "react";
import { shallow } from "enzyme";

import CommissionInputField from "./CommissionInputField";

describe("CommissionInputField", () => {
  const props = {
    label: "test",
    onChange: () => {}
  };

  it("render the CommissionInputField and use props correctly", () => {
    const wrapper = shallow(<CommissionInputField {...props} />);
    expect(wrapper.find("label").text()).toBe(props.label + ": ");
    expect(wrapper.find("input").props().onChange).toBe(props.onChange);
  });
});
