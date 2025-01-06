import classNames from 'classnames'

export const MainWrapper = ({ px = 'px-5', py = 'py-8', children }) => {
    return (
        <div className={classNames(px, py)}>
            {children}
        </div>
    )
}
