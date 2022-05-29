const space = [2, 5, 4, 6, 8];
const segmentsNumber = 3;
const result = 4;
const getBiggerValue = ({ space, segmentsNumber }) => {
    let minValues = [];
    let segments = segmentsNumber;
    for (let position = 0; position < space.length; position++) {
        if (segments <= space.length)
            minValues = [...minValues, Math.min(...space.slice(position, segments++))];
    }
    return Math.max(...minValues);
};
console.log("valor: ", getBiggerValue({ space, segmentsNumber }));
//# sourceMappingURL=main.js.map