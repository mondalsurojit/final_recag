import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OfficialStoresMap = () => {
    return (
        <MapContainer 
            className="leaflet z-0 [&_.leaflet-tile-pane]:saturate-[.3] mt-5 h-[310px] rounded-md bg-slate-200"
            center={[-6.2425342, 106.8626478]} 
            zoom={13} 
            id="map"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default OfficialStoresMap;
