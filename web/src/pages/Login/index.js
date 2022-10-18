import { LoadingButton } from '@mui/lab'
import { TextField } from '@mui/material'
import './login.css'

import CalendarImage from '../../assets/calendar-animate.svg'

export default function Login(){
    return(
        <div className='login-container'>
            <div className='login-container-group'>
                <div className='login-container-group-one'>
                    <img src={CalendarImage} alt="" />
                </div>
                <div className='login-container-group-two'>
                    <form action="">
                        <TextField
                            id="filled-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            id="filled-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="filled"
                            fullWidth
                        />
                        <LoadingButton loading={false} variant="contained" className='my-4' fullWidth >
                            Submit
                        </LoadingButton>
                    </form>
                </div>
            </div>
        </div>
    )
}