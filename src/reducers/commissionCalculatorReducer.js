import { ACTION_TYPES } from "../actions/commissionCalculatorActions";

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_ACTUAL:
      return { ...state, actual: payload };
    case ACTION_TYPES.SET_TARGET:
      return { ...state, target: payload };
    case ACTION_TYPES.SET_MOTC:
      return { ...state, motc: payload };
    default:
      return state;
  }
}

export const ranges = [
  { from: 0, to: 0.8, base: 0, rate: 0 },
  { from: 0.8, to: 1, base: 0.8, rate: 1 },
  { from: 1, to: 2, base: 1, rate: 1.5 },
  { from: 2, to: 3, base: 2.5, rate: 0.5 },
  { from: 3, to: 100, base: 3, rate: 0 }
];

export const getMatchingRange = achievement => {
  const matchingRange = ranges.filter(range => achievement >= range.from && achievement < range.to);
  return matchingRange.length ? matchingRange[0] : ranges[0];
};

export const getCommission = state => {
  const { actual, target, motc } = state.commissionCalculatorReducer;
  if (!actual || !target || !motc) {
    return 0;
  }

  let achievement = actual / target;
  if (achievement > 99.99) {
    achievement = 99.99;
  }
  const { from, base, rate } = getMatchingRange(achievement);

  const commissionRate = base + (achievement - from) * rate;
  return motc * commissionRate;
};

export const getActualValidationState = state => {
  const { actual } = state.commissionCalculatorReducer;
  return actual !== "" && actual >= 0 ? "success" : "error";
};

export const getTargetValidationState = state => {
  const { target } = state.commissionCalculatorReducer;
  return target && target > 0 ? "success" : "error";
};

export const getMotcValidationState = state => {
  const { motc } = state.commissionCalculatorReducer;
  return motc && motc > 0 && motc <= 10000 ? "success" : "error";
};
