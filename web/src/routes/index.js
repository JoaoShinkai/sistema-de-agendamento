import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Hours from '../pages/Hours';
import Login from '../pages/Login';

import StoreAuth from '../middlewares/StoreAuth';

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/dashboard' element={ <StoreAuth> <Dashboard/> </StoreAuth> } />
            <Route path='/hours' element={ <StoreAuth> <Hours/> </StoreAuth> } />
        </Routes>
    )
}