import styles from '@/Core.module.scss'

export const MainWrapper = ({ py = 'py-8', children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={py}>
                {children}
            </div>
        </div>
    )
}
