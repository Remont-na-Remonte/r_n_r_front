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

const REACT_APP_MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

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
