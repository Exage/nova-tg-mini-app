import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'

import { MainWrapper } from '@/components/MainWrapper'
import { PageTitle } from '@/components/PageTitle'

import { SpaceportUpgradeShip } from '@/modals/SpaceportUpgradeShip'
import { SpaceportMintNFT } from '@/modals/SpaceportMintNFT'
import { SpaceportRentShip } from '@/modals/SpaceportRentShip'

import { TabLink } from '@/components/UI/Tabs/TabLink'
import { TabsWrapper } from '@/components/UI/Tabs/TabsWrapper'

const tabsList = [
    {
        title: 'Spaceport',
        to: 'ships',
    },
    {
        title: 'Rent a starship',
        to: 'rent',
    },
]

export const SpaceportLayout = () => {
    const [pageTitle, setPageTitle] = useState('')
    const location = useLocation()

    useEffect(() => {
        const currentTab = tabsList.find((tab) => location.pathname.includes(tab.to))
        setPageTitle(currentTab ? currentTab.title : '')
    }, [location.pathname])

    return (
        <>
            <MainWrapper px={'px-0'}>
                <MainWrapper py={'py-0'}>
                    <PageTitle>{pageTitle}</PageTitle>

                    <TabsWrapper className={'mt-2'}>
                        {tabsList.map((tabLink, index) => (
                            <TabLink
                                key={index}
                                to={tabLink.to}
                                onClick={() => setPageTitle(tabLink.title)}
                            >
                                {tabLink.title}
                            </TabLink>
                        ))}
                    </TabsWrapper>
                </MainWrapper>

                <Outlet />
            </MainWrapper>

            <SpaceportUpgradeShip />
            <SpaceportMintNFT />
            <SpaceportRentShip />
        </>
    )
}
