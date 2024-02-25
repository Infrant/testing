import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../store/slice/counterSlice";
import {getCounterValue} from "../../store/selectors/getCounterValue/getCounterValue";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <>
            <h1 data-testid={'counter-value'}>{value}</h1>
            <button data-testid={'increment-btn'} onClick={onIncrement}>increment</button>
            <button data-testid={'decrement-btn'} onClick={onDecrement}>decrement</button>
        </>
    );
};

export default Counter;