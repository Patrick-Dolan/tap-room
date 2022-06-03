import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {
  //Temp Data
  // const kegList = [
  //   {
  //     name: "ThunderBrew",
  //     brand: "Ol' Dwarvish",
  //     price: 5,
  //     alcoholContent: 12,
  //     pints: 100,
  //     id: "gerqgfgargretg"
  //   },
  //   {
  //     name: "ThunderBrew",
  //     brand: "Ol' Dwarvish",
  //     price: 5,
  //     alcoholContent: 12,
  //     pints: 100,
  //     id: "hsDfagerhgerhqeretg"
  //   }
  // ]
  
  return (
    <React.Fragment>
      {props.kegList.map((keg) => 
        <Keg
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
  kegList: PropTypes.array
}

export default KegList;