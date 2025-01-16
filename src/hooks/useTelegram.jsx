const tg = window.Telegram.WebApp

export const useTelegram = () => {
    
    return {
        tg,
        platform: tg.platform,
        user: tg.initDataUnsafe?.user
    }
}
