import React from 'react'
import './css/main.css';
import Head from './components/Head';
import Map from './components/Map';

export default function App() {
    return (
        <main className='font-default'>
            <Head/>
            <Map/>
        </main>
    )
}
