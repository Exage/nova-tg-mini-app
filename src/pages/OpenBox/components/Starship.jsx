export const Starship = ({ data, width, height }) => {
    return (
        <div
            className={'border border-accent-300 bg-accent-800 rounded-xl overflow-hidden relative'}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <img className={'w-full h-full object-cover pointer-events-none touch-none'} src={data.photo} alt="" />
            <div className={'absolute bottom-0 left-0 w-full h-8 backdrop-blur-lg flex items-center'}>
                <h3 className={'w-full text-center font-bold leading-none text-xl'}>{data.name}</h3>
            </div>
        </div>
    )
}
