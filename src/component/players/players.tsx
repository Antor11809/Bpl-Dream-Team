import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";
import AvailablePlayer from "./availableplayer";
import SelectedPlayers from "./SelectedPlayers";
interface playerprops{
   playerspromise: Promise<Iplayer[]>
   coin:number;
   setcoin: Dispatch<SetStateAction<number>>
}

const Players = ({playerspromise, coin, setcoin}: playerprops) => {
    console.log(playerspromise);
    const players = use(playerspromise)
    console.log(players, "players")
    const [buttonType, setbuttonType] = useState("Available")
    const [selectedplayers, setselectedplayers] = useState<Iplayer[]>([])

    const handleUpdateBtnType =  (type: "Available" | "selected") => {
      setbuttonType(type)
    };

    return (
        <div className = "container mx-auto">

<div className = "flex justify-between gap-4">
    <h2 className = "font-bold text-2xl">{buttonType === "Available" ? "Available players" : "Selected players"}</h2>

<div>
 <button onClick={ () => handleUpdateBtnType("Available")} className={`btn ${buttonType === "Available" ? "bg-green-400 text-black" : "bg-gray-300"} rounded-r-none`}>
  Availableplayers
</button>
 <button onClick={ () => handleUpdateBtnType("selected")} className={`btn ${buttonType === "selected" ? "bg-green-400 text-black" : "bg-gray-300"} rounded-r-none`}>Selected</button>
</div>

</div>
{buttonType === "Available" ? (
  <AvailablePlayer
    players={players}
    coin={coin}
    setcoin={setcoin}
    selectedplayers={selectedplayers}
    setselectedplayers={setselectedplayers}
  />
) : (
  <SelectedPlayers
    selectedplayers={selectedplayers}
    setselectedplayers={setselectedplayers}
  />
)}
</div>
    )};
export default Players;