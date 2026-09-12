import React from 'react';

const availableplayer = ({players}) => {
    console.log(players, "players from availableproducts")
    return (
        <div>
            {
                players.map((player)=>{
            return <div>
                {player.player_name}
            </div>
                })
            }
        </div>
    );
};

export default availableplayer;