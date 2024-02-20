import * as React from 'react';
import { DashboardWrapper } from '../../components/DashboardWrapper';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: 'Product name', width: 130 },
    { field: 'brandName', headerName: 'Brand name', width: 130 },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 90,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 120,
    },
    {
        field: 'catagories',
        headerName: 'Catagories',
        width: 160,
    },
];

const rows = [
    { id: 1, productName: 'Snow', brandName: 'Jon', price: 350, quantity: 0, catagories: 'abc'},
    { id: 2, productName: 'Lannister', brandName: 'Cersei', price: 42, quantity: 0, catagories: 'abc' },
    { id: 3, productName: 'Lannister', brandName: 'Jaime', price: 45, quantity: 0, catagories: 'abc' },
    { id: 4, productName: 'Stark', brandName: 'Arya', price: 16, quantity: 0, catagories: 'abc' },
    { id: 5, productName: 'Targaryen', brandName: 'Daenerys', price: 25, quantity:0, catagories: 'abc' },
    { id: 6, productName: 'Melisandre', brandName: null, price: 15, quantity: 0, catagories: 'abc' },
    { id: 7, productName: 'Clifford', brandName: 'Ferrara', price: 44, quantity: 0, catagories: 'abc' },
    { id: 8, productName: 'Frances', brandName: 'Rossini', price: 36, quantity: 0, catagories: 'abc' },
    { id: 9, productName: 'Roxie', brandName: 'Harvey', price: 65, quantity: 0, catagories: 'abc' },
];

export function ProductsPage() {
    return <DashboardWrapper title="Products">
        <Paper style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Paper>
    </DashboardWrapper>
}