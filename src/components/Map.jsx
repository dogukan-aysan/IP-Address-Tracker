import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Loader from "./Loader";
import Error from "./Error";
import { Context } from "../context/context";

function Map() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localPosition, setLocalPosition] = useState([]);
  const { dispatch, searchedPosition } = useContext(Context);

  const displayedPosition =
    searchedPosition.length > 0 ? searchedPosition : localPosition;

  useEffect(() => {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLoading(false);
        setLocalPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }, [dispatch, searchedPosition]);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <>
      {localPosition.length > 0 && (
        <div className="map">
          <MapContainer
            style={{ height: "100%" }}
            center={displayedPosition}
            zoom={13}
            scrollWheelZoom={false}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={displayedPosition}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
}

export default Map;
