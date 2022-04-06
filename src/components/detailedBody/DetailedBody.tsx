import { AxiosError } from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { IShow } from '../../assets/Types'
import { Error } from './error/Error'
import { ShowDetail } from './showDetail/showDetail'
import './DetailedBody.css'

export const DetailedBody = (props: { show: IShow | null, error: AxiosError | null }) => {
    const { show, error } = props
    return (
        <>
            <Link to='/' className='DetailArrow'>&#8592;</Link>
            {
                error !== null //if there are error show error
                    ?
                    <Error />
                    :
                    show && <ShowDetail show={show} />
            }
        </>

    )
}
