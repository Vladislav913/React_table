export const SET_DATA = 'SET_DATA';
export const INCREASE_ITEM = 'INCREASE_ITEM';
export const REMOVE_ROW = 'REMOVE_ROW';
export const PERCENT_CALC = 'PERCENT_CALC';
export const NUMBER_CALC = 'NUMBER_CALC';
export const HIGHLIGHT = 'HIGHLIGHT';
export const HIGHLIGHT_RESET = 'HIGHLIGHT_RESET';
export const ADD_ROW = 'ADD_ROW'

export const setData = (obj) => {
    return {
        type: SET_DATA,
        payload: obj,
    }
}

export const increaseItem  = (obj) => {
    return {
        type: INCREASE_ITEM,
        payload: obj,
    }
}

export const removeRowAction  = (id) => {
    return {
        type: REMOVE_ROW,
        id: id,
    }
}

export const percentCalcAction  = (id) => {
    return {
        type: PERCENT_CALC,
        id: id,
    }
}

export const numberCalcAction  = (id) => {
    return {
        type: NUMBER_CALC,
        id: id,
    }
}

export const highlightItemAction  = (obj) => {
    return {
        type: HIGHLIGHT,
        obj: obj,
    }
}

export const highlightResetAction = () =>{
    return {
        type: HIGHLIGHT_RESET,
    }
}

export const addRowAction = () =>{
    return {
        type: ADD_ROW,
    }
}