import React, { useState } from "react";
import GEO from "../api/geo.instance";
import { useLocation } from "../contexts/LocationContext";

function checkIP(ip) {
    if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            ip
        )
    ) {
        return true;
    }
    return false;
}

export default function Search() {
    const { setLocation } = useLocation();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input !== "" && checkIP(input)) {
            GEO.get("v1", {
                params: {
                    ipAddress: input,
                },
            })
                .then((res) => {
                    console.log(input);
                    setLocation(res.data);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <form
            className="mx-auto block w-90 flex mb-6 md:w-2/5"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Search for any IP address or domain"
                className="flex-1 px-6 text-sm rounded-tl-lg rounded-bl-lg"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button className="color-red bg-black p-4 rounded-br-lg rounded-tr-lg hover:bg-gray-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="14"
                    className="fill-current"
                >
                    <path
                        fill="none"
                        stroke="#FFF"
                        strokeWidth="3"
                        d="M2 1l6 6-6 6"
                    />
                </svg>
            </button>
        </form>
    );
}
