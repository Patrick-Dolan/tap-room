import React from "react";
import KegList from "./KegList";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainKegList: []
    }
  }

  render() {


    return (
      <React.Fragment>
        <KegList kegList={this.state.mainKegList} />
      </React.Fragment>
    );
  }
}

export default KegControl;