import { useState } from 'react'
import './SearchBar.css'


export const SearchBar = (props:{FetchData(value:string):void}) => {
    const {FetchData} = props

    const [searchBox, setSearchBox] = useState<string>('')

  return (
    <div className='SearchBar'>
        <input data-testid='search-box' placeholder='Search' className='SearchBox' onChange={event => setSearchBox(event.target.value)}></input>
        <img data-testid='search-button' src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Search_Noun_project_15028.svg' onClick={() => FetchData(searchBox)} alt='Search' />
      </div>
  )
}
