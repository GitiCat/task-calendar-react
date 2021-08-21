import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { UpperCaseFirstChar } from '../../../../utils/upperCaseFirstChar';

const CalendarMonitorComponent = ({ today, prevHandler, todayHandler, nextHandler }) => {
    return (
        <div className="calendar-monitor">
            <div className="current">
                <span>{today.format('YYYY')}</span>
                <span>{UpperCaseFirstChar(today.format('MMMM'))}</span>
            </div>
            <div className="controls">
                <button type='button'>&lt;</button>
                <button type='button'>Today</button>
                <button type='button'>&gt;</button>
            </div>
        </div>
    )
}

CalendarMonitorComponent.propTypes = {
    today: PropTypes.instanceOf(moment).isRequired,
    prevHandler: PropTypes.func.isRequired,
    todayHandler: PropTypes.func.isRequired,
    nextHandler: PropTypes.func.isRequired
}

export default CalendarMonitorComponent;