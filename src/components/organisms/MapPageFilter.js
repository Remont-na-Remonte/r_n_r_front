import { useState } from "react";
import { SelectFilter, YearFilter } from "../atoms";

function MapPageFilter(props) {
    const styles = props.styles
        ? props.styles
        : "flex flex-col bg-white relative z-10 max-w-lg p-7 rounded-b-md";

    const [startCalcPeriod, setStartCalcPeriod] = useState(2010);
    const [endCalcPeriod, setEndCalcPeriod] = useState(2020);

    const workTypes = [
        {
            id: 0,
            text: "Стройка",
        },
        {
            id: 1,
            text: "Ремонт дороги",
        },
    ];
    const [workType, setWorkType] = useState(workTypes[0].id);

    return (
        <div className={"map-page-filter " + styles}>
            <YearFilter
                startYear={startCalcPeriod}
                endYear={endCalcPeriod}
                title="Период расчета"
                onChangeStart={setStartCalcPeriod}
                onChangeEnd={setEndCalcPeriod}
            />
            <SelectFilter
                title="Тип работы"
                options={workTypes}
                onSelect={setWorkType}
                value={workType}
            />
        </div>
    );
}

export default MapPageFilter;
