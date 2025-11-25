import LoginPage from "./LoginPage";

const Header = () => {
  return (
    <>
      <div className="flex w-full justify-between p-3 bg-blue-200 h-18 font-bold text-xl vertical-align-center items-center">
        <div className="justify-start w-1/6">SoCScraper</div>
        <div className="justify-center flex gap-3">
          <div>Class Search</div>
          <div>Notif Center</div>
        </div>
        <div className="w-1/6 justify-end">
          <LoginPage />
        </div>
      </div>
    </>
  );
};

export default Header;
