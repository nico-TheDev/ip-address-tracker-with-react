import React, { createContext, useState, useEffect } from "react";
import GEO from "../api/geo.instance";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        GEO.get('v1')
            .then((res) => {
                console.log(res.data);
                setLocation(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <LocationContext.Provider
            value={{ location, setLocation }}
        >
            {children}
        </LocationContext.Provider>
    );
};

const useLocation = () => React.useContext(LocationContext);

export { LocationProvider, useLocation };
