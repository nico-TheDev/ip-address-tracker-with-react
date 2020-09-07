import React from "react";
import { useLocation } from "../contexts/LocationContext";

export default function Card() {
    const { location } = useLocation();

    const details = [
        {
            label: "IP ADDRESS",
            value: location?.ip,
        },
        {
            label: "LOCATION?",
            value: `${location?.location?.city},${location?.location?.region} ${location?.location?.postalCode}`,
        },
        {
            label: "TIMEZONE",
            value: `UTC ${location?.location?.timezone}`,
        },
        {
            label: "ISP",
            value: location?.isp,
        },
    ];

    return !location ? (
        "Loading..."
    ) : (
        <ul className="relative z-10 bg-white rounded-lg shadow-lg text-gray-900 w-90 mx-auto px-4 py-6 text-center bg-cover bg-center md:grid md:grid-flow-col md:gap-4 md:px-8 md:min-h-ten md:items-center md:w-4/5">
            {details?.map((item) => (
                <li className="mb-3 md:text-left md:mb-0" key={item.label}>
                    <h3 className="text-xs text-gray-500 md:text-md">
                        {item.label}
                    </h3>
                    <p className="text-md font-semibold md:text-xl">
                        {item.value}
                    </p>
                </li>
            ))}
        </ul>
    );
}
