import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends Component {

  state = {
    lat: null,
    long: null,
    errMessage: '',
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      (err) => this.setState({ errMessage: err.message })
    )
  }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div><h1>User Blocked Location</h1></div>
    }

    if (!this.state.errMessage && this.state.lat) {
      return (
        <SeasonDisplay
          lat={this.state.lat}
          long={this.state.long}
          err={this.state.error}
        />
      )
    }
    return <Loader message={"Please accept location request"}/>
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default App;
