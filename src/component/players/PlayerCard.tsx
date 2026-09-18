import { FaUserAlt } from 'react-icons/fa';
import type { Iplayer } from '../../types/playerType';
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from 'react-toastify';

interface Iplayercardprops {
  player: Iplayer;
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
  selectedplayers: Iplayer[];
setselectedplayers: Dispatch<SetStateAction<Iplayer[]>>;

}

const playerCard = ({ player, coin, setcoin, selectedplayers, setselectedplayers }: Iplayercardprops) => {

const [isSelected, setIsSelected] = useState(false);
console.log(isSelected, setIsSelected, "isSelected, setIsSelected")

const handleselectplayer = () => {
  const newprice = coin - player.player_price;

 if (newprice >= 0) {
  setcoin(newprice);
  setselectedplayers([...selectedplayers, player]);
  setIsSelected(true);
  toast.success(`${player.player_name} is purchased successfully`);
} else {
  toast.error("Taka nai tui kinte parbi na re gorib");
}

setselectedplayers([...selectedplayers, player])


};
  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition duration-300 border border-blue-100 hover:border-blue-300">
      
      {/* Player Image */}
      <figure className="px-4 pt-4">
        <img
          src={player.player_image}
          alt="Shoes"
          className="rounded-xl w-full h-56 object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">

        {/* Player Name */}
        <h2 className="card-title text-yellow-500">
          <FaUserAlt className="text-blue-500" />
          {player.player_name}
        </h2>

        {/* Origin & Category */}
        <div className="flex justify-center items-center gap-4 text-gray-700">
          {player.player_origin}

          <button className="Btn bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {player.player_category}
          </button>
        </div>

        {/* Rating */}
        <div className="divider text-orange-500">
          <h2 className="font-semibold">
            Rating
          </h2>
        </div>

        {/* Speciality */}
        <div className="flex justify-center items-center gap-4 text-gray-700">
          {player.player_speciality}

          <button className="Btn bg-green-100 text-green-700 px-3 py-1 rounded-full">
            {player.player_origin}
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm">
          A card component has a figure, a body part, and inside body
          there are title and actions parts
        </p>

        {/* Price & Button */}
        <div className="card-actions justify-between items-center mt-3">
          <h2 className="font-semibold text-2xl text-blue-600">
            ${player.player_price}
          </h2>

          
      <button
   onClick={handleselectplayer}
  className="btn bg-blue-600 hover:bg-blue-700 text-white border-none"
  disabled={isSelected}
  >
  {isSelected === true ? "Selected" : "Choose player"}
  </button>
        </div>

      </div>
    </div>
  );
};

export default playerCard;