import { useEffect } from "react"

const tg = window.Telegram.WebApp

export const useTelegram = () => {

    useEffect(() => {
        tg.disableVerticalSwipes()
        tg.lockOrientation()
        tg.expand()
    }, [])

    return {
        tg,
        platform: tg.platform, 
        user: tg.initDataUnsafe?.user
    }
}
