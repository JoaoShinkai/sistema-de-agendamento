import './weekday-column-item.css';

export default function WeekdayColumnItem(props){

    function convertHour(hour){
        const array = hour.split(":");

        return `${array[0]}:${array[1]}`;
    }

    return(
        <div className='weekday-column-item'>
            <div className='weekday-column-item-description'>{ convertHour(props.hour.startTime)} - {convertHour(props.hour.endTime)}</div>
            <div className='weekday-column-item-icon'> <i className='fa-solid fa-ellipsis-vertical'></i> </div>
        </div>
    )
}