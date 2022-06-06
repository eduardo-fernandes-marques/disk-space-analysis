type Input = {
  space: number[];
  interval: number;
};

export const getBiggerValue = ({ space, interval }: Input) => {
  let minValues: number[] = [];
  let invervalEnd = interval;

  for (let intervalBegin = 0; intervalBegin < space.length; intervalBegin++) {
    if (invervalEnd <= space.length) minValues = [...minValues, Math.min(...space.slice(intervalBegin, invervalEnd++))];
  }

  return Math.max(...minValues);
};
