import { useState } from 'react'
import { AxiosError } from 'axios'
import { ShowAPI } from '../assets/API'
import { Header } from '../components/header/Header'
import { IRootShowObject } from '../assets/Types'
import { HomeBody } from '../components/homebody/HomeBody'

export const HomeView = () => {
  const [shows, setShows] = useState<IRootShowObject[] | null>(null)
  const [error, setError] = useState<AxiosError | null>(null)
  const [flag, setFlag] = useState<boolean>(false)

  const FetchData = (searchBox: string) => {
    ShowAPI.get<IRootShowObject[]>(`search/shows?q=${searchBox}`)
      .then((res) => {
        res.data?.length > 0
          ?
          setShows(res.data)
          :
          setShows(null)
      })
      .then(() => setFlag(true))
      .catch((error: AxiosError) => setError(error))
  }

  return (
    <>
      <Header FetchData={FetchData} />
      <HomeBody shows={shows} error={error} flag={flag} />
    </>
  )
}
