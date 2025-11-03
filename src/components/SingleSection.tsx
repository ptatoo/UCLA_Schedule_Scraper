interface Props {
  data: string[];
  sectionPara: string[];
}

function SingleSection({ data, sectionPara }: Props) {
  let temp = sectionPara;
  sectionPara = temp;
  return <div>{data}</div>;
}

export default SingleSection;
