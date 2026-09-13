import { use } from "react";
import type { Iplayer } from "../../types/playerType";
import AvailablePlayer from "./availableplayer";
interface playerprops{
   playerspromise: Promise<Iplayer[]>
}

const Players = ({playerspromise}: playerprops) => {
    console.log(playerspromise);
    const players = use(playerspromise)
    console.log(players, "players")
    return (
        <div className = "container mx-auto">

<div className = "flex justify-between gap-4">
    <h2 className = "font-bold text-2xl">Available players</h2>

<div>
 <button className="btn btn-info">Availableplayers</button>
 <button className="btn btn-info">Selected</button>
</div>


</div>
       <AvailablePlayer players={players}/>
        </div>
    );
};

export default Players;