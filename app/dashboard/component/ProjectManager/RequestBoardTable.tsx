import React,{useState} from 'react';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

// Define column definitions
const columns: GridColDef[] = [
    { field: 'employeeId', headerName: 'Employee ID', width: 100 },
    { field: 'teamLeaderName', headerName: 'Team Leader Name', width: 173 },
    { field: 'team', headerName: 'Team', },
    {
        field: 'jobPosition', headerName: 'Job Position', type: 'number',
        align: 'left',
        width: 160,
    },
    { field: 'CreationDate', headerName: 'Creation Date', type: 'number', width: 160, align: 'left', },
    {
        field: 'ViewTable',
        headerName: 'View',
        width: 70,
        renderCell: (params) => (
            <button className='hover:text-blue-500 text-muted' onClick={(e) => e.stopPropagation()}>
                <i className="fa fa-eye"></i>
            </button>
        )
    },
    {
        field: 'action',
        headerName: 'Action',
        type: 'number',
        align: 'center',
        renderCell: (params) => (
            <div>
                <button className="btn btnOutlineblue btn-sm mx-1 px-1" onClick={(e) => e.stopPropagation()}>
                    <CheckIcon className='text-[16px]' />
                </button>
                <button className=" btn btn-blue btn-sm px-1 mx-1" onClick={(e) => e.stopPropagation()}>
                    <CloseIcon className='text-[16px]' />
                </button>
            </div>
        )
    },
];

// Define rows data
const rows = [
    { id: 1, employeeId: '#EMP001', teamLeaderName: 'Eddard Stark', team: 'Stark', jobPosition: 'Lord', CreationDate: '13 Feb 2024', },
    { id: 2, employeeId: '#EMP001', teamLeaderName: 'Tywin Lannister', team: 'Lannister', jobPosition: 'Queen', CreationDate: '13 Feb 2024', },
    { id: 3, employeeId: '#EMP001', teamLeaderName: 'Tywin Lannister', team: 'Lannister', jobPosition: 'Kingsguard', CreationDate: '13 Feb 2024', },
    { id: 4, employeeId: '#EMP001', teamLeaderName: 'Eddard Stark', team: 'Stark', jobPosition: 'Assassin', CreationDate: '13 Feb 2024', },
    { id: 5, employeeId: '#EMP001', teamLeaderName: 'Aerys II', team: 'Targaryen', jobPosition: 'Queen', CreationDate: '13 Feb 2024', },
    { id: 6, employeeId: '#EMP001', teamLeaderName: 'Stannis Baratheon', team: 'Melisandre', jobPosition: 'Priestess', CreationDate: '13 Feb 2024', },
    { id: 7, employeeId: '#EMP001', teamLeaderName: 'Clifford', team: 'Ferrara', jobPosition: 'Leader', CreationDate: '13 Feb 2024', },
    { id: 8, employeeId: '#EMP001', teamLeaderName: 'Frances Rossini', team: 'Rossini', jobPosition: 'Manager', CreationDate: '13 Feb 2024', },
    { id: 9, employeeId: '#EMP001', teamLeaderName: 'Roxie Harvey', team: 'Harvey', jobPosition: 'Supervisor', CreationDate: '13 Feb 2024', },
];

// Define the DataTable component
const  DataTable=({handleRowSelection}:any)=> {
    return (
        <div style={{ width: '100%' }}>
             <DataGrid
                className='text-start requestBoradTable'
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10]}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                checkboxSelection
                onRowSelectionModelChange={handleRowSelection}
            />
        </div>
    );
}
export default DataTable
