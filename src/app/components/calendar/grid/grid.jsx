import React from 'react';
import CalendarGridWrapperComponent from '../wrapper/wrapper';

const CalendarGridComponent = ({ start }) => {
    const total = 42;
    const day = start.clone().subtract(1, 'day');
    const days = [...Array(total)].map(() => day.add(1, 'day').clone());

    return (
        <CalendarGridWrapperComponent days={days}/>
    )   
}

export default CalendarGridComponent;