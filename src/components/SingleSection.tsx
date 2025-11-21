interface Props {
  data: string[];
  sectionPara: string[];
  sizeDistr: string[];
}

function SingleSection({ data, sectionPara, sizeDistr }: Props) {
  return (
    <>
      <div className="flex w-full">
        <div className="flex bg-blue-100 w-full">
          {sectionPara.map((___, index) => (
            <div
              className={`${sizeDistr[index]} p-1 border-white border text-center align-middle text-wrap`}
            >
              {data[index + 1]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleSection;
