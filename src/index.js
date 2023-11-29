/*Importa la biblioteca React, que es necesaria para construir componentes de React.*/
import React from 'react';

/*Importa la biblioteca ReactDOM, que se utiliza para renderizar los componentes de React en el navegador.*/
import ReactDOM from 'react-dom';

/* Importa el componente App desde el archivo 'App.js' ubicado en el mismo directorio que este archivo.*/
import App from './App';

/*Utiliza la función  ReactDOM.render()  para renderizar el componente App en el elemento con el id 'root' del documento HTML. Esto significa que el contenido del componente App se mostrará en el lugar donde se encuentre el elemento con el id 'root' en el HTML.*/
ReactDOM.render(<App />, document.getElementById('root'));