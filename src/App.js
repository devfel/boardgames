import React from "react";
import Boardgame from "./components/Boardgame";

// API to get all the items
const ATLAS_API =
  "https://www.boardgameatlas.com/api/search?&client_id=JLBr5npPhV";

// API to select certain searched itens only (ADD &client_id=JLBr5npPhV)
const ATLAS_SEARCH_API = "https://www.boardgameatlas.com/api/search?name=";

const App = () => {
  const [boardgames, setBoardgames] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    fetch(ATLAS_API)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.games); // REMOVE THIS AFTER FINISH
        setBoardgames(data.games);
        setLoading(false);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      ATLAS_SEARCH_API + searchTerm + "&fuzzy_match=true&client_id=JLBr5npPhV"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.games); // REMOVE THIS AFTER FINISH
        setBoardgames(data.games);
        setLoading(false);
      });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading === true || boardgames === false)
    return <div className="loading">Loading...</div>;
  else
    return (
      <>
        <header>
          <form onSubmit={handleOnSubmit}>
            <input
              className="search-bar"
              type="text"
              placeholder="Search Game..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </header>
        <div className="boardgames-container">
          {boardgames.map((item) => (
            <Boardgame key={item.id} {...item} />
          ))}
        </div>
      </>
    );
};
export default App;
