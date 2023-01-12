import React, { useState } from 'react';

console.log('Exemplo 2 de 2 (sem useCallback) - repare que ao clicar no botão de clicar o componente Button é renderizado novamente');

export default function useCallback02() {
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState('');

    const handleClick = () => {
        console.log('State atualizado');
        setState(Math.random());
    };

    return (
        <Button onClick={handleClick} />
    );
    
};

const Button = (props) => {
    console.log('Botão re-renderizado');

    return (
        <button onClick={props.onClick}>
            Clique
        </button>
    );
};
