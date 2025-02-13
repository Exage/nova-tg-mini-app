import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import './App.scss'

import { MainLayout } from './layouts/MainLayout'
import { SpaceportLayout } from './layouts/SpaceportLayout'
import { RewardsLayout } from './layouts/RewardsLayout'

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

import { NotFound } from './pages/NotFound/NotFound'

import { useTelegram } from './hooks/useTelegram'
import { useUser } from './lib/userStore'

function App() {
    const { user } = useUser()
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

                    <Route path="shoping" element={<Shoping />} />

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
