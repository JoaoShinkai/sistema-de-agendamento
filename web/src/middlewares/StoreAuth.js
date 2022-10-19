import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { StoreContext } from '../contexts/store';

export default function StoreAuth({ children }){

    const { logged, loadingProvider } = useContext(StoreContext);


    if(loadingProvider){
        return(
            <div>Loading</div>
        )
    }

    if(!logged){
        return <Navigate to="/" />
    }

    return children
}