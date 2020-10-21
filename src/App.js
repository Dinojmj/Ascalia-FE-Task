import React, { Component } from "react";

import DateInput from "./components/DateInput";
import Photo from ".components/Photo.js"

class App extends Component {
  state = {
    date: "",
    photo ""
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.targer[0].value;
    this.setState({date: dateFromInput});
    this.getPhoto(dateFromInput);
  };

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=swlRzIuhKxjcJwckaku9QGLgk1Ex2PbqafDNoLED')
      .then(response => response.json())
      .then(json => this.setState({photo: json}));
  };

  getPhoto = date => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=swlRzIuhKxjcJwckaku9QGLgk1Ex2PbqafDNoLED&date=${date}')
      .then(response => response.json())
      .then(photoData => this.setState({photo: photoData}));
  };

  render() {
    return(

      <div>
        <h1>Astronomy picture of the day</h1>
        <h2>by NASA</h2>
        <dateInput changeDate={this.changeDAte} />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default App;