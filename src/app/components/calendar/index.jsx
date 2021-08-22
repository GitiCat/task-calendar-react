import React, { useState } from 'react';
import moment from 'moment';
import CalendarGridComponent from './grid/grid';
import CalendarHeaderComponent from './header/calendar-header';
import CalendarMonitorComponent from './monitor/index';

const CalendarComponent = () => {
    moment.updateLocale('ru', { week: { dow: 1 } });
    const [today, setToday] = useState(moment());
    const start = today.clone().startOf('month').startOf('week');

    const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
    const todayHandler = () => setToday(moment());
    const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));
    
    return (
        <div className="calendar-container">
            <CalendarMonitorComponent today={today}
                prevHandler={prevHandler}
                todayHandler={todayHandler}
                nextHandler={nextHandler}/>
            <CalendarHeaderComponent/>
            <CalendarGridComponent start={start}/>
        </div>
    )
}

export default CalendarComponent;