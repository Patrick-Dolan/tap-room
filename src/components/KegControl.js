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

  handleDecrementingPintsSold = kegId => {
    //Find and change value on selected keg
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === kegId )[0];
    if (selectedKeg.pints === 0) { return; }
    const changedKeg = {...selectedKeg, pints: selectedKeg.pints - 1};
    //Build and set new mainKegList
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== kegId ).concat(changedKeg);
    this.setState({
      mainKegList: newMainKegList
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} />
      buttonText="Return to Keg List";
    } else if (this.state.formVisible) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText="Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegDetailsSelection={this.handleChangingSelectedKeg} onDecrementingPints={this.handleDecrementingPintsSold} />
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