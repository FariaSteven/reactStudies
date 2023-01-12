import React, { useEffect, useState } from 'react';

export const UseStateAsynchronous = () => {
    const [devs, setDevs] = useState(['Rodrigo ', 'Biro ']);

    const newUser = 'Vini '

    function handleAddNewDev(newDevName) {
        setDevs(prevState => [...prevState, newDevName]);
        console.log(devs); // ['Rodrigo ', 'Biro ']
        // Como o estado é assíncrono, ou seja, ele não "bloqueia" o restante do código até ser resolvido, na linha seguinte o estado não está atualizado, pois não houve tempo para sua atualização. Então na primeira vez que o botão for clicado o usuário "Vini" não vai aparecer.
        // Porém quando o state está no UI ele aparece atualizado, pois o ciclo de atualização do React nesse caso garante que ele aparecerá atualizado.
        // Uma forma de garantir que o state estará atualizado antes de usarmos é usando o useEffect, assim podemos usar o state dentro do useEffect quando queremos usá-lo para alguma função.
    }

    useEffect(() => {
        console.log(devs); // ['Rodrigo ', 'Biro ', 'Vini ']
    }, [devs])

    return (
        <>
            <input
                type="button"
                onClick={() => handleAddNewDev(newUser)}
                value={'+'}
            ></input>

            <p>{devs}</p> {/* Rodrigo , Biro, Vini  */}
        </>
    )
};
