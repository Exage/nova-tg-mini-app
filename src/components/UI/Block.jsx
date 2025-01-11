import classNames from "classnames"

export const Block = ({ className = '', children }) => {
    return (
        <div className={classNames('border-2 rounded-xl border-accent-300 bg-accent-800', className)}>
            {children}
        </div>
    )
}
