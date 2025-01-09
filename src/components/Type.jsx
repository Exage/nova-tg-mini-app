import classNames from 'classnames'

export const Type = ({ type = 'common', textSize = 'text-[0.5rem]', className = '' }) => {
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
                    'relative z-[1] leading-nonoe px-[0.4em] py-[0.2em] capitalize rounded-sm',
                    textSize,
                    typeColors[type]
                )}
            >
                <span>{type}</span>

                <div
                    aria-hidden="true"
                    className={classNames('absolute inset-0 blur-sm -z-[1]', typeColors[type])}
                />
            </div>
        </div>
    )
}
