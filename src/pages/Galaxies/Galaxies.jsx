import { MainWrapper } from "@/components/MainWrapper"
import { PageTitle } from "@/components/PageTitle"
import { Galaxy } from "./components/Galaxy"

const galaxiesList = [
    {
        id: '1',
        cover: '/mission-cover-ph.jpg',
        title: 'Aurora',
        description: 'A young galaxy filled with light and simple minerals. It serves as the starting point for rookie pilots.',
        gems: '0.1 - 4',
        type: 'common',
        distance: 150
    },
    {
        id: '2',
        cover: '/mission-cover-ph.jpg',
        title: 'Nebula',
        description: 'A mysterious galaxy shrouded in dense gas clouds, hiding precious rare minerals.',
        gems: '5 - 11',
        type: 'rare',
        distance: 300
    },
    {
        id: '3',
        cover: '/mission-cover-ph.jpg',
        title: 'Ecliptica',
        description: 'A grand galaxy of cosmic phenomena, radiating with valuable epic materials.',
        gems: '9.9 - 16',
        type: 'epic',
        distance: 500
    },
    {
        id: '4',
        cover: '/mission-cover-ph.jpg',
        title: 'Celestara',
        description: ' A majestic galaxy with awe-inspiring celestial formations and legendary resources.',
        gems: '17 - 27',
        type: 'legendary',
        distance: 750
    },
    {
        id: '5',
        cover: '/mission-cover-ph.jpg',
        title: 'Void Eternum',
        description: 'The ultimate galaxy, shrouded in mystery and home to the rarest materials in the universe.',
        gems: '50 - 100',
        type: 'premium',
        distance: 1000
    },
]

export const Galaxies = () => {
    return (
        <MainWrapper>
            
            <PageTitle>Galaxies</PageTitle>

            <div className={'grid grid-cols-2 gap-2.5 mt-3'}>
                {galaxiesList.map(item => <Galaxy key={item.id} data={item} />)}
            </div>

        </MainWrapper>
    )
}
