import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchTableData } from "../store/actions";
import Table from "../component/Table";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function MainPage() {
    const dispatch = useDispatch()
    const items = useSelector(({ root }) => root.tabledata);
    const [type, setType] = useState([]);
    const inputProps = {
        'aria-label': 'Checkbox A',
    }
    const getData = () => {
        dispatch(fetchTableData());
    }
    const handleChange = (e) => {
        const target = e.target;
        if (target.value === 'null' && !target.checked) {
            setType([]);
            return;
        }
        if (target.checked) {
            if (!isNaN(parseInt(target.value)))
                setType([...new Set([...type, parseInt(target.value)])])
        } else {
            setType([...new Set([...type.filter(val => val !== target.value)])])
        }
    }
    const filterData = (data) => {
        if (type.length) return data.filter(val => type.indexOf(val.type) > -1);
        return data;

    }
    useEffect(getData, []);
    return <div>
        <div className="padding">
            <FormControlLabel
                label="All"
                control={
                    <Checkbox label="All" inputProps={inputProps} onChange={handleChange} value="null" />
                }
            />
            <FormControlLabel
                label="Type 0"
                control={
                    <Checkbox label="Type 0" inputProps={inputProps} onChange={handleChange} value="0" />
                }
            />
            <FormControlLabel
                label="Type 1"
                control={
                    <Checkbox label="Type 1" inputProps={inputProps} onChange={handleChange} value="1" />

                }
            />
            <FormControlLabel
                label="Type 2"
                control={
                    <Checkbox label="Type 2" inputProps={inputProps} onChange={handleChange} value="2" />

                }
            />
            <FormControlLabel
                label="Type 3"
                control={
                    <Checkbox label="Type 3" inputProps={inputProps} onChange={handleChange} value="3" />
                }
            />
            <FormControlLabel
                label="Type 4"
                control={
                    <Checkbox label="Type 4" inputProps={inputProps} onChange={handleChange} value="4" />
                }
            />
        </div>
        <Table data={filterData(items)} />
    </div>;
}