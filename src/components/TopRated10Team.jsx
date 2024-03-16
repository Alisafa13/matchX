import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactTyped } from "react-typed";
import { Swiper, SwiperSlide } from 'swiper/react';
import Ball from "./img/football-ball.png"
import 'swiper/css';
import 'swiper/css/pagination';
import "./TopRated10Team.css"


const TopRated10Team = () => {
    const [data1, setData1] = useState([]);
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "black",
            color: '#FFFFF7',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            backgroundColor: '#112 ',
            color: "#FFFFF7"
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    useEffect(() => {
        fetch('https://matchow-001-site1.ltempurl.com/api/Teams/top10')
            .then(res => res.json())
            .then(data => {
                setData1(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='flex items-center justify-around mt-6 '>
            <div className='w-60 h-60'>
                <h1 style={{ color: "white", fontSize: 42, fontWeight: "600" }}>
                    {" "}
                    <ReactTyped
                        strings={["Top 10 Rated Team"]}
                        typeSpeed={100}
                        loop
                        backSpeed={20}
                        showCursor={true}
                    />
                </h1>
            </div>
            <div style={{ width: '100%', maxWidth: '800px', margin: '0' }}>
                <Swiper pagination={{ clickable: true }} className="mySwiper" style={{ width: '70%' }}>
                    {data1.slice(0, 3).map((row, index) => (
                        <SwiperSlide key={index}>
                            <div className='box bg-[#f59e0b] rounded-md'>
                                <h1 className='text-4xl font-semibold text-'>#{index+1}</h1>
                                <div className='flex flex-col items-center'>
                                    <div className='m-auto flex items-center justify-between'>
                                        <img src={Ball} alt="" className="block mx-auto w-16 h-16 mr-5" />
                                        <img src={row.teamLogoUrl} alt="" className="block mx-auto" />
                                        <img src={Ball} alt="" className="block mx-auto w-16 h-16 ml-5" />
                                    </div>
                                    <h5 className='text-3xl mt-3 font-medium'>Xal : {row.rating}</h5>
                                    <h2 className='text-4xl my-3 font-semibold'>Komanda : {row.name}</h2>
                                    <h4 className='text-2xl mb-3 font-semibold'>Qalibiyyət faizi : {row.victory}</h4>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                    <SwiperSlide>
                        <div className=''>
                            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow className="box">
                                        <StyledTableCell align="left">Place</StyledTableCell>
                                        <StyledTableCell>Team Name</StyledTableCell>
                                        <StyledTableCell align="right">Rank</StyledTableCell>
                                        <StyledTableCell align="right">G/W</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data1.slice(3).map((row, index) => (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell align="left">{index+4}</StyledTableCell>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.rating}</StyledTableCell>
                                            <StyledTableCell align="right">{row.victory}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default TopRated10Team;
