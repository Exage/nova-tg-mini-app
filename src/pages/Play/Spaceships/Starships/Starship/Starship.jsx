import React from 'react'

import { Link, useLocation } from 'react-router'

export const Starship = ({ data }) => {

    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const missionId = queryParams.get('missionId')

    return (
        <Link to={`/play/ticket?missionId=${missionId}&starshipId=${data.id}`}>{data.name}</Link>
    )
}
