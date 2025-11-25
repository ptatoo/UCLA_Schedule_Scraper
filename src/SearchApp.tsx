import Classes from "./components/Classes";
import SearchPanel from "./components/SearchPanel";
import ServerStatus from "./components/ServerStatus";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

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
        import.meta.env.VITE_API_URL +
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
    <div className="m-3">
      {/* <button
        className="fixed top-6 right-4 w-8 h-8 hover:bg-blue-200"
        onClick={() => setSearchPanelVisibility(!searchPanelVisibility)}
      >
        V
      </button> */}
      <div className={`${searchPanelVisibility ? "block" : "hidden"}  `}>
        <div className="font-serif">
          <SearchPanel onGoSearch={retrieveGoSearch} />
        </div>
        <div>
          <ServerStatus />
        </div>
      </div>
      <div className="font-serif">
        <Classes data={sectionData} sectionPara={displayPara} />
      </div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default SearchApp;
