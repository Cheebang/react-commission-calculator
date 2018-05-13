import React from "react";

import {
  ACTION_TYPES,
  setActual,
  setTarget,
  setMotc
} from "./commissionCalculatorActions";

describe("Commission Calculator Actions", () => {
  it("should have an action to set the actual value", () => {
    expect(setActual("actual")).toEqual({
      type: ACTION_TYPES.SET_ACTUAL,
      payload: "actual"
    });
  });

  it("should have an action to set the target value", () => {
    expect(setTarget("target")).toEqual({
      type: ACTION_TYPES.SET_TARGET,
      payload: "target"
    });
  });

  it("should have an action to set the MOTC value", () => {
    expect(setMotc("motc")).toEqual({
      type: ACTION_TYPES.SET_MOTC,
      payload: "motc"
    });
  });
});
