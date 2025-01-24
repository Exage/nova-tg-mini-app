import classNames from 'classnames'
import styles from '@/Core.module.scss'
import { ModalWrapper } from '@/components/ModalWrapper'
import { Button } from '@/components/UI/Buttons/Button'

import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react'

export const Wallet = () => {
    const [tonConnectUI] = useTonConnectUI()
    const address = useTonAddress()

    const handleConnect = () => {
        tonConnectUI.openModal()
    }

    const handleDisconnect = () => {
        tonConnectUI.disconnect()
    }

    return (
        <ModalWrapper modalId="walletModal">
            <div className={'max-w-[16.875rem] mx-auto text-center pb-12 pt-5'}>
                <h3 className={styles.modalTitle}>Connect wallet</h3>
                <p className={classNames(styles.modalSuptitle, 'mt-3')}>
                    Connect your wallet to have your nft ships at your spaceport
                </p>
                <div
                    className={classNames(
                        'inline-flex items-center justify-center h-10 text-lg font-medium leading-none mt-5 px-5 border rounded-md',
                        address ? 'border-accent-500' : 'border-accent-500/0'
                    )}
                >
                    {address && `${address.slice(0, 4)}...${address.slice(-4)}`}
                </div>
                <div className={'mt-3'}>
                    {address ? (
                        <Button onClick={handleDisconnect}>Disconnect</Button>
                    ) : (
                        <Button onClick={handleConnect}>Connect Wallet</Button>
                    )}
                </div>
                {/* <div className={'flex items-center justify-center mt-3'}>
                    <TonConnectButton />
                </div> */}
            </div>
        </ModalWrapper>
    )
}
