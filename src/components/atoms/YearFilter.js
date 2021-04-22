function YearFilter(props) {
    const style = props.style ? props.style : "";
    const titleStyle = props.titleStyle ? props.titleStyle : "font-bold text-lg";
    const title = props.title ? props.title : "";
    const inputStyle = props.inputStyle
        ? props.inputStyle
        : "w-20 mr-5 border-2 border-black text-center";
    const startYear = props.startYear ? props.startYear : "0";
    const endYear = props.endYear ? props.endYear : "0";
    return (
        <div className={style}>
            <p className={titleStyle}>{title}</p>
            <div className="flex mt-2">
                <input className={inputStyle} type="text" value={startYear} />
                <input className={inputStyle} type="text" value={endYear} />
            </div>
        </div>
    );
}

export default YearFilter;
