export const Points = ({ children }) => {
    return (
        <p className={'flex items-center gap-2 text-accent-500 after:bg-[url("/gem.svg")] after:inline-block after:bg-center after:bg-no-repeat after:bg-contain after:w-3 after:h-4'}>{children}</p>
    )
}