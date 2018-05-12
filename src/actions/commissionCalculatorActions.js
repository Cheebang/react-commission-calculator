export const ACTION_TYPES = {
  SET_ACTUAL: "SET_ACTUAL",
  SET_TARGET: "SET_TARGET",
  SET_MOTC: "SET_MOTC"
};

export const setActual = payload => {
  return { type: ACTION_TYPES.SET_ACTUAL, payload };
};

export const setTarget = payload => {
  return { type: ACTION_TYPES.SET_TARGET, payload };
};

export const setMotc = payload => {
  return { type: ACTION_TYPES.SET_MOTC, payload };
};
