import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Divisions = () => {
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
        '&:nth-of-type(4), &:nth-of-type(5), &:nth-of-type(6)': {
            backgroundColor: '#FFC000',
        },
        '&:nth-of-type(7), &:nth-of-type(8), &:nth-of-type(9)': {
            backgroundColor: '#0096FF',
        },
        '&:nth-of-type(10), &:nth-of-type(11), &:nth-of-type(12)': {
            backgroundColor: '#FF0000',
        },
        '&:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15)': {
            backgroundColor: '#FAF9F6',
        },
        '&:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18)': {
            backgroundColor: '#DAAA5E',
        },
        '&:nth-of-type(19), &:nth-of-type(20), &:nth-of-type(21)': {
            backgroundColor: '#D4D7D9',
        },
        '&:nth-of-type(22), &:nth-of-type(23), &:nth-of-type(24)': {
            backgroundColor: '#CD7F32',
        },
    }));

    useEffect(() => {
        fetch('https://matchow-001-site1.ltempurl.com/api/Divisions')
            .then(res => res.json())
            .then(data => {
                const divisionImages = data.map(item => item.divisionImage);
                setData3(divisionImages);
                setData4(data[7].teams);
                console.log(divisionImages);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Table sx={{ minWidth: 500 }} aria-label="customized table" style={{ width: '60%', margin: 'auto' }} className='bg-white'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>Division</StyledTableCell>
                        <StyledTableCell align="right">Team Name</StyledTableCell>
                        <StyledTableCell align="right">Team Captain</StyledTableCell>
                        <StyledTableCell align="right">Rating</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data4.map((teamRow, index) => (
                        <StyledTableRow>
                            <StyledTableCell><img src={data3[0]} alt="" className='w-4 h-4'/></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                Əfsanə
                            </StyledTableCell>
                            <React.Fragment key={index}>
                                <StyledTableCell align="right">{teamRow.name}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.teamCapitanUserName}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.rating}</StyledTableCell>
                            </React.Fragment>
                        </StyledTableRow>
                    ))}
                    {data4.map((teamRow, index) => (
                        <StyledTableRow className='bg-{#FF5733}'>
                             <StyledTableCell><img src={data3[1]} alt="" className='w-4 h-4'/></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                Çempion
                            </StyledTableCell>
                            <React.Fragment key={index}>
                                <StyledTableCell align="right">{teamRow.name}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.teamCapitanUserName}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.rating}</StyledTableCell>
                            </React.Fragment>
                        </StyledTableRow>
                    ))}
                    {data4.map((teamRow, index) => (
                        <StyledTableRow>
                             <StyledTableCell><img src={data3[2]} alt="" className='w-4 h-4'/></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                Kristal
                            </StyledTableCell>
                            <React.Fragment key={index}>
                                <StyledTableCell align="right">{teamRow.name}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.teamCapitanUserName}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.rating}</StyledTableCell>
                            </React.Fragment>

                        </StyledTableRow>
                    ))}
                    {data4.map((teamRow, index) => (
                        <StyledTableRow>
                             <StyledTableCell><img src={data3[3]} alt="" className='w-4 h-4'/></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                Elit
                            </StyledTableCell>
                            <React.Fragment key={index}>
                                <StyledTableCell align="right">{teamRow.name}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.teamCapitanUserName}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.rating}</StyledTableCell>
                            </React.Fragment>
                        </StyledTableRow>
                    ))}
                    {data4.map((teamRow, index) => (
                        <StyledTableRow>
                             <StyledTableCell><img src={data3[4]} alt="" className='w-4 h-4'/></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                Dəmir
                            </StyledTableCell>
                            <React.Fragment key={index}>
                                <StyledTableCell align="right">{teamRow.name}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.teamCapitanUserName}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.rating}</StyledTableCell>
                            </React.Fragment>
                        </StyledTableRow>
                    ))}
                    {data4.map((teamRow, index) => (
                        <StyledTableRow>
                             <StyledTableCell><img src={data3[5]} alt="" className='w-4 h-4'/></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                Bronz
                            </StyledTableCell>
                            <React.Fragment key={index}>
                                <StyledTableCell align="right">{teamRow.name}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.teamCapitanUserName}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.rating}</StyledTableCell>
                            </React.Fragment>
                        </StyledTableRow>
                    ))}
                    {data4.map((teamRow, index) => (
                        <StyledTableRow>
                             <StyledTableCell><img src={data3[6]} alt="" className='w-4 h-4'/></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                Daş
                            </StyledTableCell>
                            <React.Fragment key={index}>
                                <StyledTableCell align="right">{teamRow.name}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.teamCapitanUserName}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.rating}</StyledTableCell>
                            </React.Fragment>
                        </StyledTableRow>
                    ))}
                    {data4.map((teamRow, index) => (
                        <StyledTableRow>
                             <StyledTableCell><img src={data3[7]} alt="" className='w-4 h-4' /></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                Taxta
                            </StyledTableCell>
                            <React.Fragment key={index}>
                                <StyledTableCell align="right">{teamRow.name}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.teamCapitanUserName}</StyledTableCell>
                                <StyledTableCell align="right">{teamRow.rating}</StyledTableCell>
                            </React.Fragment>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Divisions;
