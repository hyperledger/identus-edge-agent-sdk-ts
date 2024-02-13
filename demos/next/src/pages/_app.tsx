import { Provider } from 'react-redux';
import { store } from '../reducers/store'; // Assuming your store is in store.js

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;