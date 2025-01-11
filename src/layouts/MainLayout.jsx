import React, { useRef, useEffect } from 'react'

import { Outlet, useLocation } from 'react-router'

import { Navigation } from '@/components/Navigation'

import { useTelegram } from '@/hooks/useTelegram'

export const MainLayout = () => {

    const overflowRef = useRef(null)

    const { platform } = useTelegram()

    const { pathname } = useLocation()

    useEffect(() => {
        if (overflowRef.current) {
            overflowRef.current.scrollTo(0, 0)
        }
    }, [pathname])

    return (
        <div className={`h-screen bg-[url("/main-layout-bg.svg")] bg-center bg-cover bg-no-repeat ${platform === 'ios' ? 'pb-[6.25rem]' : 'pb-20'}`}>

            <div ref={overflowRef} className={'h-full overflow-auto'}>
                <Outlet />
            </div>

            <Navigation />
            
        </div>
    )
}
