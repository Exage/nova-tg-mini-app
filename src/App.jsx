import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import './App.scss'

import { MainLayout } from './components/MainLayout/MainLayout'

import { Start } from './pages/Start/Start'
import { Profile } from './pages/Profile/Profile'
import { Spaceport } from './pages/Spaceport/Spaceport'
import { Quests } from './pages/Rewards/Quests'
import { Play } from './pages/Play/Play'
import { Missions } from './pages/Play/Missions/Missions'
import { Spaceships } from './pages/Play/Spaceships/Spaceships'
import { Ticket } from './pages/Play/Ticket/Ticket'

import { NotFound } from './pages/NotFound/NotFound'

function App() {

    const [started, setStarted] = useState(true)

    return (
        <div className="App">
            <Routes>

                <Route index element={started ? <Navigate to='/profile' /> : <Start setStarted={setStarted} />} />

                <Route element={started ? <MainLayout /> : <Navigate to='/' />}>
                    <Route path='profile' element={<Profile />} />
                    <Route path='spaceport' element={<Spaceport />} />
                    <Route path='quests' element={<Quests />} />
                    <Route path='play' element={<Play />}>
                        <Route index element={<Missions />} />
                        <Route path='spaceships' element={<Spaceships />} />
                        <Route path='ticket' element={<Ticket />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Route>

            </Routes>
        </div>
    )
}

export default App
