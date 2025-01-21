import styles from '@/Core.module.scss'
import classNames from 'classnames'
import { Button } from '@/components/UI/Buttons/Button'
import { Block } from '@/components/UI/Block'
import { Box } from './components/Box'

export const UserBoxes = () => {
    return (
        <div className={'flex flex-col gap-y-4 mt-4'}>
            <Box title={'Standart Box'} amount={2} img={'box_1.png'} />
            
            <Box title={'Advanced box'} amount={1} img={'box_2.png'} />

            <Box title={'Premium Box'} amount={3} img={'box_3.png'} />
        </div>
    )
}
