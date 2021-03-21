import {highlightObjType, increaseObjType, ObjectDataType, SetDataType} from "./tableActionTypes";
import {TableArrType} from "../../dataType";

export enum TableAction{
    SET_DATA = 'SET_DATA',
    INCREASE_ITEM = 'INCREASE_ITEM',
    REMOVE_ROW = 'REMOVE_ROW',
    PERCENT_CALC = 'PERCENT_CALC',
    NUMBER_CALC = 'NUMBER_CALC',
    HIGHLIGHT = 'HIGHLIGHT',
    HIGHLIGHT_RESET = 'HIGHLIGHT_RESET',
    ADD_ROW = 'ADD_ROW'
}


export const setData = (obj:ObjectDataType):SetDataType => {
    return {
        type: TableAction.SET_DATA,
        payload: obj
    }
}


export const increaseItem  = (obj:increaseObjType) => {
    return {
        type: TableAction.INCREASE_ITEM,
        payload: obj
    }
}

export const removeRowAction  = (id:number) => {
    return {
        type: TableAction.REMOVE_ROW,
        payload: id,
    }
}

export const percentCalcAction  = (id:number) => {
    return {
        type: TableAction.PERCENT_CALC,
        payload: id,
    }
}

export const numberCalcAction  = (id:number) => {
    return {
        type: TableAction.NUMBER_CALC,
        payload: id,
    }
}

export const highlightItemAction  = (obj:highlightObjType) => {
    return {
        type: TableAction.HIGHLIGHT,
        payload: obj,
    }
}

export const highlightResetAction = () =>{
    return {
        type: TableAction.HIGHLIGHT_RESET,
    }
}

export const addRowAction = () =>{
    return {
        type: TableAction.ADD_ROW,
    }
}