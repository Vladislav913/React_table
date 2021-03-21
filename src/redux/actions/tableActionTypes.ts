import {TableAction} from "./table";
import {TableArrType} from "../../dataType";


export type ObjectDataType = {
    count: number,
    tableData: TableArrType[]
}

export type increaseObjType = {
    keyRow: number,
    amount: number
}

export type highlightObjType = {
    cellAmount: number,
    cellId: number,
    closestQuantity: number,
    data: TableArrType[]
}

export type SetDataType = {
    type: TableAction.SET_DATA,
    payload: ObjectDataType,
}

type IncreaseItemType = {
    type: TableAction.INCREASE_ITEM,
    payload: increaseObjType,
}

type RemoveRowActionType = {
    type: TableAction.REMOVE_ROW,
    payload: number,
}

type PercentCalcActionType = {
    type: TableAction.PERCENT_CALC,
    payload: number,
}

type NumberCalcActionType = {
    type: TableAction.NUMBER_CALC,
    payload: number,
}

type HighlightItemActionType = {
    type: TableAction.HIGHLIGHT,
    payload: highlightObjType,
}

type HighlightResetActionType = {
    type: TableAction.HIGHLIGHT_RESET,
}

type AddRowActionType = {
    type: TableAction.ADD_ROW,
}

export type RootActionType =
    SetDataType |
    IncreaseItemType |
    RemoveRowActionType |
    PercentCalcActionType |
    NumberCalcActionType |
    HighlightItemActionType |
    HighlightResetActionType |
    AddRowActionType;


