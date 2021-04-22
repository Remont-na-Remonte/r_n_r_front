function YearFilter(props) {
    const defaultOnChange = (v) => {
        console.log(v);
    };
    const style = props.style ? props.style : "";
    const titleStyle = props.titleStyle
        ? props.titleStyle
        : "font-bold text-lg";
    const title = props.title ? props.title : "";
    const inputStyle = props.inputStyle
        ? props.inputStyle
        : "w-20 mr-5 border-2 border-gray-200 text-center";
    const startYear = props.startYear ? props.startYear : "0";
    const endYear = props.endYear ? props.endYear : "0";
    const onChangeStart = props.onChangeStart
        ? props.onChangeStart
        : defaultOnChange;

    const onChangeEnd = props.onChangeEnd ? props.onChangeEnd : defaultOnChange;

    return (
        <div className={style}>
            <p className={titleStyle}>{title}</p>
            <div className="flex mt-2">
                <input
                    onChange={(e) => onChangeStart(e.target.value)}
                    className={inputStyle}
                    type="text"
                    value={startYear}
                />
                <input
                    onChange={(e) => onChangeEnd(e.target.value)}
                    className={inputStyle}
                    type="text"
                    value={endYear}
                />
            </div>
        </div>
    );
}

export default YearFilter;
