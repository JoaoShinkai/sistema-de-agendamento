import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import customToast from '../../toast/customToast';
import './login.css';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarImage from '../../assets/calendar-animate.svg';
import { StoreContext } from '../../contexts/store';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { loginContext } = useContext(StoreContext);

    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();

        if(email.length < 1 || password.length < 1){
            customToast.error("Todos os campos devem estar preenchidos");
            return;
        }

        try{
            await loginContext(email, password);

            navigate('/dashboard');

        }catch(err){
            // console.log(err);
        }

        
    }

    return(
        <div className='login-container'>
            <div className='login-container-group'>
                <div className='login-container-group-one'>
                    <img src={CalendarImage} alt="" />
                </div>
                <div className='login-container-group-two'>
                    <form action="" className='login-container-form' onSubmit={login}>
                        <div className='login-container-form-title'>
                            <div className='login-container-title-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 457 521"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                            </div>
                            <div>
                                Gerencie seu horário de uma forma mais fácil e ágil com uma <strong>agenda virtual</strong> 
                            </div>
                            
                        </div>
                        <hr />
                        <TextField
                            label="Email"
                            defaultValue={email}
                            onChange={ e => setEmail(e.target.value) }
                            variant="filled"
                            className='my-1'
                            fullWidth
                            color='secondary'
                        />
                        <TextField
                            label="Senha"
                            defaultValue={password}
                            onChange={ e => setPassword(e.target.value) }
                            variant="filled"
                            className='my-1'
                            fullWidth
                            type="password"
                            color='secondary'
                        />
                        <LoadingButton type='submit' style={{backgroundColor: "#a43ea4"}} loading={false} variant="contained" className='my-4' fullWidth >
                            Entrar
                        </LoadingButton>
                    </form>
                </div>
            </div>
        </div>
    )
}