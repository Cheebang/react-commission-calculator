import React from "react";
import { shallow } from "enzyme";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import CommissionInputField from "./CommissionInputField";

describe("CommissionInputField", () => {
  const props = {
    label: "test",
    onChange: () => {},
    validationState: "success"
  };

  it("render the CommissionInputField and use props correctly", () => {
    const wrapper = shallow(<CommissionInputField {...props} />);
    expect(
      wrapper
        .find(ControlLabel)
        .children()
        .text()
    ).toBe(props.label + ": ");
    expect(wrapper.find(FormControl).props().onChange).toBe(props.onChange);
    expect(wrapper.find(FormGroup).props().validationState).toBe(props.validationState);
  });
});
