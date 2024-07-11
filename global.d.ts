declare namespace google.maps {
    function importLibrary(libraryName: string): Promise<any>;
  }

  declare global {
    interface Window {
      google: typeof google;
    }
  }
  
  interface MapsLibrary {
    Map: typeof google.maps.Map;
  }
  interface MarkerLibrary {
    Map: typeof google.maps.Marker;
  }