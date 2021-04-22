import { Navbar } from "./components/organisms";
import { MainRouter } from "./components/routers";
import { MapPage, AboutUsPage } from "./components/pages";
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
            component: <AboutUsPage />,
        },
    ];

    const navButtons = [
        {
            link: "/map",
            text: "Карта",
        },
        {
            link: "/analytics",
            text: "Аналитика",
        },
        {
            link: "/about",
            text: "О нас",
        },
    ];

    const navLogo = (
        <svg width="42" height="46" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
            />
        </svg>
    );

    const navStyles = {
        bgColor: "bg-white",
        textColor: "text-gray-700",
        activeColor: "#DC2626",
        hoverColor: "border-indigo-600",
    };

    return (
        <div className="app">
            <Navbar styles={navStyles} buttons={navButtons} logo={navLogo} />
            <Redirect from="/" to="/map" />
            <MainRouter forRouting={forRouting} />
        </div>
    );
}

export default App;
