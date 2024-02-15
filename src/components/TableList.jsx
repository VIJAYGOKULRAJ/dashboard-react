import { useState } from "react";

const TableList = ({ record, column }) => {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped table-light">
                        <thead>

                            <tr>{column.map((item) =>
                                <th>{item.heading}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {record.length ? record.map((item, index) =>
                                <TableRowContent item={item} index={index} column={column} />) : <></>}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const TableRowContent = ({ item, column, index }) => {
    const[value , setValue] = useState()
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <tr>
            {column.map((colItem) => {
                if (colItem.type === 'dropdown') {
                    return (
                        <td key={colItem.heading}>
                            <select className="dropdown-btn" onChange={handleChange} value={value}>
                                {colItem.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}``
                            </select>
                        </td>
                    );
                } else {
                    return (
                        colItem.value === '' ? <td key={colItem.heading}>{index + 1}</td> : <td key={colItem.heading}>{item[colItem.value]}</td>
                    );
                }
            })}
        </tr>
    )
};

export default TableList