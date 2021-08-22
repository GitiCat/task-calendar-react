import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CalendarRowComponent from '../row/row';

const CalendarCellComponent = ({ day, isWeekday }) => {
    const cellClasses = cn({
        'calendar-cell': true,
        'weekday': isWeekday
    })
    
    return (
        <Link className={cellClasses}
            to={`/selected/${day.unix()}`}>
            <CalendarRowComponent day={day}/>
        </Link>
    )
}

CalendarCellComponent.propTypes = {
    day: PropTypes.any.isRequired,
    isWeekday: PropTypes.bool.isRequired
}

export default CalendarCellComponent;