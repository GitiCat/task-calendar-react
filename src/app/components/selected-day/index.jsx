import moment from 'moment';
import React from 'react';
import { useParams } from 'react-router-dom';

const SelectedDayComponent = () => {
    moment.updateLocale('ru', { week: { dow: 1 } })

    const { day } = useParams()
    const selectedDay = moment.unix(day);

    return (
        <div className="selected-day-container">
            <header>
                <h2>{`${selectedDay.format("D MMMM YYYY")} года`}</h2>
                <span>{selectedDay.format('dddd')}</span>
            </header>
            <div className="controls">
                <button className='icon-button'>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <span>Добавить</span>
                </button>
            </div>
        </div>
    )
}

export default SelectedDayComponent;