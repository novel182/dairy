import { Map, Marker } from "@vis.gl/react-google-maps"

const CustomMap = () => {
    return (
        <Map
            defaultZoom={16}
            center={{ lat: 27.6719, lng: 84.3920 }}
            className="w-[250px] h-[250px]"
        >
            <Marker position={{ lat: 27.671328041232677, lng: 84.39209168057951 }} />
        </Map>
    )
}

export default CustomMap