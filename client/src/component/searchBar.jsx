//Request server and include search by query parameter
import "/src/App.css";
import axios from "axios";
import TripPost from "./tripPost";
import { useState, useEffect } from "react";
function SearchBar() {
  const [tripPost, setTripPost] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  const [searchPost, setSearchPost] = useState("");
  const handleOnChange = (e) => {
    setSearchPost(e.target.value);
  };
  const setSearchPostFormTag = (tagInput) => {
    // console.log(tagInput);
    if (!searchPost.includes(tagInput.tag)) {
      const newSearchPost = `${searchPost} ${tagInput.tag}`;
      setSearchPost(newSearchPost.trim());
    }
    console.log(tripPost);
  };
  const searchTripPost = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${searchPost}`
      );
      //   console.log(result);
      setTripPost(result.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    searchTripPost();
  }, [searchPost]);

  return (
    <div className="pageBody">
      <label className="search-bar">
        <p>ค้นหาที่เที่ยว</p>
        <input
          type="text"
          value={searchPost}
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          onChange={handleOnChange}
        />
      </label>
      {/* Trip post */}
      <div className="tripPostContainer">
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? (
          <h1>Loading ....</h1>
        ) : (
          <TripPost tripPost={tripPost} setSearchPost={setSearchPostFormTag} />
        )}
        {/* {console.log(tripPost)} */}
        {/* {tripPost[0] ? console.log("yes") : console.log("no") */}
        {tripPost[0] ? null : <>{`Not found "${searchPost}"`}</>}
      </div>
    </div>
  );
}
export default SearchBar;
