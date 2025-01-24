import classNames from 'classnames'
import styles from '@/Core.module.scss'
import { ModalWrapper } from '@/components/ModalWrapper'
import { Button } from '@/components/UI/Buttons/Button'

import { useWalletConnect } from '@/hooks/useWalletConnect'

export const Wallet = () => {
    const { handleConnect } = useWalletConnect()

    const handleButton = () => {
        handleConnect()
    }

    return (
        <ModalWrapper modalId="walletModal">
            <div className={'max-w-[16.875rem] mx-auto text-center pb-12 pt-5'}>
                <h3 className={styles.modalTitle}>Connect wallet</h3>
                <p className={classNames(styles.modalSuptitle, 'mt-3')}>
                    Connect your wallet to have your nft ships at your spaceport
                </p>
                <div
                    className={
                        'inline-block text-lg font-medium leading-none mt-5 py-2 px-5 border border-accent-500 rounded-md'
                    }
                >
                    123
                </div>
                <Button onClick={handleButton} className={'mt-3'}>
                    Connect Wallet
                </Button>
            </div>
        </ModalWrapper>
    )
}
