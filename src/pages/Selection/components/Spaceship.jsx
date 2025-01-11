import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import classNames from 'classnames'
import { Type } from '@/components/Type'

export const Spaceship = ({ id, data, disabled, isChosen, onClick }) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id, disabled })

    const style = {
        transform: CSS.Translate.toString(transform),
        cursor: disabled ? 'not-allowed' : 'grab',
        opacity: isChosen ? 0.3 : 1,
        zIndex: transform ? 1000 : 1,
    }

    return (
        <div
            ref={setNodeRef}
            className={classNames(
                'relative h-28 rounded-lg overflow-hidden select-none touch-none',
                { 'opacity-30': isChosen }
            )}
            style={style}
            {...(disabled ? {} : listeners)}
            {...attributes}
            onClick={onClick}
        >

            <Type type={data.type} className={'absolute top-2 left-2'} />

            <img
                className={'w-full h-full object-cover select-none touch-none'}
                src={data.photo}
                alt=""
            />

            <div className={'absolute -bottom-px left-0 flex items-center justify-center w-full h-7 leading-none text-[0.625rem] bg-accent-800/20 backdrop-blur-xl border-t border-t-accent-800'}>
                {data.name}
            </div>
        </div>
    )
}
