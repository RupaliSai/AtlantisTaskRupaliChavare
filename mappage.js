// src/components/MapPage.js
import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useLocation, useHistory } from "react-router-dom";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const MapPage = () => {
  const location = useLocation();
  const history = useHistory();
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Predefined markers with dummy data
  const markers = [
    {
      id: 1,
      coordinates: [-74.0060, 40.7128],
      description: "Location 1",
    },
    // Add more markers as needed
  ];

  // Initialize the map
  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.0060, 40.7128],
      zoom: 12,
    });

    // Add markers to the map
    markers.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat(marker.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(`<div>${marker.description}</div>`)
        )
        .addTo(map);

      // Handle marker click
      map.on("click", `marker-${marker.id}`, () => {
        setSelectedMarker(marker);
        history.push("/details", { selectedMarker: marker });
      });
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};

export default MapPage;