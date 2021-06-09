function SelectFilter(props) {
    const styles = props.styles ? props.styles : "mt-7";
    const defaultOnSelect = (e) => {
        console.log(e);
    };
    const options = props.options ? props.options : [];
    const title = props.title ? props.title : "";
    const onSelect = props.onSelect ? props.onSelect : defaultOnSelect;
    const titleStyle = props.titleStyle
        ? props.titleStyle
        : "font-bold text-lg";

    const handleChange = (e) => {
        const value = e.target.value;
        onSelect(value);
    };

    return (
        <div className={"select-filter " + styles}>
            <p className={titleStyle}>{title}</p>
            <select
                className="bg-white mt-2 border-2 border-gray-300"
                onChange={(e) => handleChange(e)}
            >
                {options.map((o) => {
                    return (
                        <option key={o.id} value={o.value}>
                            {o.text}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default SelectFilter;
