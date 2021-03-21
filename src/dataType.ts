export interface RowObjectType {
    id: number,
    amount: number,
    percent: boolean
}

export interface AmountType{
    id: number,
    amount: number,
}

export interface TableArrType {
    id: number,
    rowArr: RowObjectType[]
}

export interface AmountAverageInterface {
    amount: number,
    id: number
}
