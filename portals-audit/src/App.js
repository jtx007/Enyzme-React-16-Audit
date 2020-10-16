import React, { Component } from "react";

import Modal from "./Modal";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false,
    };
  }
  toggleModal = () => {
    this.setState(prevState => ({
      isShowing: !prevState.isShowing
    }))
  }

  // openModalHandler = () => {
  //   this.setState({
  //     isShowing: true,
  //   });
  // };

  // closeModalHandler = () => {
  //   this.setState({
  //     isShowing: false,
  //   });
  // };

  render() {
    return (
      <div>
        {this.state.isShowing ? (
          <div onClick={this.toggleModal} className="back-drop"></div>
        ) : null}

        <button className="open-modal-btn" onClick={this.toggleModal}>
          Open Modal
        </button>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.toggleModal}
        >
          Maybe aircrafts fly very high because they don't want to be seen in
          plane sight?
        </Modal>
      </div>
    );
  }
}

export default App;
