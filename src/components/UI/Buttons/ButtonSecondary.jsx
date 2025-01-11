import styles from '@/Core.module.scss'
import classNames from 'classnames'

export const ButtonSecondary = ({ disabled = false, className = '', children, ...props }) => {
    return (
        <button
            className={classNames('w-full relative p-[2px] inline-block rounded-md overflow-hidden disabled:opacity-60', styles.btnGradient, className)}
            disabled={disabled}
            {...props}
        >
            <span className={classNames('block w-full relative text-xl p-2 rounded-md bg-blue-500')}>
                {children}
            </span>
        </button>
    )
}
