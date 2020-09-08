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

function checkDomain(domain) {
    if (
        /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(
            domain
        )
    ) {
        return true;
    }
    return false;
}

export default function Search() {
    const { setLocation } = useLocation();
    const [input, setInput] = useState("");
    const [hasError, setHasError] = useState({
        error: false,
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input !== "") {
            setHasError({
                error: false,
                message: "",
            });
            setLocation(null);
            if (checkIP(input)) {
                GEO.get("v1", {
                    params: {
                        ipAddress: input,
                    },
                })
                    .then((res) => {
                        setLocation(res);
                    })
                    .catch((err) => {
                        setHasError({
                            error: true,
                            message: `Please refresh the page (${err})`,
                        });
                    });
            } else if (checkDomain(input)) {
                GEO.get("v1", {
                    params: {
                        domain: input,
                    },
                })
                    .then((res) => {
                        setLocation(res.data);
                    })
                    .catch((err) =>
                        setHasError({
                            error: true,
                            message: `Please refresh the page (${err.status})`,
                        })
                    );
            } else {
                setHasError({
                    error: true,
                    message:
                        "Check if the input is a valid IP address or domain name",
                });
            }
        } else {
            setHasError({
                error: true,
                message: "Please don't leave the input blank",
            });
        }
    };

    return (
        <div className="w-max-content mb-6">
            <form
                className="mx-auto block w-90 flex md:w-2/5"
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
            <p
                className={`text-white text-md rounded-md mb-2 bg-red-600 mx-auto w-90 md:w-2/5 px-4 py-2 ${
                    hasError.error ? "block" : "hidden"
                }`}
            >
                {hasError.message}
            </p>
        </div>
    );
}
