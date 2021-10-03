import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.css'

const Maps: React.FC = ()  => {
    return (
      <MapContainer
        center={[31, 31]}
        zoom={13}
        scrollWheelZoom={false}
        className="MainMap"
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[31, 31]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    );
}

export default Maps;