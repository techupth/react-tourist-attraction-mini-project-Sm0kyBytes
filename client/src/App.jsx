import "./App.css";
import SearchBar from "./component/searchBar";

function App() {
  return (
    <div className="App">
      {
        /* Start coding here */
        // header
        <div className="mainContainer">
          <div className="pageHeader">
            <h2>เที่ยวไหนดี</h2>
          </div>
          {/* Search bar */}
          <div className="pageBody">
            <SearchBar />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
