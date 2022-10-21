import { Link } from 'react-router-dom'

import './sidebar-item.css'

export default function SidebarItem(props){
    return(
        <li className='sidebar-item-li'>
            <Link to={props.route}> <i className={props.icon}></i> {props.title} </Link>
        </li>
    )
}