import './form.scss'
import {useState} from "react";
import {createTable} from "./formCreate";

import {setData} from "../../redux/actions/table";
import {useDispatch} from "react-redux";

type StateType ={
    row: number | null,
    column: number | null,
    count: number | null,
    error: boolean,
}

const Form:React.FC = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState<StateType>({
        row: null,
        column: null,
        count: null,
        error: false
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            error: false
        })

    }


    const createMatrix = (e:React.MouseEvent<HTMLButtonElement> ):void => {
        e.preventDefault()
        if(state.row <= 100 && state.row > 0 && state.column <= 20 && state.column > 0 && state.count >= 0){
            let tableData = createTable(state.row, state.column)
            dispatch(setData({
                tableData,
                count: state.count
            }))
        }else{
            setState({
                ...state,
                error: true
            })
        }
    }

    return (
        <div className="form-wrap">
            <div className="container">
                <form className="create-form">
                    <input onChange={handleChange} placeholder="Row 1-100" name="row" value={state.row} className="form-input"
                           type="number"/>
                    <input onChange={handleChange} placeholder="Column 1-20" name="column" value={state.column}
                           className="form-input" type="number"/>
                    <input onChange={handleChange} placeholder="Сell highlighting" name="count" value={state.count}
                           className="form-input" type="number"/>
                    <button onClick={createMatrix} className="btn-submit" type="submit">Create</button>
                </form>
                {state.error && <p className="status-message">Row range 1-100, column range 1-20</p>}
            </div>
        </div>
    )
}

export default Form