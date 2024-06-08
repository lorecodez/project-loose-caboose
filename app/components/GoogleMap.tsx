'use client'
import React from 'react'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


export default function GoogleMap() {

  const position = {lat: 38.298976038338694, lng: -122.28184250794897}

  if(!process.env.NEXT_PUBLIC_MAP_KEY){
    return <p>error</p>
  }

  return (
    <div className='h-full w-full my-3'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
       <div className='h-96'>
          <Map center={position} zoom={16}>
            <Marker position={position} title={'Loose Caboose Napa Hobby Shop'}/>
          </Map>
       </div>
      </APIProvider>
    </div>
  )
}
