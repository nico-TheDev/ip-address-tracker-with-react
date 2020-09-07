import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import { useLocation } from "../contexts/LocationContext";

export default function MapImage() {
    const { location } = useLocation();
    const [position, setPosition] = useState(null);
    const zoom = 13;

    useEffect(() => {
        if (location) {
            setPosition([location.location.lat, location.location.lng]);
        }
    }, [location]);

    return (
        <Map
            center={position}
            zoom={zoom}
            className="h-screen md:h-60 relative z-0"
            zoomControl={false}
            dragging
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomleft" />
            <Marker position={position}>
                <Popup>Target Location</Popup>
            </Marker>
        </Map>
    );
}
