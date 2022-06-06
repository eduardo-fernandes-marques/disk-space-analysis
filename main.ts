type Input = {
  space: number[];
  segmentsNumber: number;
};

export const getBiggerValue = ({ space, segmentsNumber }: Input) => {
  let minValues: number[] = [];
  let invervalEnd = segmentsNumber;

  for (let intervalBegin = 0; intervalBegin < space.length; intervalBegin++) {
    if (invervalEnd <= space.length) minValues = [...minValues, Math.min(...space.slice(intervalBegin, invervalEnd++))];
  }

  return Math.max(...minValues);
};
