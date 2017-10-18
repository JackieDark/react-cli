import React from 'react';
import ReactDOM from 'react-dom';
import route from './router/Router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
