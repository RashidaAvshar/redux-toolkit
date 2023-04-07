import { increment, decrement, incrementByAmount,reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] =useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = ()=> {
        dispatch(reset());
        setIncrementAmount(0)
    }

    return(
        <div>
            <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <p>{count}</p>
            <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <div>
            <input
            type="text"
            value={incrementAmount}
            onChange={(e)=>{
                setIncrementAmount(e.target.value)
            }}
            />
            <button onClick={()=>dispatch(incrementByAmount(addValue))}>ADD Amount</button>
            <button onClick={resetAll}>Reset ALL</button>
            </div>
        </div>
    )
}

export default Counter;