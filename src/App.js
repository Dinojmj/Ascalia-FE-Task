import React, { Component } from "react";

import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";

class App extends Component {
  state = {
    date: new Date(),
    photo: ""
  };

  formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  changeDate = date => {
    this.setState({ date: date });
    this.getPhoto(this.formatDate(date));
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=swlRzIuhKxjcJwckaku9QGLgk1Ex2PbqafDNoLED`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=swlRzIuhKxjcJwckaku9QGLgk1Ex2PbqafDNoLED&date=${date}`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return(

      <div class="main-container">
        <h1>NASA's Astronomy picture of the day</h1>
        <div class="date-picker-container">
        <DateInput
          changeDate={this.changeDate}
          date={this.state.date}
        />
        </div>
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default App;