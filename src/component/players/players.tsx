import React from 'react';

interface playerprops{
    playerpromise : promise<Iplayer[]>
}

const player = ({playerspromise}:playerprops) => {
    console.log(playerspromise);
    const players = use(playerspromise)
    console.log(players, "players")
    return (
        <div>
            <availableplayer players={players}/>
        </div>
    );
};

export default player;