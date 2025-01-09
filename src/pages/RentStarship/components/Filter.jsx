import { useState } from 'react'

import classNames from 'classnames'
import styles from '@/Core.module.scss'

import { Checkbox } from '@/components/UI/Checkbox'

export const Filter = ({ selectedItems, setSelectedItems }) => {
    const [openFilter, setOpenFilter] = useState(true)

    const items = [{ label: 'common' }, { label: 'rare' }, { label: 'epic' }, { label: 'legendary' }]

    const handleCheckboxChange = (label) => {
        setSelectedItems((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        )
    }

    const handleOpenFilter = () => {
        setOpenFilter((prev) => !prev)
    }

    return (
        <div className={'relative'}>
            <button className={classNames('p-1', styles.iconStroke)} onClick={handleOpenFilter}>
                <span className={'block w-6 h-6'}>
                    <img className={'w-full h-full object-contain'} src="/filter.svg" alt="" />
                </span>
            </button>

            <div
                className={classNames(
                    'absolute top-full right-0 pt-1 transition-all duration-200',
                    openFilter ? 'visible' : 'invisible'
                )}
            >
                <div
                    className={classNames(
                        'min-w-28 bg-black-500 p-3 rounded-lg origin-top-right transition-all duration-200',
                        openFilter ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                    )}
                >
                    <div className={'flex flex-col gap-2'}>
                        {items.map((item, index) => (
                            <Checkbox
                                key={index}
                                checked={selectedItems.includes(item.label)}
                                handleCheckboxChange={() => handleCheckboxChange(item.label)}
                            >
                                {item.label}
                            </Checkbox>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
