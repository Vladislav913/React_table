import {useDispatch, useSelector} from "react-redux";
import TableRow from "./TableRow";
import './table.scss';
import {debounce} from "../../debounce";
import {
    addRowAction,
    highlightItemAction, highlightResetAction,
    increaseItem,
    numberCalcAction,
    percentCalcAction,
    removeRowAction
} from "../../redux/actions/table";

const Table = () => {
    const dispatch = useDispatch()
    let {data, sumRowArr, averageArr, highlightArr, highlightCount} = useSelector(state => state.table)

    const increaseValue = (id, keyRow, amount) => {
        dispatch(increaseItem({
            id,
            keyRow,
            amount
        }))
    }

    const removeRow = (id) => {
        dispatch(removeRowAction(id))
    }

    const calcPercentrow = (id) => {
        dispatch(percentCalcAction(id))
    }

    const calcNumberRow = (id) => {
        dispatch(numberCalcAction(id))
    }

    const highlightReset = () => {
        dispatch(highlightResetAction())
    }

    const addRow = () => {
        dispatch(addRowAction())
    }

    const highlightItem = (cellAmount, cellId, closestQuantity) => {
        dispatch(highlightItemAction({
            cellAmount,
            cellId,
            closestQuantity,
            data,
        }))
    }

    return (
        <div className="table">
            <div className="container">
                <div className="table__wrap">
                    <table className="table">
                        <tbody>
                        {data.map((item, index) => (

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
                                    onMouseEnter={() => debounce(calcPercentrow(item.id), 200)}
                                    onMouseLeave={() => debounce(calcNumberRow(item.id), 200)}
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
                            {averageArr ?
                                averageArr.map((item) => (
                                    <td key={item.id} className="sum-column">{item.amount}</td>
                                )) : null
                            }
                        </tr>
                        </tbody>
                    </table>

                    {data.length > 0 ? <button onClick={addRow} className='btn-table'>Add row</button> : null}

                </div>
            </div>
        </div>
    )
}

export default Table