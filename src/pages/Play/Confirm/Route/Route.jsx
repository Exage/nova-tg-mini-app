import React from 'react'
import styles from './Route.module.scss'

export const Route = () => {

    const { route, destination, name, subname, time, date, divider, line } = styles

    return (
        <div className={route}>
            <div className={destination}>
                <h3 className={name}>
                    Earth
                </h3>
                <h4 className={subname}>
                    Colombo
                </h4>

                <div className={time}>
                    09:25 PM
                </div>
                <div className={date}>
                    Fri, sep
                </div>
            </div>

            <div className={divider}>
                <div className={line}></div>
            </div>

            <div className={destination}>
                <h3 className={name}>
                    Terra Prime
                </h3>
                <h4 className={subname}>
                    Esraults
                </h4>

                <div className={time}>
                    09:25 AM
                </div>
                <div className={date}>
                    Fri, sep
                </div>
            </div>
        </div>
    )
}
