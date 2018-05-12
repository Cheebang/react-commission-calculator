import React from "react";
import { connect } from "react-redux";

import {
  setActual,
  setTarget,
  setMotc
} from "../../actions/commissionCalculatorActions";
import { getCommission } from "../../reducers/commissionCalculatorReducer";
import CommissionInputField from "./CommissionInputField";

export const CommissionCalculatorContainer = props => {
  const { setActualAction, setTargetAction, setMotcAction, commission } = props;
  return (
    <form>
      <CommissionInputField label="Actual" onChange={setActualAction} />
      <CommissionInputField label="Target" onChange={setTargetAction} />
      <CommissionInputField label="MOTC" onChange={setMotcAction} />
      <div>Commission: {commission}</div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    commission: getCommission(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActualAction: event => dispatch(setActual(event.target.value)),
    setTargetAction: event => dispatch(setTarget(event.target.value)),
    setMotcAction: event => dispatch(setMotc(event.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CommissionCalculatorContainer
);
