import {useState} from "react";

function Counter(props){

    const [value, setValue] = useState(0);

    function increase(){
        setValue(value+1);
        props.increase();
    }

    function decrease(){
        setValue(value-1);
        props.decrease();
    }

    return (
        <div>
            <button onClick={increase}>+</button>
            <span>{value}</span>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;