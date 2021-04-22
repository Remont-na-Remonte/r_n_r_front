import { Map } from "../../atoms";
import { MapPageFilter } from "../../organisms";

function MapPage(props) {
    const styles = props.styles ? props.styles : "antialiased bg-gray-200";

    return (
        <div className={"map-page " + styles}>
            <MapPageFilter />
            <Map />
        </div>
    );
}

export default MapPage;
