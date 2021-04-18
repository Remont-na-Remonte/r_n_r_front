import { MainRouter } from "./components/routers";
import { MapPage } from "./components/pages";
import { Redirect } from "react-router";

function App() {
    const forRouting = [
        {
            linkTo: "/map",
            component: <MapPage />,
        },
        {
            linkTo: "/analytics",
            component: <MapPage />,
        },
        {
            linkTo: "/about",
            component: <MapPage />,
        },
    ];
    return (
        <div className="app">
            <Redirect from="/" to="/map" />
            <MainRouter forRouting={forRouting} />
        </div>
    );
}

export default App;
