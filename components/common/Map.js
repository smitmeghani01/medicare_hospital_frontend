import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: props.lat, lng:props.lng  }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  </GoogleMap>
))

export default MyMapComponent