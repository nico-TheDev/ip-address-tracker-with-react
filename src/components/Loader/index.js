import React from "react";
import "./styles.css";

export default function Loader() {
    return (
        <div className='w-full flex justify-center'>
            <div className="lds-ripple">
                <div />
                <div />
            </div>
        </div>
    );
}
