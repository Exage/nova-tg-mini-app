import { MainWrapper } from '@/components/MainWrapper'
import { PageTitle } from '@/components/PageTitle'
import { NavLink, Outlet } from 'react-router'

export const SpaceportLayout = () => {
    return (
        <MainWrapper px={'px-0'}>

            <MainWrapper py={'py-0'}>
                
                <PageTitle>Spaceport</PageTitle>

                <div className={'mt-2'}>
                    <NavLink to={'/spaceport'}>Home</NavLink>
                    <NavLink to={'rent'}>Rent</NavLink>
                </div>

            </MainWrapper>

            <Outlet />

        </MainWrapper>
    )
}
