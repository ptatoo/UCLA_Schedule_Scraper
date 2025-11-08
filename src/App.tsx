import Classes from "./components/Classes";
import SearchPanel from "./components/SearchPanel";
import ServerStatus from "./components/ServerStatus";
import { useState } from "react";

//app function
function App() {
  //constants
  const [sectionData, setSectionData] = useState([]);
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
        "https://ucla-schedule-scraper-backend.onrender.com/get?filePath=" +
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
      }
      console.log(sectionData[0]);
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  return (
    <div className="m-3">
      <div className="font-serif">
        <SearchPanel onGoSearch={retrieveGoSearch} />
      </div>
      <div>
        <ServerStatus />
      </div>
      <div className="font-serif">
        <Classes data={sectionData} sectionPara={displayPara} />
      </div>
    </div>
  );
}

export default App;
