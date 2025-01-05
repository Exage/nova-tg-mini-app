import classNames from 'classnames'

export const Type = ({ type = 'common', className = '' }) => {

    const typeColors = {
        common: 'bg-type-common/70',
        epic: 'bg-type-epic/70',
        rare: 'bg-type-rare/70',
        legendary: 'bg-type-legendary/70',
        premium: 'bg-type-premium/70',
    }

    return (
        <div className={className}>
            <div
                className={classNames(
                    'relative z-[1] text-[0.5rem] leading-2 px-[0.4em] capitalize rounded-sm', typeColors[type]
                )}
            >

                <span >
                    {type}
                </span>

                <div
                    aria-hidden="true"
                    className={classNames('absolute inset-0 blur-sm -z-[1]', typeColors[type])}
                />
            </div>
        </div>
    )
}
