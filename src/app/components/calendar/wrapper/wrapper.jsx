import React from 'react';
import PropTypes from 'prop-types';
import CalendarCellWrapperComponent from '../cell/cell';

const CalendarGridWrapperComponent = ({ days }) => {
    return (
        <div className="calendar-grid--wrapper">
            {
                days.map(day => {
                    const isWeekday = day.day() === 6 || day.day() === 0;
                    return (
                        <CalendarCellWrapperComponent key={day.unix()} 
                            day={day}
                            isWeekday={isWeekday}/>
                    )
                })
            }
        </div>
    )
}

CalendarGridWrapperComponent.propTypes = {
    days: PropTypes.array.isRequired
}

export default CalendarGridWrapperComponent;