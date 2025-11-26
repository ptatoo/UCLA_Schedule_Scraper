"use client";

import { useState, useEffect } from "react";

const ServerStatus = () => {
  //0 good, 1 asleep, 2 error
  const [serverStat, setServerStat] = useState(1);
  const [___, setCount] = useState(0);

  async function pokeServer() {
    //fetch data from server
    try {
      const response = await fetch(process.env.VITE_API_URL + "");
      setServerStat(0);
      if (!response.ok) {
        setServerStat(1);
      }
    } catch (error) {
      setServerStat(2);
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
      <div className="mb-5 p-3 w-full flex gap-3">
        <div
          className={`${
            serverStat == 0 ? "block" : "hidden"
          } bg-green-500 w-24 text-center rounded text-white font-bold`}
        >
          Server Live
        </div>
        <div
          className={`${
            serverStat == 1 ? "block" : "hidden"
          } bg-red-500 w-50 text-center rounded text-white font-bold`}
        >
          Server Asleep. Poking...
        </div>
        <div
          className={`${
            serverStat == 2 ? "block" : "hidden"
          } bg-red-500 w-28 text-center rounded text-white font-bold`}
        >
          Server Error
        </div>
      </div>
    </>
  );
};

export default ServerStatus;
