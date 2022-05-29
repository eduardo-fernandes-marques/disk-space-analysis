type Input = {
  space: number[];
  segmentsNumber: number;
};

export const getBiggerValue = ({ space, segmentsNumber }: Input) => {
  let minValues: number[] = [];
  let segments = segmentsNumber;

  for (let position = 0; position < space.length; position++) {
    if (segments <= space.length) minValues = [...minValues, Math.min(...space.slice(position, segments++))];
  }

  return Math.max(...minValues);
};
