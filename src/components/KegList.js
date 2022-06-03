import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {

  return (
    <React.Fragment>
      {props.kegList.map((keg) => 
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;