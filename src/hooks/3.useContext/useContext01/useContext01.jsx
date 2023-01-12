import React, { createContext } from 'react';
import UseContext01Costumer from './useContext01Costumer';

export const Context = createContext();

const UseContext01 = () => {
    return (
        <>
            <Context.Provider value={{ text: 'com contexto' }}>
                <UseContext01Costumer />
            </Context.Provider>
        </>
    );
};

export default UseContext01;
