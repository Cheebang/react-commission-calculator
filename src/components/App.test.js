import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import CommissionCalculatorContainer from "./commission-calculator/CommissionCalculatorContainer";

describe("Top level app component", () => {
  it("render the App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommissionCalculatorContainer).length).toBe(1);
  });
});
