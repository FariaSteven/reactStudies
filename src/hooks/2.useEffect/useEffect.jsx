import React, { useState, useEffect } from 'react';

export const UseEffect01 = () => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');

    // Exemplo - em substituição ao "componentDidMount", ou seja, com o array vazio ele rodará apenas uma vez quando o component for montado.
    useEffect(() => {
        console.log('useEffect02');
    }, []);

    // Exemplo - Em substituição ao "componentDidUpdate", vai rodar toda vez que o componente atualizar.
    useEffect(() => {
        console.log('useEffect01');
    });

    // Exemplo - Em substituição ao "componentDidUpdate", ou seja, vai rodar toda vez que uma das dependências mudar.
    useEffect(() => {
        console.log('useEffect02');
    }, [counter]);

    // Exemplo - em substituição ao  "componentWillUnmount", ou seja, vai rodar somente quando o componente for desmontado
    useEffect(() => {
        return () => { console.log('Componente será desmontado ComponentWillUnmount'); }
    })

    const handlePlus = () => { setCounter((previousState) => previousState + 1) };
    const handleMinus = () => { setCounter((previousState) => previousState - 1 ) };
    
    return (
        <>
            <h1>{counter}</h1>
            <div>
                <input type="button" onClick={handleMinus} value={'-'}></input>
                <input type="button" onClick={handlePlus} value={'+'}></input>
            </div>
            <div>
                <p>{text}</p>
                <input type="text" onChange={e => setText(e.target.value)} />
            </div>
        </>
    )
};

export default UseEffect01;
