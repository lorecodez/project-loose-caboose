'use client'
import React from 'react'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


export default function GoogleMap() {

  const position = {lat: 38.298976038338694, lng: -122.28184250794897}
  return (
    <div className='h-full'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
       <div className='h-96'>
          <Map center={position} zoom={10}>
            <Marker position={position} />
          </Map>
       </div>
      </APIProvider>
    </div>
  )
}
