import { useEffect, useState } from 'react'
import { IShow } from '../../../assets/Types'
import './ShowDetail.css'

export const Details = (props: { show: IShow }) => {
    const { show } = props
    const [summary, setSummary] = useState<any>()
    const parser = new DOMParser();

    useEffect(() => {
        setSummary(() => parser.parseFromString(show.summary, "text/html"))
    }, [show])
    
    

    return (
        <>
            <h1 className="DetailedTitle">{show?.name}</h1>
            Premiered: {show.premiered}<br />
            Ended: {show.ended} <br />
            Rating: {show.rating?.average} / 10 <br />
            Language: {show.language}<br />
            Ganers: {show.genres?.map((ganer: string) => <span key={ganer}>{ganer}, </span>)}
            <p className="DetailedDescription">{summary?.body.firstChild.textContent}</p>
        </>
    )
}
