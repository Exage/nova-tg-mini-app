import { useState } from 'react'
import { Outlet } from 'react-router'

import { MainWrapper } from '@/components/MainWrapper'
import { PageTitle } from '@/components/PageTitle'
import { SpaceportUpgradeShip } from '@/modals/SpaceportUpgradeShip'
import { SpaceporMintNFT } from '@/modals/SpaceporMintNFT'
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
    const [pageTitle, setPageTitle] = useState(tabsList[0].title)

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
            <SpaceporMintNFT />
        </>
    )
}
