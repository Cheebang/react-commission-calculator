import React from "react";
import { mount } from "enzyme";
import NumberFormat from "react-number-format";

import CommissionDisplay from "./CommissionDisplay";

describe("CommissionDisplay", () => {
  const props = { value: 1000.23 };

  it("render the CommissionDisplay and use props correctly", () => {
    const wrapper = mount(<CommissionDisplay {...props} />);
    expect(wrapper.find(NumberFormat).text()).toBe("$1,000.23");
  });
});
