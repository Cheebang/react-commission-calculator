import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const CommissionInputField = props => (
  <FormGroup validationState={props.validationState}>
    <ControlLabel>{`${props.label}: `}</ControlLabel>
    <FormControl type="number" onChange={props.onChange} />
    <FormControl.Feedback />
  </FormGroup>
);

CommissionInputField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validationState: PropTypes.string.isRequired
};

export default CommissionInputField;
