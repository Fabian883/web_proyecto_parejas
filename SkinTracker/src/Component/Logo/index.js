import skin_tracker_logo from "../../images/champs/skin_tracker_logo.png";

function Logo({ width, height }) {
  return (
    <img
      className={`${width || "w-20"} ${height || "h-20"}`}
      alt="Logo"
      src={skin_tracker_logo} /*"https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"*/
    />
  );
}

export default Logo;
