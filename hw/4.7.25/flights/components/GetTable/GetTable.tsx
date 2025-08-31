import {Paper} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

export function GetTable(props){
    console.log(props)
    return <>
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    </>
}