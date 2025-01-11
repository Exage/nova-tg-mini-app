import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'

import { MainWrapper } from '@/components/MainWrapper'
import { PageTitle } from '@/components/PageTitle'

import { TabLink } from '@/components/UI/Tabs/TabLink'
import { TabsWrapper } from '@/components/UI/Tabs/TabsWrapper'

const tabsList = [
    {
        title: 'Refferal',
        to: 'refferal',
    },
    {
        title: 'Quests',
        to: 'quests',
    },
]

export const RewardsLayout = () => {
    const [pageTitle, setPageTitle] = useState('')
    const location = useLocation()

    useEffect(() => {
        const currentTab = tabsList.find((tab) => location.pathname.includes(tab.to))
        setPageTitle(currentTab ? currentTab.title : '')
    }, [location.pathname])

    return (
        <MainWrapper>
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

            <Outlet />
        </MainWrapper>
    )
}
