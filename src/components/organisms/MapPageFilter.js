import { SelectFilter, YearFilter } from "../atoms";

function MapPageFilter(props) {
    const styles = props.styles
        ? props.styles
        : "flex flex-col bg-white relative z-10 xl:max-w-md p-7 rounded-b-md";

    return (
        <div className={"map-page-filter " + styles}>
            <YearFilter
                startYear={props.startCalcPeriod}
                endYear={props.endCalcPeriod}
                title="Период расчета"
                onChangeStart={props.setStartCalcPeriod}
                onChangeEnd={props.setEndCalcPeriod}
            />
            <SelectFilter
                title="Тип работы"
                options={props.workTypes}
                onSelect={props.setWorkType}
                value={props.workType}
            />
        </div>
    );
}

export default MapPageFilter;
