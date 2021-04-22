import { Map } from "../../atoms";

function MapPage(props) {
    const styles = props.styles
        ? props.styles
        : "h-screen antialiased bg-gray-200";

    return (
        <div className={"map-page " + styles}>
            <Map />
        </div>
    );
}

export default MapPage;
