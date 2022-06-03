import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [],
      formVisible: false,
      selectedKeg: null
    }
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisible: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddingNewKegToList = newKeg => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisible: false
    });
  }

  handleChangingSelectedKeg = kegId => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === kegId )[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} />
      buttonText="Return to Keg List";
    } else if (this.state.formVisible) {
      currentlyVisibleState = <NewKegForm onNewTicketCreation={this.handleAddingNewKegToList} />
      buttonText="Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText="Add Keg to Inventory";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;