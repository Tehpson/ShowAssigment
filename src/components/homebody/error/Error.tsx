import {AxiosError} from 'axios'

export const Error = (props:{error:AxiosError}) => {
    const{error} = props
  return (
    <div>{error.response?.data}</div>
  )
}
