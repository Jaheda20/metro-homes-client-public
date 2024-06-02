import { FiMapPin } from "react-icons/fi";
import { Marker, Popup } from "react-leaflet";

const Pin = ({ properties }) => {
    return (
        <>
            {properties.map(property => (
                <Marker key={property._id} position={[property.latitude, property.longitude]}>
                    <Popup>
                        <div className="flex flex-col h-36 items-center">
                            <img src={property.image} alt={property.title} className="w-20 h-20 object-cover mb-2" />
                            <div className="flex flex-col items-center space-y-0">
                                <h3 className="font-semibold mb-0">{property.title}</h3>
                                <p className="text-sm">${property.min_price} - ${property.max_price}</p>
                                <p className="text-sm flex items-center"><FiMapPin className="mr-1" />{property.location}</p>
                            </div>



                        </div>
                    </Popup>
                </Marker>
            ))}

        </>

    );
};

export default Pin;