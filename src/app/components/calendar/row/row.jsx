import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarDayComponent from '../day/day';

const CalendarRowComponent = ({ day }) => {
    const isCurrentDay = moment().isSame(day, 'day');
    const isSelectedMonth = moment().isSame(day, 'month')
    
    return (
        <div className="calendar--row">
            <CalendarDayComponent day={day} isCurrentDay={isCurrentDay} isSelectedMonth={isSelectedMonth}/>
        </div>
    )
}

CalendarRowComponent.propTypes = {
    day: PropTypes.instanceOf(moment)
}

export default CalendarRowComponent;