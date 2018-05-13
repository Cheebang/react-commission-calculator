import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";

import ConnectedCommissionCalculatorContainer, {
  CommissionCalculatorContainer,
  actualValidationErrorMessage,
  targetValidationErrorMessage,
  motcValidationErrorMessage
} from "./CommissionCalculatorContainer";
import CommissionInputField from "./CommissionInputField";
import CommissionDisplay from "./CommissionDisplay";

describe("CommissionCalculatorContainer", () => {
  const mockStore = configureStore();
  const initialState = {
    commissionCalculatorReducer: { actual: 210, target: 100, motc: 5000 }
  };
  const store = mockStore(initialState);

  it("should connect the CommissionCalculatorContainer to redux store", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedCommissionCalculatorContainer />
      </Provider>
    );

    const inputs = wrapper.find(CommissionInputField);
    expect(inputs.length).toBe(3);
    expect(inputs.at(0).props().label).toBe("Actual");
    expect(inputs.at(1).props().label).toBe("Target");
    expect(inputs.at(2).props().label).toBe("MOTC");

    const commissionDisplay = wrapper.find(CommissionDisplay);
    expect(commissionDisplay.length).toBe(1);
    expect(commissionDisplay.children().text()).toBe("Commission:$12,750.00");
  });

  it("should show validation errors if there are any", () => {
    const props = {
      setActualAction: () => {},
      setTargetAction: () => {},
      setMotcAction: () => {},
      actualValidationState: "error",
      targetValidationState: "error",
      motcValidationState: "error"
    };
    const wrapper = shallow(<CommissionCalculatorContainer {...props} />);
    const errors = wrapper.find("div");
    expect(errors.length).toBe(3);
    expect(errors.at(0).text()).toBe(actualValidationErrorMessage);
    expect(errors.at(1).text()).toBe(targetValidationErrorMessage);
    expect(errors.at(2).text()).toBe(motcValidationErrorMessage);
    expect(wrapper.find(CommissionDisplay).length).toBe(0);
  });

  it("should show commission if it can be calculated", () => {
    const props = {
      setActualAction: () => {},
      setTargetAction: () => {},
      setMotcAction: () => {},
      actualValidationState: "success",
      targetValidationState: "success",
      motcValidationState: "success",
      commission: 120
    };
    const wrapper = shallow(<CommissionCalculatorContainer {...props} />);
    const errors = wrapper.find("div");
    expect(errors.length).toBe(0);
    expect(wrapper.find(CommissionDisplay).length).toBe(1);
    expect(wrapper.find(CommissionDisplay).props().value).toBe(props.commission);
  });
});
