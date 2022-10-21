import { useContext } from 'react';
import { StoreContext } from '../../contexts/store';

import './sidebar-item-logout.css';

export default function SidebarItemLogout(props){

    const { logoutContext } = useContext(StoreContext);

    function logout(){
        logoutContext();
    }

    return(
        <li className='sidebar-item-li-logout'>
            <div onClick={logout}> <i className={props.icon}></i> {props.title} </div>
        </li>
    )
}