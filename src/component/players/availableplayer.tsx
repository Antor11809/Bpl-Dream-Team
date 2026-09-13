import React from 'react';
import type { Iplayer } from '../../playerType';
import { FaUserAlt } from "react-icons/fa";
import PlayerCard from "./playerCard";

const Availableplayer = ({players}) => {
    console.log(players, "players from availableproducts")
    return (
        <div className='grid grid-cols-3 gap-4 mt-7'>
            {
                players.map((player: Iplayer, ind:number)=>{
            return <PlayerCard key={ind} player={player}/>

                })
            }
        </div>
    );
};

export default Availableplayer;