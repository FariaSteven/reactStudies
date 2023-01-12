import React, { useContext } from 'react';
import { Context } from './useContext01';

const UseContext01Costumer = () => {
    
    const theme = useContext(Context);

    return (
        <>
            <h1>{theme.text}</h1>
        </>
    );
};

export default UseContext01Costumer;
