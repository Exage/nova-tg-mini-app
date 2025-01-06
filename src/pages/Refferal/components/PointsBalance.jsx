import styles from '@/Core.module.scss'
import classNames from "classnames"

import { Block } from "@/components/UI/Block"
import { Button } from '@/components/UI/Buttons/Button'

export const PointsBalance = () => {
    return (
        <div className='overflow-hidden'>
            <Block className={'w-full h-32 flex items-center justify-center'}>
                <h2 className={classNames('text-3xl font-bold break-all', 'after:w-7 after:h-8 after:ml-2.5 after:align-top', styles.gemAfter)}>100,000</h2>
            </Block>
            
            <div className={'flex flex-col gap-y-2 mt-3'}>
                <Button disabled={true}>Claim</Button>
                <Button>Invite Friends</Button>
            </div>

        </div>
    )
}
