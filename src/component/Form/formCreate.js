export const createTable = (rows, columns) => {
    const tableArr = [];
    for (let i = 0; i < +rows; ++i) {
        const rowObj = {id: Math.random(), rowArr: []};
        for (let j = 0; j < +columns; ++j) {
            const cellObj = {
                id: Math.random(),
                amount: Math.floor(Math.random() * (999 - 101)) + 100,
                percent: false
            };
            rowObj.rowArr.push(cellObj);
        }
        tableArr.push(rowObj);
    }
    return tableArr
};