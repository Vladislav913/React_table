import {
    ADD_ROW,
    HIGHLIGHT,
    HIGHLIGHT_RESET,
    INCREASE_ITEM,
    NUMBER_CALC,
    PERCENT_CALC,
    REMOVE_ROW,
    SET_DATA
} from "../actions/table";
import {
    addRowFunc,
    calculateAverage,
    calculateRow, handleClosestArr,
    increaseValueData,
    percentCalc,
    percentNumber,
    sumData
} from "../../tableControll"


const initialState = {
    data: [],
    highlightCount: null,
    averageArr: [],
    sumRowArr: [],
    percent: false,
    sum: 0,
    highlightArr: []
};

const table = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
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

        case INCREASE_ITEM:
            let increaseData = increaseValueData(state.data, action.payload.keyRow, action.payload.amount);
            let calculateRowResults = calculateRow(increaseData);
            let averageArrCreates = calculateAverage(increaseData);
            return {
                ...state,
                data: increaseData,
                averageArr: averageArrCreates,
                sumRowArr: calculateRowResults,
            };

        case REMOVE_ROW:
            let data = state.data.filter(rowObj => rowObj.id !== action.id);
            let averageArrCreat = calculateAverage(data);
            return {
                ...state,
                data: data,
                averageArr: averageArrCreat,
            };

        case PERCENT_CALC:
            const percentRow = percentCalc(state.data, action.id, state.sum);
            return {
                ...state,
                data: percentRow,
            };

        case NUMBER_CALC:
            const percentNumberRow = percentNumber(state.data, action.id, state.sum);
            return {
                ...state,
                data: percentNumberRow
            };

        case HIGHLIGHT:
            const highlightData = handleClosestArr(action.obj.cellAmount, action.obj.cellId, action.obj.closestQuantity, state.data);
            return {
                ...state,
                highlightArr: highlightData
            };

        case HIGHLIGHT_RESET:
            return {
                ...state,
                highlightArr: []
            };

        case ADD_ROW:
            const newRow = addRowFunc(state.data[0].rowArr.length);
            const newData = [...state.data, newRow];
            let averageArr =  calculateAverage(newData);
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

export default table;
