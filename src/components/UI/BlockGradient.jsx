import React from 'react'
import classNames from 'classnames'
import styles from '@/Core.module.scss'

export const BlockGradient = ({ className = null, contentPadding = 'p-3', children }) => {
    return (
        <div className={classNames(styles.gradietBlockStroke, { [className]: className })}>

            <div className={`h-full relative z-10 overflow-hidden rounded-[inherit] ${contentPadding}`}>
                {children}
            </div>

        </div>
    )
}