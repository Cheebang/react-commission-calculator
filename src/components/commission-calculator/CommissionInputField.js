import React from "react";

const CommissionInputField = props => (
  <div>
    <label>{`${props.label}: `}</label>
    <input type="number" onChange={props.onChange} />
  </div>
);

export default CommissionInputField;
