import classNames from 'classnames'

export const Checkbox = ({ checked, handleCheckboxChange, children }) => {
    return (
        <label className={'flex items-center gap-2'}>
            <div
                className={classNames(
                    'relative w-5 h-5 border rounded-[4px]',
                    checked
                        ? 'border-accent-300 text-accent-300'
                        : 'border-accent-200/10 text-accent-300/0'
                )}
            >
                <svg
                    className={'absolute top-0 left-0'}
                    style={{ width: '100%', height: '100%' }}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.7791 5.12332C11.9333 5.28775 11.9333 5.55435 11.7791 5.71878L7.04228 10.7714C6.88813 10.9358 6.63819 10.9358 6.48404 10.7714L4.11562 8.2451C3.96146 8.08067 3.96146 7.81407 4.11562 7.64964C4.26977 7.48521 4.5197 7.48521 4.67386 7.64964L6.76316 9.87822L11.2209 5.12332C11.375 4.95889 11.625 4.95889 11.7791 5.12332Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <input
                className={'hidden'}
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <span className={'leading-none text-white text-sm capitalize'}>{children}</span>
        </label>
    )
}
