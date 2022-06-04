import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h3>Keg Details</h3>
      <p><strong>Name: {keg.name}</strong></p>
      <p>Brand: {keg.brand}</p>
      <p>Alcohol Content: {keg.alcoholContent}%</p>
      <p>Pints: {keg.pints} Remaining</p>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;