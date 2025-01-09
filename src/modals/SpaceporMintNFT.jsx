import { ModalWrapper } from '@/components/ModalWrapper'

import { useModalsContext } from '@/hooks/useModalsContext'
import { Type } from '@/components/Type'
import { ButtonSecondary } from '@/components/UI/Buttons/ButtonSecondary'

export const SpaceporMintNFT = () => {
    const { data } = useModalsContext()

    return (
        <ModalWrapper modalId="spaceportMintNFT">
            {Object.keys(data).length > 0 && (
                <div className={'px-5 pb-6'}>
                    <div
                        className={
                            'relative w-full h-80 border border-accent-300 rounded-xl overflow-hidden'
                        }
                    >
                        <Type
                            type={data.type}
                            textSize={'text-[0.625rem]'}
                            className={'absolute top-4 left-3'}
                        />

                        <img className={'w-full h-full object-cover'} src={data.photo} alt="" />

                        <div
                            className={
                                'w-full p-3 backdrop-blur-xl text-center absolute bottom-0 left-0 bg-accent-900/5'
                            }
                        >
                            <h2 className={'text-xl font-bold'}>{data.name}</h2>
                            <p className={'text-accent-400 font-bold'}>{data.level} lvl</p>
                        </div>
                    </div>

                    <p className={'mt-2 text-center font-medium text-base'}>
                        Once you create an NFT, it will automatically become available in your
                        wallet and will be displayed on marketplaces such as Getgems.
                    </p>

                    <div className={'mt-9'}>
                        <ButtonSecondary>Mint NFT</ButtonSecondary>
                    </div>

                    <p className={'mt-1 text-center font-medium text-[0.625rem]'}>
                        By clicking this button you agree to burn the old NFT and create a new one.
                    </p>
                </div>
            )}
        </ModalWrapper>
    )
}
