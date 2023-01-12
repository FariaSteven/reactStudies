import React, { useState, useMemo } from 'react';

export default function UseMemo01() {
    const [state, setState] = useState(Math.PI);

    function veryComplexMathCalc(state) {
        return state * Math.PI
    }

    const memoizedValue = useMemo(() => {
        return veryComplexMathCalc(state);
    }, [state]);

    // const memoizedValue = () => {
    //     return veryComplexMathCalc(state);
    // };

    console.log(memoizedValue)
    // console.log(memoizedValue())

    return <h1>Valor memoizado: {memoizedValue}</h1>;
    // return <h1>Valor memoizado: {memoizedValue()}</h1>;
};
