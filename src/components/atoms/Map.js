import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";

// Viewport settings
const INITIAL_VIEW_STATE = {
    longitude: 37.6174943,
    latitude: 55.7504461,
    zoom: 5,
    pitch: 0,
    bearing: 0,
};

const REACT_APP_MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoiazA1bTBuYXZ0IiwiYSI6ImNraW12NGprNzBnazMyeW81Ymt1b3A2MDMifQ.uKBkUB2jRNAVTn-xY2rjyQ";

function Map(props) {
    return (
        <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
            <StaticMap
                mapStyle="mapbox://styles/k05m0navt/ckio21zd12m3k17m3zkbskyqo"
                mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
            />
        </DeckGL>
    );
}

export default Map;
