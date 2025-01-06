import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import './App.scss'

import { MainLayout } from './layouts/MainLayout'
import { SpaceportLayout } from './layouts/SpaceportLayout'

import { Start } from './pages/Start/Start'
import { Profile } from './pages/Profile/Profile'
import { Spaceport } from './pages/Spaceport/Spaceport'
import { Quests } from './pages/Rewards/Quests'
import { Galaxies } from './pages/Galaxies/Galaxies'
import { Missions } from './pages/Missions/Missions'
import { Selection } from './pages/Selection/Selection'
import { Ticket } from './pages/Ticket/Ticket'
import { Refferal } from './pages/Refferal/Refferal'
import { RentStarship } from './pages/RentStarship/RentStarship'

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

                    <Route path='profile' element={<Profile />} />
                    <Route path='quests' element={<Quests />} />

                    <Route path='play'>
                        <Route index element={<Navigate to={'galaxies'} />}/>
                        <Route path='galaxies' element={<Galaxies />} />
                        <Route path='missions' element={<Missions />} />
                        <Route path='selection' element={<Selection />} />
                        <Route path='ticket' element={<Ticket />} />
                    </Route>

                    <Route path='spaceport' element={<SpaceportLayout />}>
                        <Route index element={<Spaceport />} />
                        <Route path='rent' element={<RentStarship />} />
                    </Route>

                    <Route path='refferal' element={<Refferal />} />
                    <Route path='*' element={<NotFound />} />

                </Route>

            </Routes>
        </div>
    )
}

export default App
