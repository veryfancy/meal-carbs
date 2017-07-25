
import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import mealCarbsApp from './reducers';
import App from './containers/App.jsx';

const store = createStore(mealCarbsApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mealCarbsApp')
);
