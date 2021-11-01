import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    return (
      <div>
        <Loading message={"Please allow your location"} />
      </div>
    );
  }
  render() {
    return <div className="">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
