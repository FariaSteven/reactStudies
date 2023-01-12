
// https://pt-br.reactjs.org/docs/jsx-in-depth.html

import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}


// Props com Valor Padrão “True”
// Se você não passar nenhum valor para a prop, seu valor padrão será true. Essas duas expressões JSX são equivalentes:
// Obs.: No geral, nós não recomendamos não a passagem de um valor para uma prop, porque pode ser confundido com abreviação de objeto do ES6 {foo} que é a abreviação de {foo: foo} em vez de {foo: true}. Esse comportamente só está ai para estar de acordo com o comportamento do HTML.


<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />


