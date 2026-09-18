import { Suspense } from "react";
import Nav from "./component/nav"
import Players from "./component/players/players"
import type {Iplayer} from "./types/playerType"
import { useState } from "react";

const playersFetch = async():Promise<Iplayer[]> => {
const res= await fetch("./data.json")
const data = await res.json()
return data;
}


function App() {
  // const playerspromise = playersFetch()
  const [playerspromise] = useState(() => playersFetch())
  const [coin, setcoin] = useState(500)
  return (
    <>
  <Nav coin={coin}/>
  <Suspense fallback = {<h1>Loading....</h1>}>
  <Players playerspromise = {playerspromise} coin={coin} setcoin={setcoin} />
  </Suspense>

    </>
  )
}

export default App

