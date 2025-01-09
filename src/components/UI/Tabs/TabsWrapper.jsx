import classNames from 'classnames'

export const TabsWrapper = ({ className = '', children }) => {
    return (
        <div className={classNames('inline-flex gap-2 p-2 bg-tabsWrapperBg rounded-lg', className)}>
            {children}
        </div>
    )
}
