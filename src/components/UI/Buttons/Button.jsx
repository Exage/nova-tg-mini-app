import styles from '@/Core.module.scss'
import classNames from 'classnames'

export const Button = ({ disabled = false, className = '', children, ...props }) => {
    return (
        <button
            className={classNames('w-full relative p-[2px] inline-block rounded-md overflow-hidden disabled:*:bg-accent-700', styles.btnGradient, className)}
            disabled={disabled}
            {...props}
        >
            <span className={classNames('block w-full relative text-xl p-2 rounded-md', disabled ? 'bg-accent-800' : 'bg-accent-600')}>
                {children}
            </span>
        </button>
    )
}
