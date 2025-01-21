import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import './App.scss'

import { MainLayout } from './layouts/MainLayout'
import { SpaceportLayout } from './layouts/SpaceportLayout'
import { RewardsLayout } from './layouts/RewardsLayout'
import { BoxesLayout } from './layouts/BoxesLayout'

import { Start } from './pages/Start/Start'
import { Profile } from './pages/Profile/Profile'
import { Spaceport } from './pages/Spaceport/Spaceport'
import { Quests } from './pages/Quests/Quests'
import { Galaxies } from './pages/Galaxies/Galaxies'
import { Missions } from './pages/Missions/Missions'
import { Selection } from './pages/Selection/Selection'
import { Ticket } from './pages/Ticket/Ticket'
import { Refferal } from './pages/Refferal/Refferal'
import { RentStarship } from './pages/RentStarship/RentStarship'
import { Shoping } from './pages/Shoping/Shoping'
import { BuyBoxes } from './pages/BuyBoxes/BuyBoxes'
import { UserBoxes } from './pages/UserBoxes/UserBoxes'
import { OpenBox } from './pages/OpenBox/OpenBox'

import { NotFound } from './pages/NotFound/NotFound'

import { useUserContext } from './hooks/useUserContext'
import { useTelegram } from './hooks/useTelegram'

function App() {
    const { user } = useUserContext()
    const { tg } = useTelegram()

    useEffect(() => {
        tg.disableVerticalSwipes()
        tg.lockOrientation()
        tg.expand()
    }, [tg])

    return (
        <div className="App">
            <Routes>
                <Route index element={user ? <Navigate to={'/profile'} /> : <Start />} />

                <Route element={user ? <MainLayout /> : <Navigate to={'/'} />}>
                    <Route path="profile" element={<Profile />} />

                    <Route path="shoping">
                        <Route index element={<Shoping />} />
                        <Route path="boxes" element={<BoxesLayout />}>
                            <Route index element={<Navigate to={'buy'} />} />
                            <Route path="buy" element={<BuyBoxes />} />
                            <Route path="my" element={<UserBoxes />} />
                        </Route>
                        <Route path="openbox" element={<OpenBox />} />
                    </Route>

                    <Route path="play">
                        <Route index element={<Navigate to={'galaxies'} />} />
                        <Route path="galaxies" element={<Galaxies />} />
                        <Route path="missions" element={<Missions />} />
                        <Route path="selection" element={<Selection />} />
                        <Route path="ticket" element={<Ticket />} />
                    </Route>

                    <Route path="spaceport" element={<SpaceportLayout />}>
                        <Route index element={<Navigate to={'ships'} />} />
                        <Route path="ships" element={<Spaceport />} />
                        <Route path="rent" element={<RentStarship />} />
                    </Route>

                    <Route path="rewards" element={<RewardsLayout />}>
                        <Route index element={<Navigate to={'refferal'} />}></Route>
                        <Route path="refferal" element={<Refferal />} />
                        <Route path="quests" element={<Quests />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
