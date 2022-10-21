import { useState } from 'react';
import './sidebar.css';

import SidebarItem from '../SidebarItem';
import SidebarItemLogout from '../SidebarItemLogout';

export default function Sidebar(){

    const [active, setActive] = useState(true);

    return(
        <div className={`sidebar ${active && "active"}`}>
            <div className='sidebar-switch' onClick={() => setActive(!active)}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className='sidebar-container'>
                <SidebarItem title="Página inicial" route="/dashboard" icon="fa-solid fa-home" />
                <SidebarItem title="Agendamentos" route="/dashboardd" icon="fa-solid fa-calendar-days" />
                <SidebarItem title="Meus Horários" route="/hours" icon="fa-solid fa-clock" />
            </div>
            <div className='sidebar-footer'>
                <SidebarItemLogout title="Sair" icon="fa-solid fa-right-from-bracket" />
            </div>
        </div>
    )
}