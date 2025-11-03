interface Props {
  ready: boolean;
}

const GoButton = ({ ready }: Props) => {
  let temp = ready;
  ready = temp;
  return <button>Go</button>;
};

export default GoButton;
