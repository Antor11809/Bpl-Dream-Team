import { Suspense } from "react";
import Nav from "./component/nav"
import Players from "./component/players/players"
import type {Iplayer} from "./types/playerType"

const playersFetch = async():Promise<Iplayer> => {
const res= await fetch("./data.json")
const data = await res.json()
return data;
}


function App() {
  const playerspromise = playersFetch()
  return (
    <>
  <Nav />
  <Suspense fallback = {<h1>Loading....</h1>}>
  <Players playerspromise = {playerspromise} />
  </Suspense>

    </>
  )
}

export default App


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Antor11809/Bpl-Dream-Team.git
// git push -u origin main