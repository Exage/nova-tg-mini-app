import styles from '@/Core.module.scss'
import { ReactSVG } from "react-svg"
import classNames from "classnames"

import { UserAvatar } from "@/components/UserAvatar"

import friendsIcon from '@/assets/images/navigation/friends.svg'

export const Friend = ({ data }) => {
    return (
        <li className={'w-full flex items-center py-5 border-b border-b-gray-600'}>
            <div>
                <UserAvatar size={'w-16 h-16'} />
            </div>
            <div className={'ml-5 overflow-hidden flex-1'}>
                <h3 className={'text-white text-xl font-bold text-ellipsis overflow-hidden'}>{data.name}</h3>
                <div className={'flex items-center gap-1 text-gray-200 text-sm mt-1'}>
                    <ReactSVG src={friendsIcon} />
                    +1
                </div>
            </div>
            <div className={classNames('text-xl font-bold', 'after:w-7 after:h-8 after:align-bottom after:ml-2', styles.gemAfter)}>
                {data.gems}
            </div>
        </li>
    )
}
