import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Login/> } />
        </Routes>
    )
}