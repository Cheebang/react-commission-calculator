import React from "react";

import { ACTION_TYPES } from "../actions/commissionCalculatorActions";
import commissionCalculatorReducer, {
  getCommission,
  getMatchingRange,
  ranges,
  getActualValidationState,
  getTargetValidationState,
  getMotcValidationState
} from "./commissionCalculatorReducer";

describe("Commission Calculator Reducer", () => {
  const payload = 1;
  it("should reduce for SET_ACTUAL", () => {
    expect(commissionCalculatorReducer({}, { type: ACTION_TYPES.SET_ACTUAL, payload })).toEqual({ actual: payload });
  });

  it("should reduce for SET_TARGET", () => {
    expect(commissionCalculatorReducer({}, { type: ACTION_TYPES.SET_TARGET, payload })).toEqual({ target: payload });
  });

  it("should reduce for SET_MOTC", () => {
    expect(commissionCalculatorReducer({}, { type: ACTION_TYPES.SET_MOTC, payload })).toEqual({ motc: payload });
  });

  it("should calculate commission correctly", () => {
    const state = { commissionCalculatorReducer: { actual: 210, target: 100, motc: 5000 } };
    expect(getCommission(state)).toBe(12750);

    state.commissionCalculatorReducer = { actual: 100, target: 100, motc: 5000 };
    expect(getCommission(state)).toBe(5000);

    state.commissionCalculatorReducer = { actual: 79, target: 100, motc: 5000 };
    expect(getCommission(state)).toBe(0);
  });

  it("should get matching range based on achievement", () => {
    expect(getMatchingRange(0)).toBe(ranges[0]);
    expect(getMatchingRange(0.79)).toBe(ranges[0]);
    expect(getMatchingRange(0.8)).toBe(ranges[1]);
    expect(getMatchingRange(0.9999999)).toBe(ranges[1]);
    expect(getMatchingRange(1)).toBe(ranges[2]);
    expect(getMatchingRange(1.99)).toBe(ranges[2]);
    expect(getMatchingRange(2)).toBe(ranges[3]);
    expect(getMatchingRange(2.99)).toBe(ranges[3]);
    expect(getMatchingRange(3)).toBe(ranges[4]);
    expect(getMatchingRange(99.99)).toBe(ranges[4]);
  });

  it("should get actual field's validation state", () => {
    const state = { commissionCalculatorReducer: { actual: 1 } };
    expect(getActualValidationState(state)).toBe("success");

    state.commissionCalculatorReducer.actual = 0;
    expect(getActualValidationState(state)).toBe("success");

    state.commissionCalculatorReducer.actual = -1;
    expect(getActualValidationState(state)).toBe("error");

    state.commissionCalculatorReducer.actual = "";
    expect(getActualValidationState(state)).toBe("error");
  });

  it("should get target field's validation state", () => {
    const state = { commissionCalculatorReducer: { target: 1 } };
    expect(getTargetValidationState(state)).toBe("success");

    state.commissionCalculatorReducer.target = 0;
    expect(getTargetValidationState(state)).toBe("error");

    state.commissionCalculatorReducer.target = -1;
    expect(getTargetValidationState(state)).toBe("error");

    state.commissionCalculatorReducer.target = "";
    expect(getTargetValidationState(state)).toBe("error");
  });

  it("should get MOTC field's validation state", () => {
    const state = { commissionCalculatorReducer: { motc: 1 } };
    expect(getMotcValidationState(state)).toBe("success");

    state.commissionCalculatorReducer.motc = 0;
    expect(getMotcValidationState(state)).toBe("error");

    state.commissionCalculatorReducer.motc = -1;
    expect(getMotcValidationState(state)).toBe("error");

    state.commissionCalculatorReducer.motc = "";
    expect(getMotcValidationState(state)).toBe("error");

    state.commissionCalculatorReducer.motc = 10000;
    expect(getMotcValidationState(state)).toBe("success");

    state.commissionCalculatorReducer.motc = 10001;
    expect(getMotcValidationState(state)).toBe("error");
  });
});
