import { useState } from "react";
import SingleLec from "./SingleLec";

interface Props {
  singleClassData: string[][];
  sectionPara: string[];
}

function SingleClass({ singleClassData, sectionPara }: Props) {
  let classId = singleClassData[0][0];
  let className = "";
  let firstDigit = true;
  let detectedNonZero = false;
  const [toggleSections, settoggleSection] = useState(false);
  const sizeDistr = [
    "w-1/12",
    "w-1/12",
    "w-1/12",
    "w-1/12",
    "w-1/9",
    "w-1/18",
    "w-1/12",
    "w-1/12",
    "w-2/12",
    "w-1/18",
    "w-2/18",
  ];

  //create class name from class id
  function isStringDigits(str: string) {
    return /^\d+$/.test(str);
  }
  for (let i = 0; i < classId.length; i++) {
    if (classId.charAt(i) != "0" || detectedNonZero) {
      if (isStringDigits(classId.charAt(i)) && firstDigit) {
        detectedNonZero = true;
        firstDigit = false;
        className += " ";
      }
      className += classId.charAt(i);
    }
  }

  let classDataByLec = [];
  for (let i = 0; i < singleClassData.length; i++) {
    if (singleClassData[i][1].slice(0, 3) != "Dis") {
      classDataByLec.push([singleClassData[i]]);
    } else {
      classDataByLec[classDataByLec.length - 1].push(singleClassData[i]);
    }
  }

  return (
    <div
      className={`${
        toggleSections ? " " : ""
      } rounded-lg border border-gray-300`}
    >
      <div className="single class">
        {/* Class Name Button */}
        <button
          className={`${
            toggleSections ? " text-green-800" : " text-black"
          } text-lg p-1.5 w-full  hover:bg-gray-300  hover:font-bold rounded-lg hover:text-green-800`}
          onClick={() => settoggleSection(!toggleSections)}
        >
          {className}
        </button>

        {/* Section Parameters */}
        <div
          className={`${
            toggleSections ? "block" : "hidden"
          } flex mx-3 border-b`}
        >
          <div className="w-8"></div>
          <div className="flex w-full text-xs">
            {sectionPara.map((__, index) => (
              <div
                className={`${sizeDistr[index]} p-1 border-white border text-center align-middle text-wrap`}
              >
                {sectionPara[index]}
              </div>
            ))}
          </div>
        </div>

        {/* Section Data */}
        <div className={`${toggleSections ? "block" : "hidden"} text-xs mx-3`}>
          {classDataByLec.map((item) => (
            <SingleLec
              singleLecData={item}
              sectionPara={sectionPara}
              sizeDistr={sizeDistr}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleClass;
