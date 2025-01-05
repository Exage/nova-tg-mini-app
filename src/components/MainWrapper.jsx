import classNames from 'classnames'

export const MainWrapper = ({ py = 'py-8', children }) => {
    return (
        <div className={classNames('px-5', py)}>
            {children}
        </div>
    )
}
