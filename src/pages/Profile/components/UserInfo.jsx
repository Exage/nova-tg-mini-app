import { UserAvatar } from '@/components/UserAvatar'

export const UserInfo = ({ name, username, imageUrl }) => {
    return (
        <div className={'pt-12 flex flex-col items-center justify-center'}>
            <UserAvatar size={'w-32 h-32'} imageUrl={imageUrl} />

            <h2 className={'mt-4 text-4xl font-bold uppercase'}>{name}</h2>
            <h3 className={'text-base text-secondary-600 lowercase'}>{username}</h3>
        </div>
    )
}
