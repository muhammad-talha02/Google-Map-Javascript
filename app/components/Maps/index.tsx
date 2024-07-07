'use client'
import React, { useEffect } from 'react'

const Maps = () => {

    useEffect(()=>{
    let map: google.maps.Map;
    async function initMap(): Promise<void> {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    
    
    }
    initMap();
    }, [])
  return (
    <div>
        <div id="map" className='w-screen h-[50vh]'>

        </div>
    </div>
  )
}

export default Maps