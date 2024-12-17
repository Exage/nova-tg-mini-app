import React, { useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import './App.scss'

import { MainLayout } from './components/MainLayout/MainLayout'

import { Start } from './pages/Start/Start'
import { Profile } from './pages/Profile/Profile'
import { Spaceport } from './pages/Spaceport/Spaceport'
import { Quests } from './pages/Rewards/Quests'
import { Play } from './pages/Play/Play'
import { Missions } from './pages/Play/Missions/Missions'
import { Selection } from './pages/Play/Selection/Selection'
import { Confirm } from './pages/Play/Confirm/Confirm'
import { Refferal } from './pages/Refferal/Refferal'

import { NotFound } from './pages/NotFound/NotFound'

import { useUserContext } from './hooks/useUserContext'
import { useTelegram } from './hooks/useTelegram'

function App() {

    const { user } = useUserContext()
    const { tg } = useTelegram()

    const [started, setStarted] = useState(true)

    useEffect(() => {

        tg.disableVerticalSwipes()
        tg.lockOrientation()
        tg.expand()

        // window.addEventListener('scroll', () => {
        //     if (window.scrollY > 0) window.scrollTo(0, 0)
        // })

    }, [])

    return (
        <div className="App">
            <Routes>

                <Route index element={user ? <Navigate to='/profile' /> : <Start setStarted={setStarted} />} />

                <Route element={user ? <MainLayout /> : <Navigate to='/' />}>

                    <Route path='profile' element={<Profile />} />
                    <Route path='spaceport' element={<Spaceport />} />
                    <Route path='quests' element={<Quests />} />

                    <Route path='play' element={<Play />}>
                        <Route index element={<Missions />} />
                        <Route path='selection' element={<Selection />} />
                        <Route path='confirm' element={<Confirm />} />
                    </Route>
                    
                    <Route path='refferal' element={<Refferal />} />
                    <Route path='*' element={<NotFound />} />

                </Route>

            </Routes>
        </div>
    )
}

export default App
