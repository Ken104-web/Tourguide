import React, { useState, useEffect } from "react";
import "./search.css";

function Search() {
  const [issearch, setIsSearch] = useState(localStorage.getItem('isSearch') || '');
  const [data, setData] = useState([]);
  useEffect(() => {
    if (issearch.trim() !== '') {
        const obj = JSON.stringify({ query: issearch });
        fetch('api/search', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",        
            },
            body: obj,
        })
        .then(resp => resp.json())
        .then((data) => {
            setData(data);
            console.log(data);
        })
  
    }
}, [issearch]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const obj = JSON.stringify({ query: issearch });
//         const response = await fetch("api/search", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: obj,
//         });

//         if (response.ok) {
//           const result = await response.json();
//           console.log(result);
//         } else {
//           throw new Error('Failed to fetch data');
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setData([]); 
//       }
//     };

//     fetchData();
//   }, [issearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchSite = (e) => {
    const searchedSite = e.target.value;
    setIsSearch(searchedSite);
  };

  return (
    <div className="search">
      <div className="bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search your destination here"
            value={issearch ?? ''}
            onChange={handleSearchSite}
          />
          {/* You might add a submit button here if needed */}
        </form>
        <p>Most reached destinations across the World</p>
        <div className="map">
          {data.map((search, index) => (
            <>
            {/* <img key={index} src={search.image} alt={`Destination ${index}`} /> */}
            <p>{search.destination}</p>
            <h3>{search.activity}</h3>
         </>
         ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
