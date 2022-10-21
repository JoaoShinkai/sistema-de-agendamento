import { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';

import WeekdayColumn from '../../components/WeekdayColumn';

import { StoreContext } from '../../contexts/store';
import { api } from '../../services/api';
import './hours.css';

export default function Hours(){

    const [weekdays, setWeekdays] = useState([]);
    const { token } = useContext(StoreContext);

    const req = {
        headers: {
            authorization: token
        }
    }

    
    useEffect(() => {

        async function loadData(){
            try{
                const res = await api.get('/weekday/', req);

                setWeekdays(res.data);
            }catch(err){
                console.log(err);
                // customToast(err?.response?.data?.message);
            }
        }

        loadData();
    }, [])

    return (
        <>
            <Sidebar />
            <div className='hours-container'>
                <div className='hours-container-weekdays'>
                    {
                        weekdays.map(weekday => (
                            <WeekdayColumn key={weekday.id} name={weekday.description} id={weekday.id} />
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}