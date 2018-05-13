import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

const CommissionDisplay = props => (
  <div>
    Commission:
    <NumberFormat
      prefix={"$"}
      fixedDecimalScale={true}
      decimalScale={2}
      displayType="text"
      thousandSeparator={true}
      value={props.value}
    />
  </div>
);

CommissionDisplay.propTypes = { value: PropTypes.number };

export default CommissionDisplay;
