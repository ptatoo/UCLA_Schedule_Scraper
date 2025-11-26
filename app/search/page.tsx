"use client";

import Classes from "./Classes";
import SearchPanel from "./SearchPanel";
import ServerStatus from "./ServerStatus";
import { useState } from "react";

//app function
function SearchApp() {
  const [sectionData, setSectionData] = useState([]);
  const searchPanelVisibility = true;
  const sectionPara = [
    "classId",
    "lec_dis",
    "status",
    "total_spots",
    "enrolled_spots",
    "waitlist_status",
    "days",
    "start_time",
    "end_time",
    "location",
    "units",
    "instructors",
  ];

  const displayPara = [
    "section",
    "status",
    "total spots",
    "enrolled spots",
    "waitlist",
    "days",
    "start time",
    "end time",
    "location",
    "units",
    "instructors",
  ];

  //initiate search function passed to child components
  const retrieveGoSearch = (input: string, type: string) => {
    console.log("input: ", input, "\ntype: ", type);
    let inputSplit = input.split("(");
    let className = inputSplit[inputSplit.length - 1].slice(0, -1);
    retrieveClassData(className);
  };

  //fetches data and stores it as 2D array
  async function retrieveClassData(classId: string) {
    console.log(classId);
    //fetch data from server
    try {
      const response = await fetch(
        process.env.VITE_API_URL +
          "/get?filePath=section_data/" +
          classId +
          ".csv"
      );
      if (!response.ok) {
        throw new Error("HTTP error: ${response.status}");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData[0] != "C") {
        //convert data from object to 2D array
        const allSections = jsonData.map((item: any) => {
          return sectionPara.map((key) => item[key]);
        });
        setSectionData(allSections);
      } else {
        setSectionData([]);
      }
      console.log(sectionData[0]);
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen p-3 text-black">
      <div className="mx-6 mt-3 bg-white rounded-lg shadow-md">
        <div className={`${searchPanelVisibility ? "block" : "hidden"}  `}>
          <SearchPanel onGoSearch={retrieveGoSearch} />
          <ServerStatus />
        </div>
      </div>
      <div className="mx-6 mt-3 bg-white rounded-lg shadow-md p-5">
        <Classes data={sectionData} sectionPara={displayPara} />
      </div>
    </div>
  );
}

export default SearchApp;
