import React, { useContext, useEffect, useState } from 'react';
import './weekday-column.css';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StoreContext } from '../../contexts/store';
import { api } from '../../services/api';
import customToast from '../../toast/customToast';
import WeekdayColumnItem from '../WeekdayColumnItem';

export default function WeekdayColumn(props){

    const [hours, setHours] = useState([]);

    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const { token } = useContext(StoreContext);

    const req = {
        headers: {
            authorization: token
        }
    }


    useEffect(() => {
        
        async function loadHours() {
            try{
                const res = await api.get(`/hour/weekday/${props.id}`, req)

                setHours(res.data)
            }catch(err){
                // customToast(err.response.data.message);
            }
        }
        
        loadHours();

    }, [])

    function createHour(){

        if(startTime == null || endTime == null){
            customToast.error("Preencha os campos para enviar o formulário");
            return;
        }

        const hour1 = new Date(startTime).getHours();
        const min1 = new Date(startTime).getMinutes();
        const hour2 = new Date(endTime).getHours();
        const min2 = new Date(endTime).getMinutes();

        if(isNaN(hour1) || isNaN(min1) || isNaN(hour2) || isNaN(min2)){
            customToast.error("Data inválida");
            return;
        }

        const time1 = `${hour1.toString().padStart(2, '0')}:${min1.toString().padStart(2, '0')}`;
        const time2 = `${hour2.toString().padStart(2, '0')}:${min2.toString().padStart(2, '0')}`;
        
        
        alert(`${time1}, ${time2}`);
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
        <div className='weekday-column'>
            <div className='weekday-column-title'>{props.name}</div>
            <div className='weekday-column-content'>
                {
                    hours.map(hour => (
                        <WeekdayColumnItem key={hour.id} hour={hour} />
                    ))
                }
                
                <div className='weekdaycolumn-btn-add' onClick={handleClickOpen}> + Adicionar </div>
            </div>
        </div>
        
        
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{props.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            className='my-4'
                            label="Horário de início"
                            value={startTime}
                            onChange={(newValue) => {
                                setStartTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            className='my-4'
                            label="Horário de término"
                            value={endTime}
                            onChange={(newValue) => {
                                setEndTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={createHour}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </div>
        
        </>
        
    )
}