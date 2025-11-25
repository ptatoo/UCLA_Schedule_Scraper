import Select, { type SingleValue } from "react-select";

interface Props {
  updateSearchType: (type: string) => void;
}

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "Subject Area", label: "Subject Area" },
  { value: "Class Units", label: "Class Units" },
  { value: "Class ID", label: "Class ID" },
  { value: "Instructor", label: "Instructor" },
  { value: "GE Classes", label: "GE Classes" },
  { value: "Writing II Classes", label: "Writing II Classes" },
  { value: "Diversity Classes", label: "Diversity Classes" },
  { value: "College Honors Classes", label: "College Honors Classes" },
  { value: "Fiat Lux Classes", label: "Fiat Lux Classes" },
  {
    value: "Community-Engaged Learning Classes",
    label: "Community-Engaged Learning Classes",
  },
  { value: "USIE Seminars", label: "USIE Seminars" },
  { value: "Law Classes", label: "Law Classes" },
  {
    value: "Online - Classes Not Recorded",
    label: "Online - Classes Not Recorded",
  },
  { value: "Online - Classes Recorded", label: "Online - Classes Recorded" },
  { value: "Online - Asynchronous", label: "Online - Asynchronous" },
];

const SearchType = ({ updateSearchType }: Props) => {
  const handleChange = (option: SingleValue<OptionType>) => {
    updateSearchType(option?.label ?? "");
  };

  return (
    <>
      <label className=" w-32">
        Search By:
        <Select
          onChange={handleChange}
          options={options}
          styles={{
            control: (baseStyles, ___) => ({
              ...baseStyles,
              background: "#fff",
              borderColor: "#9e9e9e",
              minHeight: "25px",
              height: "25px",
              alignContent: "center",
              display: "flex",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            option: (baseStyles, ___) => ({
              ...baseStyles,
              height: "25px",
              paddingTop: "3px",
              textAlign: "center",
            }),
            indicatorsContainer: (baseStyles, ___) => ({
              ...baseStyles,
              minWidth: "30px",
              width: "30px",
            }),
          }}
        />
      </label>
    </>
  );
};

export default SearchType;
