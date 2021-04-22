import { useState } from "react";
import { YearFilter } from "../atoms";

function MapPageFilter(props) {
    const styles = props.styles
        ? props.styles
        : "flex bg-white relative z-10 max-w-lg p-7";

    const [startCalcPeriod, setStartCalcPeriod] = useState(2010);
    const [endCalcPeriod, setEndCalcPeriod] = useState(2020);

    return (
        <div className={"map-page-filter " + styles}>
            <YearFilter
                startYear={startCalcPeriod}
                endYear={endCalcPeriod}
                title="Период расчета"
            />
        </div>
    );
}

export default MapPageFilter;
