import { Box } from '../BuyBoxes/components/Box'

export const BuyBoxes = () => {
    return (
        <div className={'flex flex-col gap-y-4 mt-4'}>
            <Box title={'Standart Box'} price={1000} img={'box_1.png'} />
            <Box title={'Advanced box'} price={1000} img={'box_2.png'} />
            <Box title={'Premium box'} price={1000} img={'box_3.png'} />
        </div>
    )
}
