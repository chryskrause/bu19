import React from "react";
import Vacation from "./Vacation";
import vacationSpots from "./vacationSpots";

function App() {
  const vacationInfo = vacationSpots.map(vacay => <Vacation key={vacay.id} place={vacay.place} price={vacay.price} timeToGo={vacay.timeToGo} />)

  return (
    <div>
      {vacationInfo}
    </div>
  )
}

export default App;
