'use client'
import React, { useEffect, useState } from 'react'

const Maps = () => {
const [googleMap, setGoogleMap] = useState<google.maps.Map>()
    useEffect(()=>{
    let map: google.maps.Map;
    async function initMap(): Promise<void> {
      const { Map } = await google.maps.importLibrary("maps");
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 24.4539, lng: 54.3773 },
        zoom: 8,
        gmpDraggable: true,
        mapId:"6c69da475e7f7301s",
      });
    setGoogleMap(map)
    // const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    let marker:google.maps.Marker =new AdvancedMarkerElement({
      position:{ lat: 24.4539, lng: 54.3773 },
      map:map,
    })
      // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
    // let marker = new google.maps.Marker({
    //   position:{ lat: 24.4539, lng: 54.3773 },
    //   map:map,
      
    // })
    }
    initMap();
    }, [])

  return (
    <div>
        <div id="map" className='w-screen h-[90vh]'>

        </div>
    </div>
  )
}

export default Maps