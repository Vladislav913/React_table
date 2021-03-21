import {AmountAverageInterface, AmountType, RowObjectType, TableArrType} from "./dataType";

export const calculateAverage = (arr: Array<TableArrType>): Array<AmountAverageInterface> | []  => {
    if(arr.length > 0){
        const averageArr: Array<AmountAverageInterface> = [];
        for (let i = 0; i < arr[0].rowArr.length; ++i) {
            let colunmSum: number = 0;
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
    return []
}

export const calculateRow = (arr: Array<TableArrType>): Array<AmountAverageInterface> => {
    const sumArr: Array<AmountAverageInterface> = [];
    for (let i = 0; i < arr.length; ++i) {
        let rowSum: number = 0;
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

export const increaseValueData = (arr: Array<TableArrType>, rowId: number): Array<TableArrType> => {
    return arr.map((rowObj: TableArrType) => ({
        ...rowObj,
        rowArr: rowObj.rowArr.map((cell: RowObjectType) => {

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

export const percentCalc = (arr: Array<TableArrType>, rowId: number, sum: number): Array<TableArrType> => {
    return arr.map((rowObj: TableArrType) => {
        if (rowObj.id !== rowId) {
            return rowObj;
        }
        return {
            ...rowObj,
            rowArr: rowObj.rowArr.map((item: RowObjectType) => {
                return {
                    ...item,
                    amount: +((+item.amount / sum) * 100).toFixed(2),
                    percent: true
                }
            }),
        };
    });
}

export const percentNumber = (arr: Array<TableArrType>, rowId: number, sumArr: number) => {
    return arr.map((rowObj: TableArrType) => {
        if (rowObj.id !== rowId) {
            return rowObj;
        }
        return {
            ...rowObj,
            rowArr: rowObj.rowArr.map((item: RowObjectType) => {
                return {
                    ...item,
                    amount: +((+item.amount * +sumArr) / 100).toFixed(0),
                    percent: false
                }
            }),
        };
    });
}

export const handleClosestArr = (cellAmount: number, cellId: number, closestQuantity: number, data: TableArrType[]) => {
    const diff = data.map((row: TableArrType) => row.rowArr
        .map((item: RowObjectType) => ({id: item.id, amount: Math.abs(item.amount - cellAmount)}))).flat();

    const diffwithoutCell = diff.filter((item: AmountType) => item.id !== cellId);

    const filteredDiff = diffwithoutCell
        .sort((a: AmountType, b: AmountType) => a.amount - b.amount)
        .slice(0, closestQuantity);

    return filteredDiff
};

export const addRowFunc = (rowLength: number) => {
    const rowObj:TableArrType = {id: Math.random(), rowArr: []};
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

export const sumData = (data: AmountType[]) => {
    return data.reduce((sum: number, curent:AmountType) => sum + curent.amount, 0)
}