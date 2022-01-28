import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';
import CustomRouter from './routes/CustomRouter';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';
import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <CustomRouter history={history}>
                    <Routes />
                    <GlobalStyle />
                    <ToastContainer autoClose={3000} />
                </CustomRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
