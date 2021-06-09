import { useState } from "react";
import { Map } from "../../atoms";
import { MapPageFilter } from "../../organisms";

function MapPage(props) {
    const styles = props.styles ? props.styles : "antialiased bg-gray-200";

    const workTypes = [
        {
            id: 0,
            value: "build",
            text: "Стройка",
        },
        {
            id: 1,
            value: "repair",
            text: "Ремонт",
        },
    ];
    const [startCalcPeriod, setStartCalcPeriod] = useState(2014);
    const [endCalcPeriod, setEndCalcPeriod] = useState(2020);
    const [workType, setWorkType] = useState(workTypes[0].value);

    return (
        <div className={"map-page " + styles}>
            <MapPageFilter
                workTypes={workTypes}
                startCalcPeriod={startCalcPeriod}
                endCalcPeriod={endCalcPeriod}
                workType={workType}
                setStartCalcPeriod={setStartCalcPeriod}
                setEndCalcPeriod={setEndCalcPeriod}
                setWorkType={setWorkType}
            />
            <Map
                startYear={startCalcPeriod}
                endYear={endCalcPeriod}
                workType={workType}
            />
        </div>
    );
}

export default MapPage;
