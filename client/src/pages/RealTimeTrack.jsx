import React, { useCallback, useRef, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox ,DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const defaultLocation = { lat: -34.397, lng: 150.644 }; // Default to Sydney, Australia
const geoLocationTimeout = 10000; // 10 seconds

const Home = () => {
  const [searchBox, setSearchBox] = useState(null);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);
  const [isLoading, setIsLoading] = useState(true);
  const [directions, setDirections] = useState(null);
  const [destination, setDestination] = useState(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onSearchBoxLoad = useCallback((ref) => {
    setSearchBox(ref);
  }, []);

  const onPlacesChanged = useCallback(() => {
    if (!searchBox) return;
    const places = searchBox.getPlaces();
    if (places.length === 0) return;
    const newMarkers = places.map((place) => ({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }));
    setMarkers(newMarkers);
    const bounds = new window.google.maps.LatLngBounds();
    newMarkers.forEach((marker) => {
      bounds.extend(new window.google.maps.LatLng(marker.lat, marker.lng));
    });
    mapRef.current.fitBounds(bounds);
  }, [searchBox]);

  useEffect(() => {
    // Check Geolocation permission
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'denied') {
        // Geolocation permission is denied
        console.error('Error: Geolocation permission is denied.');
        setCurrentLocation(defaultLocation); // Set to default location if permission is denied
        setIsLoading(false);
      } else {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              setCurrentLocation(pos);
              setIsLoading(false);
            },
            (error) => {
              console.error('Error getting user location:', error);
              setCurrentLocation(defaultLocation); // Set to default location if getting current location fails
              setIsLoading(false);
            },
            {
              enableHighAccuracy: true,
              timeout: geoLocationTimeout,
            }
          );
        } else {
          // Browser doesn't support Geolocation
          console.error("Error: Your browser doesn't support geolocation.");
          setCurrentLocation(defaultLocation); // Set to default location if geolocation is not supported
          setIsLoading(false);
        }
      }
    });
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyB61t78UY4piRjSDjihdHxlF2oqtrtzw8U" libraries={['places']}>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ ...containerStyle, margin: 'auto' }}>
          <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
            <input
              type="text"
              placeholder="Search for a place"
              style={{
                boxSizing: 'border-box',
                border: '1px solid transparent',
                width: '300px',
                height: '32px',
                padding: '0 12px',
                borderRadius: '11px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                fontSize: '14px',
                outline: 'none',
                textOverflow: 'ellipsis',
                position: 'absolute',
                left: '50%',
                zIndex: '1',
                marginLeft: '50px',
                top: '80px',
              }}
            />
          </StandaloneSearchBox>
          {!isLoading && (
            <GoogleMap
              mapContainerStyle={{ width: '80%', height: '100%' }}
              center={currentLocation}
              zoom={10}
              onLoad={onLoad}
            >
              {currentLocation && <Marker position={currentLocation} />}
              {markers.map((marker, index) => (
                <Marker key={index} position={marker} />
              ))}
            </GoogleMap>
          )}
        </div>
      </div>
    </LoadScript>
  );
};

export default Home;