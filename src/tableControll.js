export const calculateAverage = (arr) => {
    const averageArr = [];
    for (let i = 0; i < arr[0].rowArr.length; ++i) {
        let colunmSum = 0;
        for (let j = 0; j < arr.length; ++j) {
            colunmSum += arr[j].rowArr[i].amount;
        }
        averageArr.push({
            id: Math.random(),
            amount: Math.round(colunmSum / arr.length),
        });
    }
    return averageArr;
}

export const calculateRow = (arr) => {
    const sumArr = [];
    for (let i = 0; i < arr.length; ++i) {
        let rowSum = 0;
        for (let k = 0; k < Object.entries(arr[i].rowArr).length; k++) {
            rowSum += arr[i].rowArr[k].amount;
        }
        sumArr.push({
            id: Math.random(),
            amount: rowSum,
        });
    }
    return sumArr
}

export const increaseValueData = (arr, rowId) => {

    return arr.map((rowObj, rowKey) => ({
        ...rowObj,
        rowArr: rowObj.rowArr.map((cell) => {
            if (cell.id !== rowId) {
                return cell;
            }

            return {
                ...cell,
                amount: cell.amount + 1,
            };
        }),
    }));
}

export const percentCalc = (arr, rowId, sum) => {
    return arr.map((rowObj) => {
        if (rowObj.id !== rowId) {
            return rowObj;
        }
        return {
            ...rowObj,
            rowArr: rowObj.rowArr.map((item) => {
                return {
                    ...item,
                    amount: +((+item.amount / sum) * 100).toFixed(2),
                    percent: true
                }
            }),
        };
    });
}

export const percentNumber = (arr, rowId, sumArr) => {
    return arr.map((rowObj) => {
        if (rowObj.id !== rowId) {
            return rowObj;
        }
        return {
            ...rowObj,
            rowArr: rowObj.rowArr.map((item) => {
                return {
                    ...item,
                    amount: +((+item.amount * +sumArr) / 100).toFixed(0),
                    percent: false
                }
            }),
        };
    });
}

export const handleClosestArr = (cellAmount, cellId, closestQuantity, data) => {
    const diff = data.map((row) => row.rowArr
        .map((item) => ({id: item.id, amount: Math.abs(item.amount - cellAmount)}))).flat();

    const diffwithoutCell = diff.filter((item) => item.id !== cellId);

    const filteredDiff = diffwithoutCell
        .sort((a, b) => a.amount - b.amount)
        .slice(0, closestQuantity);

    return filteredDiff
};

export const addRowFunc = (rowLength) => {
    const rowObj = {id: Math.random(), rowArr: []};
    for (let j = 0; j < +rowLength; ++j) {
        const cellObj = {
            id: Math.random(),
            amount: +Math.floor(Math.random() * (999 - 101)) + 100,
            percent: false
        };
        rowObj.rowArr.push(cellObj);
    }
    return rowObj
}

export const sumData = (data) => {
    return data.reduce((sum, curent) => sum + curent.amount, 0)
}