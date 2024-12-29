import React from 'react'
import styles from '@/Core.module.scss'
import classNames from 'classnames'

import './Button.scss'

export const Button = ({ disabled = false, className = '', children, ...props }) => {
    return (
        <button
            className={`w-full relative p-[2px] inline-block rounded-md overflow-hidden ${styles.btnGradient} ${className}`}
            disabled={disabled}
            {...props}
        >
            <span className={'block w-full relative bg-accent-600 text-xl p-2 rounded-md'}>
                {children}
            </span>
        </button>
    )
}
