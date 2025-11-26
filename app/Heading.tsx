import LoginPage from "./LoginPage";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex bg-gray-100 w-full justify-between px-3 pr-6 pt-6 pb-3 h-13 font-bold text-xl vertical-align-center items-center">
        <Link
          href="/"
          className="justify-start w-1/8 min-w-40 hover:text-white ml-3 text-center hover:bg-gray-800 rounded-full p-1.5 px-5"
        >
          SoCScraper
        </Link>
        <div className="justify-center flex gap-3 ">
          <Link
            href="/search"
            className="hover:text-white text-center hover:bg-gray-800 rounded-full p-1.5 px-5"
          >
            Class Search
          </Link>
          <Link
            href="/notifications"
            className="hover:text-white text-center hover:bg-gray-800 rounded-full p-1.5 px-5"
          >
            Notif Center
          </Link>
        </div>
        <div className="w-1/8 min-w-40 justify-end">
          <LoginPage />
        </div>
      </div>
    </>
  );
};

export default Header;
