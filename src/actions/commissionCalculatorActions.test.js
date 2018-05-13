import React from "react";

import { ACTION_TYPES, setActual, setTarget, setMotc } from "./commissionCalculatorActions";

describe("Commission Calculator Actions", () => {
  it("should have an action to set the actual value", () => {
    const expected = { type: ACTION_TYPES.SET_ACTUAL, payload: "actual" };
    expect(setActual("actual")).toEqual(expected);
  });

  it("should have an action to set the target value", () => {
    const expected = { type: ACTION_TYPES.SET_TARGET, payload: "target" };
    expect(setTarget("target")).toEqual(expected);
  });

  it("should have an action to set the MOTC value", () => {
    const expected = { type: ACTION_TYPES.SET_MOTC, payload: "motc" };
    expect(setMotc("motc")).toEqual(expected);
  });
});
