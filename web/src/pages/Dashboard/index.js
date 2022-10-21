
import Sidebar from '../../components/Sidebar';

import './dashboard.css';

export default function Dashboard(){

    return(
        <div>
            <Sidebar />
            <div className='dashboard-container'>
                Dashboard
            </div>
        </div>
    )
}