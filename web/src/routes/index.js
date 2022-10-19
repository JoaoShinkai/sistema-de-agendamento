import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

import StoreAuth from '../middlewares/StoreAuth';

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/dashboard' element={ <StoreAuth> <Dashboard/> </StoreAuth> } />
        </Routes>
    )
}