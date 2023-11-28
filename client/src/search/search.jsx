import { useState, useEffect } from "react"
import "./search.css"

function Search(){
const [issearch, setIsSearch] = useState(localStorage.getItem('isSearch' || ''))
const [data, setData] = useState([])


const obj =  JSON.stringify({query: issearch})
useEffect(() => {
    fetch("api/search", {
        method: "POST",
        headers : {
        "content-Type": "application/json",
        },
        body : obj
    })
    .then((r) => r.json())
    .then((data) => console.log(data));
}, [obj])
const handleSubmit = (e) => {
    e.preventDefault();
};
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
            value={issearch ?? ''}
            onChange={handleSearchSite}
            />
        <p>Most reached destinations across the World</p>

        </div>
    </div>
)
}

export default Search;