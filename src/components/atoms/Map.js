import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import { useState, useEffect } from "react";

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
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const fileName = `${props.workType}_${props.startYear}_${props.endYear}.json`;
            await fetch("dissected/" + fileName, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    setData(myJson);
                });
        };
        getData();
    }, [props.startYear, props.endYear, props.workType]);

    const hexToRGB = (hex) => {
        hex = "0x" + hex.substring(1);
        const r = (hex >> 16) & 0xff;
        const g = (hex >> 8) & 0xff;
        const b = hex & 0xff;
        return [r, g, b];
    };

    const layers = [
        new GeoJsonLayer({
            id: "geojson",
            data: data,
            stroked: true,
            filled: false,
            lineWidthScale: 20,
            lineWidthMinPixels: 7,
            getLineColor: (d) => hexToRGB(d.properties.color),
            pickable: true,
            onClick: (d) => {
                props.onRoadClick(d);
            },
        }),
    ];

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
        >
            <StaticMap
                mapStyle="mapbox://styles/k05m0navt/ckio21zd12m3k17m3zkbskyqo"
                mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
            />
        </DeckGL>
    );
}

export default Map;
