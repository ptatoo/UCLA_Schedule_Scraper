import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex w-full justify-between p-3 bg-blue-200 h-18 font-bold text-xl vertical-align-center items-center">
        <Link
          to="UCLA_Schedule_Scraper/"
          className="justify-start w-1/6 hover:text-white"
        >
          SoCScraper
        </Link>
        <div className="justify-center flex gap-3">
          <Link to="UCLA_Schedule_Scraper/search" className="hover:text-white">
            Class Search
          </Link>
          <Link
            to="UCLA_Schedule_Scraper/notifications"
            className="hover:text-white"
          >
            Notif Center
          </Link>
        </div>
        <div className="w-1/6 justify-end">
          <LoginPage />
        </div>
      </div>
    </>
  );
};

export default Header;
