import TableRow from "./TableRow";

import {RootState, useTypeSelector} from "../../redux/reducers";
import {useDispatch} from "react-redux";

import {
    addRowAction,
    highlightItemAction, highlightResetAction,
    increaseItem,
    numberCalcAction,
    percentCalcAction,
    removeRowAction
} from "../../redux/actions/table";

import {AmountType, TableArrType} from "../../dataType";

import './table.scss';


const Table:React.FC = () => {
    const dispatch = useDispatch()
    let {data, sumRowArr, averageArr, highlightArr, highlightCount} = useTypeSelector((state:RootState) => state.table)

    const increaseValue = (id:number, keyRow:number, amount:number) => {
        dispatch(increaseItem({
            keyRow,
            amount
        }))
    }

    const removeRow = (id:number) => {
        dispatch(removeRowAction(id))
    }

    const calcPercentRow = (id:number) => {
        dispatch(percentCalcAction(id))
    }

    const calcNumberRow = (id:number) => {
        dispatch(numberCalcAction(id))
    }

    const highlightReset = () => {
        dispatch(highlightResetAction())
    }

    const addRow = () => {
        dispatch(addRowAction())
    }

    const highlightItem = (cellAmount:number, cellId:number, closestQuantity:number) => {
        dispatch(highlightItemAction({
            cellAmount,
            cellId,
            closestQuantity,
            data
        }))
    }

    return (
        <div className="table">
            <div className="container">
                <div className="table__wrap">
                    <table className="table">
                        <tbody>
                        {data.map((item:TableArrType, index:number) => (
                            <tr
                                key={item.id}
                            >
                                <TableRow
                                    rowArr={item.rowArr}
                                    increaseValue={increaseValue}
                                    highlightItem={highlightItem}
                                    highlightArr={highlightArr}
                                    highlightCount={highlightCount}
                                    highlightReset={highlightReset}
                                />

                                <td className="table__sum"
                                    onMouseEnter={() => calcPercentRow(item.id)}
                                    onMouseLeave={() => calcNumberRow(item.id)}
                                >{sumRowArr[index].amount}</td>

                                <td className="cancel-row" onClick={() => removeRow(item.id)} key={item.id}>
                                    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/>
                                        <path
                                            d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/>
                                        <path
                                            d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z"/>
                                    </svg>
                                </td>

                            </tr>
                        ))}
                        <tr>
                            {averageArr &&
                                averageArr.map((item: AmountType) => (
                                    <td key={item.id} className="sum-column">{item.amount}</td>

                                ))
                            }
                        </tr>
                        </tbody>
                    </table>

                    {data.length > 0 && <button onClick={addRow} className='btn-table'>Add row</button> }

                </div>
            </div>
        </div>
    )
}

export default Table