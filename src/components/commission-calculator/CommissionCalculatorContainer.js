import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setActual, setTarget, setMotc } from "../../actions/commissionCalculatorActions";
import {
  getCommission,
  getActualValidationState,
  getTargetValidationState,
  getMotcValidationState
} from "../../reducers/commissionCalculatorReducer";
import CommissionInputField from "./CommissionInputField";
import CommissionDisplay from "./CommissionDisplay";

export const actualValidationErrorMessage = "Actual must be a postive number";
export const targetValidationErrorMessage = "Target must be a number greater than 0";
export const motcValidationErrorMessage = "MOTC must be greater than 0 and less than 10,000";

export const CommissionCalculatorContainer = props => {
  const actualValid = props.actualValidationState === "success";
  const targetValid = props.targetValidationState === "success";
  const motcValid = props.motcValidationState === "success";
  const showCommission = actualValid && targetValid && motcValid;

  return (
    <form>
      <CommissionInputField
        label="Actual"
        onChange={props.setActualAction}
        validationState={props.actualValidationState}
      />
      <CommissionInputField
        label="Target"
        onChange={props.setTargetAction}
        validationState={props.targetValidationState}
      />
      <CommissionInputField label="MOTC" onChange={props.setMotcAction} validationState={props.motcValidationState} />
      {!actualValid && <div>{actualValidationErrorMessage}</div>}
      {!targetValid && <div>{targetValidationErrorMessage}</div>}
      {!motcValid && <div>{motcValidationErrorMessage}</div>}
      {showCommission && <CommissionDisplay value={props.commission} />}
    </form>
  );
};

CommissionCalculatorContainer.propTypes = {
  commission: PropTypes.number,
  setActualAction: PropTypes.func.isRequired,
  setTargetAction: PropTypes.func.isRequired,
  setMotcAction: PropTypes.func.isRequired,
  actualValidationState: PropTypes.string,
  targetValidationState: PropTypes.string,
  motcValidationState: PropTypes.string
};

const mapStateToProps = state => {
  return {
    actualValidationState: getActualValidationState(state),
    targetValidationState: getTargetValidationState(state),
    motcValidationState: getMotcValidationState(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(CommissionCalculatorContainer);
