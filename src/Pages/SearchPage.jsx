import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Utills/Constant/Constant'
// import ButtonContainer from '../components/ButtonContainer'
import SearchCards from '../components/SearchCards'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SearchPage = () => {
    const [searchData, setSearchData] = useState([])
    const { searchState } = useSelector(store => store.searchBar)
    console.log(searchState)

    const getSearchData = async () => {

        if (searchState === "") {


            // console.log("empty")
        } else {
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${searchState}&key=` + API_KEY)
            const json = await res.json()
            // console.log(json?.items)
            setSearchData(json?.items)
            console.log(json?.items)
        }



    }
    useEffect(() => {
        getSearchData()
    }, [searchState])

    return (
        <div className="searchPage ">
            {/* <ButtonContainer/> */}

            {/* search cards  */}
            {
                searchData.map((searchItem) => {
                    return (
                        <Link key={searchItem.id}  to='/watchpage'>
                            <SearchCards  data={searchItem} />
                        </Link>


                    )
                })
            }

        </div>
    )
}

export default SearchPage