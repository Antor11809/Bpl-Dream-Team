import { type Dispatch, type SetStateAction } from 'react';
import PlayerCard from "./PlayerCard";
import type { Iplayer } from '../../types/playerType';

interface IAvailableprops{
    players: Iplayer[];
    coin:number;
    setcoin: Dispatch<SetStateAction<number>>
  selectedplayers: Iplayer[];
   setselectedplayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const Availableplayer = ({players, coin, setcoin, selectedplayers, setselectedplayers}: IAvailableprops) => {
    console.log(players, "players from availableproducts")
    return (
        <div className='grid grid-cols-3 gap-4 mt-7'>
            {
                players.map((player: Iplayer, ind:number)=>{
            return <PlayerCard key={ind} player={player} coin={coin} setcoin= {setcoin} selectedplayers={selectedplayers} setselectedplayers={setselectedplayers}/>

                })
            }
        </div>
    );
};

export default Availableplayer;