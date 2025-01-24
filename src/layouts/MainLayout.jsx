import React, { useRef, useEffect } from 'react'
import styles from '@/Core.module.scss'
import classNames from 'classnames'

import { Outlet, useLocation } from 'react-router'

import { Navigation } from '@/components/Navigation'

import { useTelegram } from '@/hooks/useTelegram'

import { useModals } from '@/lib/modalsStore'
import { Wallet } from '@/modals/Wallet'

import { TonConnectButton } from '@tonconnect/ui-react'

export const MainLayout = () => {
    const { tg } = useTelegram()
    const overflowRef = useRef(null)

    const { platform } = useTelegram()

    const { pathname } = useLocation()

    const { openModal } = useModals()

    useEffect(() => {
        if (overflowRef.current) {
            overflowRef.current.scrollTo(0, 0)
        }
    }, [pathname])

    useEffect(() => {
        tg.setHeaderColor('#0D0712')
        document.body.style.backgroundColor = '#0D0712'
    }, [tg])

    return (
        <>
            <div
                className={`h-screen bg-[url("/main-layout-bg.svg")] bg-center bg-cover bg-no-repeat ${
                    platform === 'ios' ? 'pb-[6.25rem]' : 'pb-20'
                }`}
            >
                <div ref={overflowRef} className={'h-full overflow-auto relative'}>
                    <button
                        className={classNames(
                            'absolute top-3 right-3 w-11 h-11 flex items-center justify-center',
                            styles.iconStroke
                        )}
                        onClick={() => openModal('walletModal')}
                    >
                        <img src="/wallet.svg" alt="" />
                    </button>
                    {/* <div className={'absolute top-3 right-3'}>
                        <TonConnectButton />
                    </div> */}
                    <Outlet />
                </div>

                <Navigation />
            </div>

            <Wallet />
        </>
    )
}
