import { useState } from 'react'
import {AxiosError} from 'axios'
import { ShowAPI } from '../../assets/API'
import { Header } from '../../components/header/Header'

interface Show{
    show:[
    id:number,
    image:[string],
    rating:[Number],
    name:string,
    premiered:string,
    ended:string,
    ]
    
}


export const HomeView = () => {
    const [shows, setShows] = useState<Show|null>(null)
    const [error, setError] = useState<AxiosError|null>(null)

    const FetchData = (searchBox:string) =>{
        ShowAPI.get<Show>(`search/shows?q=${searchBox}`)
        .then((res) => setShows(res.data))
        .catch((error:AxiosError) => setError(error.response?.data))
    }

  return (
    <>
        <Header FetchData={FetchData}/>
    </>
  )
}
