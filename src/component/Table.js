import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
const TYPE_COLORS = {
    "0": "#48BEFF",
    "1": "#3DFAFF",
    "2": "#43C59E",
    "3": "#3D7068",
    "4": "#14453D",
}

const columns = [
    { field: 'index', headerName: '#', width: 70 },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'fullname', headerName: 'Name', width: 170 },
    { field: 'wallet1', headerName: 'Wallet-1', width: 170 },
    { field: 'wallet2', headerName: 'Wallet-2', width: 170 },
    { field: 'wallet3', headerName: 'Wallet-3', width: 170 },
];
export default function Table({ data = [], pageSize = 5, rowsPerPageOptions = [5] }) {
    const getTableData = (rows) => {
        return rows.map(val => {
            val.id = val.index;
            return val;
        })
    }
    return <Box sx={{ height: 400, width: '100%' }}><DataGrid
        rows={getTableData(data)}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        checkboxSelection
    /></Box>
}