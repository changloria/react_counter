import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import { useState } from "react";
import CounterGroupSum from "./CounterGroupSum"

function MultiCounter() {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    function updateCounterSize(size) {
        setSize(size);
    }

    function increase() {
        setSum(sum + 1);
    }

    function decrease() {
        setSum(sum - 1);
    }

    return(
        <>
        <CounterSizeGenerator updateSize={updateCounterSize}></CounterSizeGenerator>
        <CounterGroupSum sum={sum}></CounterGroupSum>
        <CounterGroup size={size} increase={increase} decrease={decrease}></CounterGroup>
        <span></span>
        </>
        );
}

export default MultiCounter;