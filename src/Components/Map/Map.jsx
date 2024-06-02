import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './map.css'
import 'leaflet/dist/leaflet.css'
import Pin from "./Pin";

const Map = ({properties}) => {
    return (
        <MapContainer center={[60.1282, 18.6435]
        } zoom={5} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Pin properties={properties} ></Pin>
           
            
        </MapContainer>
    )
};

export default Map;