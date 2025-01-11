import styles from '@/Core.module.scss'
import classNames from 'classnames'

export const Button = ({ disabled = false, className = '', textSize = 'text-xl', children, ...props }) => {
    return (
        <button
            className={classNames('w-full relative p-[2px] inline-block rounded-md overflow-hidden disabled:*:bg-accent-700', styles.btnGradient, className)}
            disabled={disabled}
            {...props}
        >
            <span className={classNames('block w-full relative p-[0.4em] rounded-md', textSize, disabled ? 'bg-accent-800' : 'bg-accent-600')}>
                {children}
            </span>
        </button>
    )
}
