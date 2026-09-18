import React, { type SetStateAction } from 'react';
import { type Dispatch } from 'react';
import { TbTrash } from "react-icons/tb";
import type { Iplayer } from "../../types/playerType";
interface Iselectedplayers  {
  selectedplayers:Iplayer[] 
    setselectedplayers: Dispatch<SetStateAction<Iplayer[]>>
}

const SelectedPlayers = ({ selectedplayers, setselectedplayers }: Iselectedplayers) => {
   return (
  <div className="grid grid-cols-1 gap-7 mt-6">
    {selectedplayers.map((player: Iplayer) => {
      return (
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <img
              src={player.player_image}
              alt=""
              className="h-[40px] w-[40px]"
            />
            <div>
              <h2 className='font-bold text-2xl'>{player.player_name}</h2>
              <p>{player.player_category}</p>
            </div>
          </div>

          <span className="text-red-500 font-bold">
            <TbTrash />
          </span>
        </div>
      );
    })}
  </div>
);
};

export default SelectedPlayers;