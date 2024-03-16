import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Division.css";

const Division = () => {
    const [data4, setData4] = useState([]);

    useEffect(() => {
        fetch('https://matchow-001-site1.ltempurl.com/api/Divisions')
            .then(res => res.json())
            .then(data => {
                setData4(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='mt-10'>
            <div className='m-auto' style={{ width: "60%" }}>
                {data4.map((row, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ backgroundColor: '#112', color: 'white' }}
                            className='accordion'
                        >
                            <div className='divisionContainer flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <div>
                                        <img src={row.divisionImage} className="w-12 h-12" alt="" />
                                    </div>
                                    <div>
                                        <p className='text-lg font-medium'>{row.divisionName}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-lg font-medium'>Komanda sayı</p>
                                    <p className='font-medium'>{row.passTeamCount}</p>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='bg-[#112] text-white'>
                            <div className="team-container">
                                {row.teams.map((team, index) => (
                                    <div key={index} className="team-info flex justify-between items-center mt-6">
                                        <img src={team.teamLogoUrl} alt="" className='w-7 h-7 rounded-full' />
                                        <p className='font-medium'>{team.name}</p>
                                        <p className='font-medium'>{team.rating} score</p>
                                    </div>
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default Division;
