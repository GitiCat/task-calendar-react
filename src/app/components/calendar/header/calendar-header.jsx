import React from 'react';
import moment from 'moment';

const CalendarHeaderComponent = () => {
    return (
        <div className="calendar-header">
            {[...Array(7)].map((_, index) => {
                return (
                    <div key={index} className="day-name">
                        {moment().day(index + 1).format('dddd')}
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarHeaderComponent;