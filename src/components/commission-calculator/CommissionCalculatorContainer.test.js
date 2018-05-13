import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";

import CommissionCalculatorContainer from "./CommissionCalculatorContainer";
import CommissionInputField from "./CommissionInputField";

describe("CommissionCalculatorContainer", () => {
  const mockStore = configureStore();
  const initialState = {
    commissionCalculatorReducer: { actual: 210, target: 100, motc: 5000 }
  };
  let store;

  it("render the CommissionCalculatorContainer and use props correctly", () => {
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <CommissionCalculatorContainer />
      </Provider>
    );
    const inputs = wrapper.find(CommissionInputField);
    expect(inputs.length).toBe(3);
    expect(inputs.at(0).props().label).toBe("Actual");
    expect(inputs.at(1).props().label).toBe("Target");
    expect(inputs.at(2).props().label).toBe("MOTC");
  });
});
