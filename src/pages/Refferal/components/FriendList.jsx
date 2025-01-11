import { Friend } from "./Friend"

const friendsList = [
    {
        id: '1',
        name: 'MikitaUX',
        gems: '100.000'
    },
    {
        id: '2',
        name: 'MikitaUX',
        gems: '100.000'
    },
    {
        id: '3',
        name: 'MikitaUX',
        gems: '100.000'
    },
    {
        id: '4',
        name: 'MikitaUX',
        gems: '100.000'
    },
]

export const FriendList = () => {
    return (
        <div className={'mt-11'}>
            <h2 className={'font-bold text-xl'}>
                {friendsList.length} friends
            </h2>

            <ul className={'flex flex-col gap-y-3'}>
                {friendsList.map(friend => (
                    <Friend key={friend.id} data={friend} />
                ))}
            </ul>

        </div>
    )
}
