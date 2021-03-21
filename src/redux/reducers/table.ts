import {TableAction} from "../actions/table";

import {
    addRowFunc,
    calculateAverage,
    calculateRow, handleClosestArr,
    increaseValueData,
    percentCalc,
    percentNumber,
    sumData
} from "../../tableControll"
import {RootActionType} from "../actions/tableActionTypes";
import {AmountAverageInterface, AmountType, TableArrType} from "../../dataType";


type StateType = {
    data: TableArrType[],
    highlightCount: number,
    averageArr: AmountAverageInterface[] | [],
    sumRowArr: AmountType[],
    percent: boolean,
    sum: number,
    highlightArr: AmountType[]
}

const initialState: StateType = {
    data: [],
    highlightCount: 0,
    averageArr: [],
    sumRowArr: [],
    percent: false,
    sum: 0,
    highlightArr: []
};

export const table = (state = initialState, action: RootActionType): StateType => {
    switch (action.type) {
        case TableAction.SET_DATA:
            let averageArrCreate = calculateAverage(action.payload.tableData);
            let calculateRowResult = calculateRow(action.payload.tableData);
            let sumDataCulc = sumData(calculateRowResult);
            return {
                ...state,
                data: action.payload.tableData,
                averageArr: averageArrCreate,
                sumRowArr: calculateRowResult,
                sum: sumDataCulc,
                highlightCount: action.payload.count
            };

        case TableAction.INCREASE_ITEM:
            let increaseData = increaseValueData(state.data, action.payload.keyRow);
            let calculateRowResults = calculateRow(increaseData);
            let averageArrCreates = calculateAverage(increaseData);
            return {
                ...state,
                data: increaseData,
                averageArr: averageArrCreates,
                sumRowArr: calculateRowResults,
            };

        case TableAction.REMOVE_ROW:
            let data = state.data.filter(rowObj => rowObj.id !== action.payload);
            let averageArrCreat = calculateAverage(data);
            return {
                ...state,
                data: data,
                averageArr: averageArrCreat,
            };

        case TableAction.PERCENT_CALC:
            const percentRow = percentCalc(state.data, action.payload, state.sum);
            return {
                ...state,
                data: percentRow,
            };

        case TableAction.NUMBER_CALC:
            const percentNumberRow = percentNumber(state.data, action.payload, state.sum);
            return {
                ...state,
                data: percentNumberRow
            };

        case TableAction.HIGHLIGHT:
            const highlightData = handleClosestArr(action.payload.cellAmount, action.payload.cellId, action.payload.closestQuantity, state.data);
            return {
                ...state,
                highlightArr: highlightData
            };

        case TableAction.HIGHLIGHT_RESET:
            return {
                ...state,
                highlightArr: []
            };

        case TableAction.ADD_ROW:
            const newRow = addRowFunc(state.data[0].rowArr.length);
            const newData = [...state.data, newRow];
            let averageArr = calculateAverage(newData);
            let calculateTableRow = calculateRow(newData);
            let sumDataArr = sumData(calculateTableRow);
            return {
                ...state,
                data: newData,
                averageArr: averageArr,
                sumRowArr: calculateTableRow,
                sum: sumDataArr,
            }

        default:
            return state;
    }
};


