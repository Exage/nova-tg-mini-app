import { useState } from 'react'

import { Spaceships } from './components/Spaceships'

import { Navigate, useLocation, useNavigate } from 'react-router'
import { MainWrapper } from '@/components/MainWrapper'
import { PageTitle } from '@/components/PageTitle'
import { Button } from '@/components/UI/Buttons/Button'

export const Selection = () => {

    const [chosenSpaceships, setChosenSpaceships] = useState([])

    const location = useLocation()
    const locationData = location.state

    const navigate = useNavigate()

    const handleStartMission = () => {
        navigate('/play/ticket', {
            state: {
                ...locationData,
                spaceships: chosenSpaceships
            }
        })
    }

    if (!locationData?.mission) {
        return <Navigate to={'/play/galaxies'} />
    }

    return (
        <div className={'overflow-hidden h-full'}>
            <MainWrapper>

                <PageTitle>Choose starship</PageTitle>

                <Spaceships
                    chosenSpaceships={chosenSpaceships}
                    setChosenSpaceships={setChosenSpaceships}
                />

                <div className={'mt-4'}>
                    <Button 
                        disabled={chosenSpaceships.length === 0} 
                        onClick={handleStartMission}
                    >
                        Start mission
                    </Button>
                </div>

            </MainWrapper>
        </div>
    )
}
