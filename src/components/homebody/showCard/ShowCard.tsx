import { Link } from "react-router-dom";
import { IShow } from "../../../assets/Types";
import './ShowCard.css'

export const ShowCard = (props:{show: IShow}) => {
    const{show} = props
    return (
        <Link data-testid='card-link' key={show.id} to={`/${show.id}`}>
            <div className='CardWrapper'>
                <img src={show.image?.original } alt='Image Not found' className='CardImage' />
                <div className='CardRight'>
                    <p data-testid='card-title' className='CardTitle'>{show.name}</p>
                    <p className='CardAired'>({show.premiered + ' - ' + show.ended})</p>
                </div>
            </div>
        </Link>
    )
}
