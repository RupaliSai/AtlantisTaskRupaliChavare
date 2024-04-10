import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const marker = location.state?.selectedMarker;

  return (
    <div>
      {marker ? (
        <div>
          <h2>{marker.description}</h2>
          <p>Coordinates: {marker.coordinates.join(", ")}</p>
        </div>
      ) : (
        <p>No marker selected</p>
      )}
    </div>
  );
};

export default Details;