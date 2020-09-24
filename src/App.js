import React from "react";
import Boardgame from "./components/Boardgame";

// API to get all the items
const ATLAS_API =
  "https://www.boardgameatlas.com/api/search?&client_id=JLBr5npPhV";

// API to select certain searched itens only (ADD &client_id=JLBr5npPhV)
const ATLAS_SEARCH_API = "https://www.boardgameatlas.com/api/search?";

const App = () => {
  const boardgames = ["1", "2", "3"];
  return (
    <>
      {boardgames.map((item) => (
        <Boardgame />
      ))}
      ;
    </>
  );
};
export default App;
