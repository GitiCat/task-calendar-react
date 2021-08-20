import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cn from 'classnames';

const CalendarDayComponent = ({ day, isCurrentDay, isSelectedMonth }) => {
    const dayClasses = cn({
        'calendar-day': true,
        'current': isCurrentDay,
        'in-month': isSelectedMonth
    })
    
    return (
        <div className={dayClasses}>
            <div className="day-number">
                { day.format('D') }
            </div>
        </div>
    )
}

CalendarDayComponent.propTypes = {
    day: PropTypes.instanceOf(moment).isRequired,
    isCurrentDay: PropTypes.bool.isRequired,
    isSelectedMonth: PropTypes.bool.isRequired
}

export default CalendarDayComponent;