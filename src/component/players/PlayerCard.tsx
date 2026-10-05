import { FaUserAlt } from "react-icons/fa";
import type { Iplayer } from "../../types/playerType.tsx";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface Iplayercardprops {
  player: Iplayer;
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
  selectedplayers: Iplayer[];
  setselectedplayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setcoin,
  selectedplayers,
  setselectedplayers,
}: Iplayercardprops) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleselectplayer = () => {
    const newprice = coin - player.player_price;

    if (newprice >= 0) {
      setcoin(newprice);
      setselectedplayers([...selectedplayers, player]);
      setIsSelected(true);

      toast.success(`${player.player_name} is purchased successfully`, {
        position: "top-left",
      });
    } else {
      toast.error("Taka nai tui kinte parbi na re gorib", {
        position: "top-left",
      });
    }
  };

  return (
    <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 overflow-hidden">

      {/* Player Image */}
      <figure className="px-4 pt-4">
        <img
          src={player.player_image}
          alt={player.player_name}
          className="w-full h-64 rounded-2xl object-cover object-top"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">

        {/* Player Name */}
        <h2 className="card-title text-xl font-bold text-gray-800">
          <FaUserAlt className="text-blue-600" />
          {player.player_name}
        </h2>

        {/* Origin & Category */}
        <div className="flex justify-between items-center gap-4 text-gray-700">

          <span className="font-medium">
            {player.player_origin}
          </span>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            {player.player_category}
          </span>

        </div>

        {/* Rating */}
        <div className="divider text-orange-500">
          <h2 className="font-semibold">
            Rating
          </h2>
        </div>

        {/* Speciality */}
        <div className="flex justify-between items-center gap-4 text-gray-700">

          <span>
            {player.player_speciality}
          </span>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {player.player_origin}
          </span>

        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          A talented player ready to strengthen your team and deliver great
          performance.
        </p>

        {/* Price & Button */}
        <div className="card-actions justify-between items-center mt-4">

          <h2 className="font-bold text-2xl text-blue-600">
            ${player.player_price}
          </h2>

          <button
            onClick={handleselectplayer}
            disabled={isSelected}
            className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl px-5 disabled:bg-gray-400 disabled:text-white"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default PlayerCard;