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
                <button onClick={prevHandler}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                <button onClick={todayHandler}>Текущий</button>
                <button onClick={nextHandler}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
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