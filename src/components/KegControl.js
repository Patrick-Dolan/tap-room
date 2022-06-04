import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import { Button, Container } from "react-bootstrap";

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
    const newMainKegList = this.state.mainKegList.map((element) => {
      if (element.id === kegId && element.pints >= 1) {
        const keg = {...element, pints: element.pints - 1}
        return keg;
      } 
      return element;
    });
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
        <Container>
          {currentlyVisibleState}
          <Button variant="primary" className="w-100" onClick={this.handleClick}>{buttonText}</Button>{" "}
        </Container>
      </React.Fragment>
    );
  }
}

export default KegControl;