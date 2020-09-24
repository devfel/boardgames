import React from "react";
import Boardgame from "./components/Boardgame";

// API to get all the items
const ATLAS_API =
  "https://www.boardgameatlas.com/api/search?&client_id=JLBr5npPhV";

// API to select certain searched itens only (ADD &client_id=JLBr5npPhV)
const ATLAS_SEARCH_API = "https://www.boardgameatlas.com/api/search?";

const App = () => {
  const [boardgames, setBoardgames] = React.useState([]);

  React.useEffect(() => {
    fetch(ATLAS_API)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.games); // REMOVE THIS AFTER FINISH
        setBoardgames(data.games);
      });
  }, []);

  return (
    <div className="boardgames-container">
      {boardgames.map((item) => (
        <Boardgame key={item.id} {...item} />
      ))}
      ;
    </div>
  );
};
export default App;
