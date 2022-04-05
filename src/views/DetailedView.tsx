import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShowAPI } from "../assets/API";
import { IShow } from "../assets/Types";

export const DetailedView = () => {
  const [serverResponse, setServerResponse] = useState<any>()
  const parser = new DOMParser();
  const [summary, setSummary] = useState<any>()

  useEffect(() => {
    ShowAPI.get<IShow>(`/shows/${params.id}`)
  }, [])

  const FetchData = () => {



    try {
      if (params.id !== undefined) {
        const { data } = await API.SearchByID(params.id)
        setServerResponse(data)
        console.log(data)
        setSummary(parser.parseFromString(data.summary, "text/html"))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>DetailedView</div>
  )
}
function useParams() {
  throw new Error("Function not implemented.");
}

