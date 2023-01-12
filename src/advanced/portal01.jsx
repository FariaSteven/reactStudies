import React from 'react';
import ReactDOM from 'react-dom';

export default function Portal01() {
    return ReactDOM.createPortal(
        <div>Olá, isso é um portal</div>, 
        document.getElementById('novo-portal')
    );
};
