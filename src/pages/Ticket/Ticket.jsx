import { Navigate, useLocation } from 'react-router'
import { MainWrapper } from '@/components/MainWrapper'
import { PassImage } from './components/PassImage'
import { Button } from '@/components/UI/Button/Button'

export const Ticket = () => {

    const location = useLocation()
    const locationData = location.state

    console.log(locationData)

    const handleStart = () => {
        if (locationData) {
            
            alert(`Galaxy: ${locationData?.galaxy.title}\nMission: ${locationData?.mission.title}\nSpaceships: ${locationData?.spaceships.map(item => `\n    - ${item.spaceship.name}`)}`)

        }
    }

    if (!locationData?.spaceships || !locationData?.spaceships.length === 0) {
        return <Navigate to={'/play/selection'} />
    }

    return (
        <MainWrapper py='py-2'>
            <div className={'bg-accent-900 p-7 rounded-[2.5rem]'}>
                <div
                    className={'w-full flex justify-between text-accent-200/30 font-medium text-base'}
                >
                    <span>STELLAR VOYAGER</span>
                    <span>5/74 - R.M.T</span>
                </div>

                <div className={'mt-2 flex flex-col gap-y-2 pb-4 border-b-[3px] border-b-accent-250 border-dashed'}>

                    <div className={'flex'}>
                        <div className={'w-[5.625rem]'}>
                            <h3 className={'text-3xl font-bold'}>Earth</h3>
                            <p className={'text-xl mt-1'}>10:20 PM</p>
                            <p className={'text-base text-accent-200'}>Fri, sep</p>
                        </div>

                        <div className={'flex-1 py-6 px-4'}>
                            <div className={'w-full h-[3px] rounded-[2px] bg-accent-200 border border-accent-250 shadow-[0px_0px_3px_0px] shadow-accent-250'}></div>
                        </div>

                        <div className={'w-[5.625rem]'}>
                            <h3 className={'text-3xl font-bold'}>Terra Prime</h3>
                            <p className={'text-xl mt-1'}>10:45 AM</p>
                            <p className={'text-base text-accent-200'}>Fri, sep</p>
                        </div>
                    </div>

                    <div className={'flex'}>
                        <div className={'w-[5.625rem]'}>
                            <h3 className={'text-3xl font-bold'}>Terra Prime</h3>
                            <p className={'text-xl mt-1'}>10:20 PM</p>
                            <p className={'text-base text-accent-200'}>Fri, sep</p>
                        </div>

                        <div className={'flex-1 py-6 px-4'}>
                            <div className={'w-full h-[3px] rounded-[2px] bg-accent-200 border border-accent-250 shadow-[0px_0px_3px_0px] shadow-accent-250'}></div>
                        </div>

                        <div className={'w-[5.625rem]'}>
                            <h3 className={'text-3xl font-bold'}>Earth</h3>
                            <p className={'text-xl mt-1'}>10:45 AM</p>
                            <p className={'text-base text-accent-200'}>Fri, sep</p>
                        </div>
                    </div>

                </div>

                <div className={'mt-3'}>
                    <div className={'max-w-80 w-full mx-auto text-accent-200'}>
                        
                        <h3>Pass</h3>
                        <div className={'mt-3'}>
                            <PassImage />
                        </div>

                    </div>
                </div>

            </div>

            <div className={'mt-5'}>
                <Button onClick={handleStart}>
                    Start
                </Button>
            </div>
        </MainWrapper>
    )
}
