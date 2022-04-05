import './Header.css'
import { SearchBar } from '../searchBar/SearchBar'

export const Header = (props:{FetchData(value:string):void}) => {
    const {FetchData} = props
  return (
    <div>
        <h1 className='HeaderTitle'>Welcome to the AstraZeneca TV Database</h1>
        <SearchBar FetchData={FetchData} />
    </div>
  )
}
