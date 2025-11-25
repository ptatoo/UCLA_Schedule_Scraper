import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex w-full justify-between p-3 h-18 font-bold text-xl vertical-align-center items-center">
        <Link
          to="/"
          className="justify-start w-1/8 hover:text-white ml-3 text-center hover:bg-gray-800 rounded-full p-1.5 px-5"
        >
          SoCScraper
        </Link>
        <div className="justify-center flex gap-3 ">
          <Link
            to="/search"
            className="hover:text-white hover:bg-gray-800 rounded-full p-1.5 px-5"
          >
            Class Search
          </Link>
          <Link
            to="/notifications"
            className="hover:text-white hover:bg-gray-800 rounded-full p-1.5 px-5"
          >
            Notif Center
          </Link>
        </div>
        <div className="w-1/8 justify-end">
          <LoginPage />
        </div>
      </div>
    </>
  );
};

export default Header;
