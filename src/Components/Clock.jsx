import React, { Fragment } from 'react';
import './Clock.css';

function Clock ({timerDay, timerHour, timerMin}) {
    return (
        <Fragment>
        <section className="timer-container">
            <section className="Timer">
                <div className="Clock">
                    <p>
                        Faltam {timerDay} Dias, {timerHour} Horas e {timerMin} Minutos
                    </p>
                </div>
            </section>
        </section>
    </Fragment>
    );
};

Clock.defaultProps = {
    timerDay: 10,
    timerHour: 10,
    timerMin: 10,
};

export default Clock;