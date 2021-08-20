import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CalendarRowComponent from '../row/row';

const CalendarCellComponent = ({ day, isWeekday }) => {
    const cellClasses = cn({
        'calendar-cell': true,
        'weekday': isWeekday
    })
    
    return (
        <div className={cellClasses}>
            <CalendarRowComponent day={day}/>
        </div>
    )
}

CalendarCellComponent.propTypes = {
    day: PropTypes.any.isRequired,
    isWeekday: PropTypes.bool.isRequired
}

export default CalendarCellComponent;