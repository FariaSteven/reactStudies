// Criar um input simples controlado pelo React
import React, { useState } from 'react';

export const UseStateTimer = () => {    
    const [counter, setCounter] = useState(0);

    // const handlePlus = () => { setCounter(counter + 1) }; // O ideal é que o counter não seja acessado diretamente, dessa maneira.
    // const handleMinus = () => { setCounter(counter - 1) };

    // const handlePlus = () => { setCounter(counter + 1) };
    // const handleMinus = () => { setCounter(counter - 1) };

    const handlePlus = () => { setCounter((previousState) => previousState + 1) };
    const handleMinus = () => { setCounter((previousState) => previousState - 1 ) };

    return (
        <>
            <h1>{counter}</h1>
            <div>
                <input type="button" onClick={handleMinus} value={'-'}></input>
                <input type="button" onClick={handlePlus} value={'+'}></input>
            </div>
        </>
    )
};

export default UseStateTimer;

export const useState1 = () => {
    
    const state = useState('Victor'); // a função do useState retorna o array com dois valores, sendo o valor do state e uma função que controla a mudança desse state.
    console.log('state', state);

    return <></>
};


// export const useStateTimer = () => {
//     useState(() => {
//         return 'estado inicial';
//     })
//     return (
//         <div>
//             <h1>useState</h1>
//         <div/>
//     )
// };
