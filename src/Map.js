import React from "react";
import L from "leaflet";
import borderdata from "./border";

export default class Map extends React.Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: this.props.markerPosition,
      zoom: 18,
      zoomControl: false
    });

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17
      }
    ).addTo(this.map);
    this.marker = L.marker(this.props.markerPosition);
    this.borderdata = L.geoJSON(borderdata);
    console.log(this.borderdata.getBounds());
    this.marker.addTo(this.map);
    this.borderdata.addTo(this.map);
  }

  componentDidUpdate({ markerPosition }) {
    console.log(`MarkerPosition:`, this.props.markerPosition)
    if (this.props.markerPosition !== markerPosition) {
      // this.marker.setLatLng(this.props.markerPosition);
      this.map.panTo(this.props.markerPosition)
    }
  }

  render() {
    return <div style={{ height: "650px", width: "50%", margin: "auto" }} id="map" />;
  }
}
