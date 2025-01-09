import { NavLink } from "react-router"

export const TabLink = ({ to = '/', children, ...props }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `min-h-7 flex items-center justify-center px-4 text-sm border rounded-md text-center leading-none ${
                    isActive
                        ? 'bg-accent-700 border-accent-300'
                        : 'bg-accent-700/0 border-accent-300/0'
                }`
            }
            {...props}
        >
            {children}
        </NavLink>
    )
}
