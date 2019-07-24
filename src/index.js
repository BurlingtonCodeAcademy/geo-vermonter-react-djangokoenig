import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
ReactDOM.render(	
  <h1>Hello World!</h1>,	
 document.getElementById('root')
) 

var fs = require('fs');
var http = require('http');
var mime = require('mime-types');

var port = process.env.PORT || 5000;
http.createServer(function (request, response) {
  let contentType = 'text/plain';
  let data;
  let path = request.url;

  if (path === '/') {
    file = 'index.html';
  }

  else if (path.indexOf('.') === -1) {
    file = 'index.html';
  }

  else {
    file = '.' + decodeURIComponent(request.url);
  }

  try {
    if (file) {
      console.log('Serving ' + file);
      data = fs.readFileSync(file);
      contentType = mime.lookup(file);
    }
  } catch (error) {
    console.log(error);

    data = "Error: " + error.toString();
    response.statusCode = 404;
  }

  response.setHeader('Content-Type', contentType + '; charset=utf-8');
  response.write(data);
  response.end();
}).listen(port);

console.log("Listening on port " + port);

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;

componentDidMount() {
  this.marker = L.marker(this.props.markerPosition).addTo(this.map);
}

componentDidUpdate({ markerPosition }) {
  // check if position has changed 
  if (this.props.markerPosition !== markerPosition) {
    this.marker.setLatLng(this.props.markerPosition);
  }
}

componentDidMount() {
  // add layer
  this.layer = L.layerGroup().addTo(this.map);
}



updateMarkers(markersData) {
  this.layer.clearLayers();
  markersData.forEach(marker => {
    L.marker(
      marker.latLng,
      { title: marker.title }
      ).addTo(this.layer);
    });
  }
  
componentDidMount() {
    // add layer
  this.layer = L.layerGroup().addTo(this.map);
  this.updateMarkers(this.props.markersData);
  }

componentDidUpdate({ markersData }) {
    // check if data has changed
    if (this.props.markersData !== markersData) {
    this.updateMarkers(this.props.markersData);
    }
  }  


  ReactDOM.render(element, document.getElementById('root'));