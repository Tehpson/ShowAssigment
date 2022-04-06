import { IShow } from '../../../assets/Types'
import { Details } from './Details'
import './ShowDetail.css'

export const ShowDetail = (props: { show: IShow }) => {
    const { show } = props

    return (
        <div className="DetailedWrapper">
            <img className="DetailedImg" src={show.image?.original} alt="Not Found" />
            <div className="DetailedRight">
                <Details show={show} />
            </div>
        </div>
    )
}
