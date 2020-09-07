import React from "react";
import Search from "./Search";
import Card from "./Card";

export default function Head() {
    return (
        <div className='h-40 py-8 bg-pattern'>
            <h1 className="text-center font-normal mb-4 text-2xl text-white">
                IP Address Tracker
            </h1>
            <Search/>
            <Card/>
        </div>
    );
}
