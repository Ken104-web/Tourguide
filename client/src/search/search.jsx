import { useState, useEffect } from "react"
import "./search.css"

function Search(){
const [issearch, setIsSearch] = useState([])
const [isSite, setIsSite] = useState(null)

useEffect(() => {
    fetch("/api/world")
    .then((r) => r.json())
    .then((data) => console.log(data));
}, [])

const handleSearchSite = (e) => {
    const searchedSite = e.target.value;
    setIsSearch(searchedSite)
};
return(
    <div className="search">
        <div className="bar">
            <input
            type="text"
            placeholder="Search your destination here"
            value={issearch}
            onChange={handleSearchSite}
            />
        <p>Most reached destinations across the country</p>
        </div>
    </div>
)
}

export default Search;