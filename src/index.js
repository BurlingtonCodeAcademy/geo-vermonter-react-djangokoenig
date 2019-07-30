import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map.js";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      startPosition: {
        lat: 44.4759,
        lng: -73.2121
      },
      checked: false
    };
    this.handleMove = this.handleMove.bind(this);
  }
  
  handleMove(direction) {
    let newLat;
    if (direction === "north") {
      newLat = this.state.startPosition.lat + 0.0001;
    } else if (direction === "south") {
      newLat = this.state.startPosition.lat - 0.0001;
    }
    
    this.setState({
      startPosition: {
        lat: newLat,
        lng: this.state.startPosition.lng
      }
    });
  }

  // setLatLng(<LatLng> latlng) Changes the marker position to the given point.
  
  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => this.handleMove("north")}
            style={{ fontSize: "30px" }}
            >
            North
          </button>
          <button
            onClick={() => this.handleMove("south")}
            style={{ fontSize: "30px" }}
            >
            South
          </button>
        </div>
        <Map
          markerPosition={this.state.startPosition}
          />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));