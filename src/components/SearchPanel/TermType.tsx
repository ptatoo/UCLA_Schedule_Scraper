import Select from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "Winter 2026", label: "Winter 2026" },
  { value: "Spring 2026", label: "Spring 2026" },
];

const TermType = () => {
  return (
    <>
      <div className="text-right w-full">
        Term: <br></br>
      </div>
      <Select
        options={options}
        defaultValue={options[0]}
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
    </>
  );
};

export default TermType;
