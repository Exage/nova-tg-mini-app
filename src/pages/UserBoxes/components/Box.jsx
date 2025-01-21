import { Link } from 'react-router'
import { Button } from '@/components/UI/Buttons/Button'
import { Block } from '@/components/UI/Block'

export const Box = ({ title, amount, img }) => {
    return (
        <Link to={'/shoping/openbox'}>
            <Block>
                <div className={'relative flex justify-between items-center pr-4'}>
                    <div className={'w-full absolute top-0 left-0 flex justify-center'}>
                        <span
                            className={
                                'max-w-16 w-full font-bold text-[0.625rem] text-center uppercase px-2.5 bg-accent-300 rounded-b-lg'
                            }
                        >
                            x{amount}
                        </span>
                    </div>

                    <div className={'py-4 px-3 h-32'}>
                        <h3 className={'text-base font-bold leading-none'}>{title}</h3>
                        <div className={'w-28 mt-2.5'}>
                            <Button textSize={'text-sm'}>Buy</Button>
                        </div>
                    </div>
                    <div className={'w-[7.5rem] h-[7.5rem]'}>
                        <img
                            className={'w-full h-full object-contain pointer-events-none'}
                            src={`/boxes/${img}`}
                            alt=""
                        />
                    </div>
                </div>
            </Block>
        </Link>
    )
}
