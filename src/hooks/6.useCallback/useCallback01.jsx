import React, { useCallback, useState } from 'react';

console.log('Exemplo 1 de 2 (com useCallback) - repare que ao clicar no botão de clicar o componente Button não é renderizado novamente');

export default function UseCallback01() {
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState('');

    const handleClick = useCallback(() => {
        console.log('State atualizado');
        setState(Math.random());
    }, []);

    return (
        <Button onClick={handleClick} />
    );
    
};

const Button = React.memo((props) => {
    console.log('Botão re-renderizado');

    return (
        <button onClick={props.onClick}>
            Clique
        </button>
    );
});
