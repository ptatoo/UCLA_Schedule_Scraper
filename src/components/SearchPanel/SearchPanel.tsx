import SearchType from "./SearchType";
import TermType from "./TermType";
import TextInput from "./TextInput";
import { useState } from "react";

interface Props {
  onGoSearch: (input: string, type: string) => void;
}

const SearchPanel = ({ onGoSearch }: Props) => {
  const [type, setType] = useState("Subject Area");

  const retrieveGoSearch = (input: string) => {
    onGoSearch(input, type);
  };

  const updateSearchType = (type: string) => {
    setType(type);
  };

  return (
    <>
      <div className="p-3 flex flex-wrap gap-3 flex-row w-full text-sm">
        <div className="min-w-40 w-40 pr-3 border-r">
          <TermType />
        </div>
        <div className="min-w-80 max-w-80">
          <SearchType updateSearchType={updateSearchType} />
        </div>
      </div>
      <div className="p-3 text-sm">
        <TextInput goSearch={retrieveGoSearch} />
      </div>
    </>
  );
};

export default SearchPanel;
