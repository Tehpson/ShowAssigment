import { IRootShowObject  } from '../../assets/Types'
import {AxiosError} from 'axios'
import { Error } from './error/Error';
import { ShowCard } from './showCard/ShowCard';
import './HomeBody.css'

export const HomeBody = (props:{shows:IRootShowObject[]|null, error:AxiosError|null, flag:boolean}) => {
    const {shows, error, flag} = props;
  return (
    <>
    {flag //if user have made an search request
        ?
        error !== null //if there are error show error
          ?
          <Error error={error}/>
          :
          shows !== null //if there are results from API show Results
            ?
            shows.map((shows: IRootShowObject) =>
                <ShowCard key={shows.show.id} show={shows.show}/>
            )
            : //else show no result
            <p data-testid='homeNoRenaultFound' className='HomeViewNoResult'>No Result found</p>
        : // else show nothing
        <p className='HomeViewInitText'>Get started by searching for a show</p>
      }
    </>
  )
}
