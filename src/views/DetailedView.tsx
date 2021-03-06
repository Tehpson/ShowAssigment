import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShowAPI } from "../assets/API";
import { IShow } from "../assets/Types";
import { AxiosError } from 'axios'
import { DetailedBody } from "../components/detailedBody/DetailedBody";

export const DetailedView = () => {
  const [show, setShow] = useState<IShow | null>(null)
  const [error, setError] = useState<AxiosError | null>(null)
  const params = useParams();

  useEffect(() => {
    ShowAPI.get(`shows/${params.id}`)
      .then((res) => setShow(res.data))
      .catch((error: AxiosError) => setError(error))
  }, [])


  return (
    <>
      <DetailedBody show={show} error={error} />
    </>
  )
}
