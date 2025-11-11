import { useState, useEffect } from "react";

const ServerStatus = () => {
  const [serverStat, setServerStat] = useState(false);
  const [___, setCount] = useState(0);

  async function pokeServer() {
    //fetch data from server
    try {
      const response = await fetch(
        "https://ucla-schedule-scraper-backend.onrender.com/"
      );
      setServerStat(true);
      if (!response.ok) {
        throw new Error("HTTP error: ${response.status}");
      }
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  useEffect(() => {
    const runFunction = () => {
      setCount((prevCount) => prevCount + 1);
      pokeServer();
    };

    // Set up the interval every 1000ms
    const intervalId = setInterval(runFunction, 1000);

    // Clean up the interval when the component unmounts or dependencies change
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="mb-5 p-1.5 bg-blue-50 w-full flex gap-3">
        <div
          className={`${
            serverStat ? "block" : "hidden"
          } bg-green-500 w-24 text-center rounded text-white font-bold`}
        >
          Server Live
        </div>
        <div
          className={`${
            serverStat ? "hidden" : "block"
          } bg-red-500 w-28 text-center rounded text-white font-bold`}
        >
          Server Asleep
        </div>
      </div>
    </>
  );
};

export default ServerStatus;
