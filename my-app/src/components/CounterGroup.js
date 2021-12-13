import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterGroup(props) {

    const [counterList, setCounterList] = useState([]);

    useEffect(()=>{
        const counterList = new Array(props.size).fill(Date.now);
        setCounterList(counterList);
    }, [props.size]);

    
    function increase(){
        props.increase();
    }

    function decrease(){
        props.decrease();
    }

    return(
        <div>
            <span>test: {props.size}</span>
            {counterList.map((item, index) => (
                <Counter key={item+index} increase={increase} decrease={decrease}></Counter>
            ))}
        </div>
    );
}
export default CounterGroup;