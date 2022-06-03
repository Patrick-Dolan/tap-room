import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price}</p>
        <p>Alcohol Content: {props.alcoholContent}%</p>
        <p>Pints: {props.pints} Remaining</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Keg;