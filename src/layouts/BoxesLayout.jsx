import { Outlet } from "react-router"

import { MainWrapper } from "@/components/MainWrapper"
import { PageTitle } from "@/components/PageTitle"
import { TabsWrapper } from "@/components/UI/Tabs/TabsWrapper"
import { TabLink } from "@/components/UI/Tabs/TabLink"

const tabsList = [
    {
        title: 'Buy Boxes',
        to: 'buy',
    },
    {
        title: 'My boxes',
        to: 'my',
    },
]

export const BoxesLayout = () => {
    return (
        <MainWrapper>
            <PageTitle>Boxes</PageTitle>

            <TabsWrapper className={'mt-2'}>
                {tabsList.map((tabLink, index) => (
                    <TabLink
                        key={index}
                        to={tabLink.to}
                    >
                        {tabLink.title}
                    </TabLink>
                ))}
            </TabsWrapper>

            <Outlet />
        </MainWrapper>
    )
}
