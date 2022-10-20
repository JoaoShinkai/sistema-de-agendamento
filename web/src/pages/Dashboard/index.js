import { Button } from '@mui/material';
import { useContext } from 'react';
import { StoreContext } from '../../contexts/store';

export default function Dashboard(){

    const { logoutContext } = useContext(StoreContext);

    function logout(){
        logoutContext();
    }

    return(
        <div>
            Dashboard
            <Button onClick={logout}>Sair</Button>
        </div>
    )
}