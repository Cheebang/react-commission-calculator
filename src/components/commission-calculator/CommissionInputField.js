import React from "react";
import PropTypes from "prop-types";

const CommissionInputField = props => (
  <div>
    <label>{`${props.label}: `}</label>
    <input type="number" onChange={props.onChange} />
  </div>
);

CommissionInputField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CommissionInputField;
