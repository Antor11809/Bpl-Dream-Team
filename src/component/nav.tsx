import Logo from "../assets/logo.png";
const nav = () => {
    return (
      <nav className = "flex justify-between  bg-yellow-400 mx-28">
  <img src={Logo} alt="" />
 
 <ul className="flex gap-4 items-center">
  <li>Fixtures</li>
  <li>Venue</li>
  <li>Time</li>
  <li>Schedule</li>
 </ul>
 </nav>
    );
};

export default nav;