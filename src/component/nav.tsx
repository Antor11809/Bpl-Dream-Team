import Logo from "../assets/logo.png";
import { AiTwotoneDollar } from "react-icons/ai";
const nav = ({coin}: {coin : number}) => {
    return (
      <nav className = "flex justify-between  bg-yellow-400 mx-28">
  <img src={Logo} alt="" />
 
 <ul className="flex gap-4 items-center">
  <li>Fixtures</li>
  <li>Venue</li>
  <li>Time</li>
  <li>Schedule</li>
 </ul>
 <h2 className="flex gap-1 items-center text-3xl font-bold  text-blue-500"><AiTwotoneDollar />{coin}</h2>
 </nav>
    );
};

export default nav;