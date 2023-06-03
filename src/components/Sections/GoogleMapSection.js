import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';



const GoogleMapSection = () => {
    const containerStyle = {
      width: '100%',
      height: '400px',
    };
    
    const center = {
      lat: 7.38778, // Replace with the actual latitude of the address
      lng: 3.89639, // Replace with the actual longitude of the address
    };
    return ( 
        <>
           <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </>
     );
}
 
export default GoogleMapSection;