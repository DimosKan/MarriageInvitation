import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



function Maps() {
  const churchCoordinates = [37.976971849662014, 23.71866768343172];
  const gorgonaCoordinates = [38.03091702215209, 23.730775297027833];


  const churchIcon = new L.Icon({
    iconUrl: "https://static.vecteezy.com/system/resources/previews/023/554/762/non_2x/red-map-pointer-icon-on-a-transparent-background-free-png.png",
    iconSize: [64, 64],
  });

  return (
    <>
      <h3>Χάρτες</h3>
      <h4>Τοποθεσία ιερού ναού Αγίου Αθανασίου</h4>
      <MapContainer center={churchCoordinates} zoom={15} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={churchCoordinates} icon={churchIcon}>
          <Popup>
            Επταχάλκου 2, Αθήνα 
          </Popup>
        </Marker>
      </MapContainer>
      <h3>Τοποθεσία κέντρου "Η Γοργόνα"</h3>
      <MapContainer center={gorgonaCoordinates} zoom={15} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={gorgonaCoordinates} icon={churchIcon}>
          <Popup>
            Κυπρου 33, Νέα Χαλκηδόνα 
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Maps;