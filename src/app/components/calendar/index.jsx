import React, { useState } from 'react';
import moment from 'moment';
import CalendarGridComponent from './grid/grid';
import CalendarHeaderComponent from './header/calendar-header';

const CalendarComponent = () => {
    moment.updateLocale('ru', { week: { dow: 1 } });
    const [today, setToday] = useState(moment());
    const start = today.clone().startOf('month').startOf('week');
    
    return (
        <div className="calendar-container">
            <CalendarHeaderComponent/>
            <CalendarGridComponent start={start}/>
        </div>
    )
}

export default CalendarComponent;