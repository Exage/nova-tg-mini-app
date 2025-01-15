import { MainWrapper } from '@/components/MainWrapper'
import { PageTitle } from '@/components/PageTitle'
import { Mission } from './components/Mission'

import { Navigate, useLocation } from 'react-router'

const missionsList = {
    1: [
        {
            id: '1',
            cover: '/mission-cover-ph.jpg',
            title: 'Mission 1',
            description:
                'A young galaxy filled with light and simple minerals. It serves as the starting point for rookie pilots.',
            gems: '0.1',
            type: 'common',
            distance: 150,
        },
        {
            id: '2',
            cover: '/mission-cover-ph.jpg',
            title: 'Mission 2',
            description:
                'A mysterious galaxy shrouded in dense gas clouds, hiding precious rare minerals.',
            gems: '5',
            type: 'rare',
            distance: 300,
        },
        {
            id: '3',
            cover: '/mission-cover-ph.jpg',
            title: 'Mission 3',
            description:
                'A grand galaxy of cosmic phenomena, radiating with valuable epic materials.',
            gems: '9.9',
            type: 'epic',
            distance: 500,
        },
        {
            id: '4',
            cover: '/mission-cover-ph.jpg',
            title: 'Mission 4',
            description:
                ' A majestic galaxy with awe-inspiring celestial formations and legendary resources.',
            gems: '17',
            type: 'legendary',
            distance: 750,
        },
        {
            id: '5',
            cover: '/mission-cover-ph.jpg',
            title: 'Mission 5',
            description:
                'The ultimate galaxy, shrouded in mystery and home to the rarest materials in the universe.',
            gems: '50',
            type: 'legendary',
            distance: 1000,
        },
    ],
    2: [
        {
            id: '1',
            cover: '/mission-cover-ph.jpg',
            title: 'Mission 1',
            description:
                'A young galaxy filled with light and simple minerals. It serves as the starting point for rookie pilots.',
            gems: '0.1',
            type: 'common',
            distance: 150,
        },
        {
            id: '2',
            cover: '/mission-cover-ph.jpg',
            title: 'Mission 2',
            description:
                'The ultimate galaxy, shrouded in mystery and home to the rarest materials in the universe.',
            gems: '50',
            type: 'legendary',
            distance: 1000,
        },
    ],
}

export const Missions = () => {
    const location = useLocation()
    const locationData = location.state

    if (!locationData?.galaxy) {
        return <Navigate to={'/play/galaxies'} />
    }

    return (
        <MainWrapper>
            <PageTitle>{locationData.galaxy.title}</PageTitle>

            {missionsList[locationData.galaxy.id] && (
                <div className={'grid grid-cols-2 gap-2.5 mt-3'}>
                    {missionsList[locationData.galaxy.id].map((item) => (
                        <Mission key={item.id} data={item} />
                    ))}
                </div>
            )}
        </MainWrapper>
    )
}
