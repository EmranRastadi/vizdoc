import { BrowserRouter } from 'react-router-dom';
import RouterManager from './commons/constants/RouterManager';
import { StylesProvider, jssPreset } from '@mui/styles';
import { create } from 'jss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { applyMiddleware, createStore } from 'redux';
import { ToastContainer } from 'react-toastify';
import rtl from 'jss-rtl';
import { allReducer } from './commons/redux/reducer';
import 'react-toastify/dist/ReactToastify.css';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const store = createStore(allReducer, applyMiddleware(thunk));

const queryClient = new QueryClient();

function App() {
  return (
    <StylesProvider jss={jss}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <RouterManager />
          </BrowserRouter>
          <ToastContainer rtl />
        </QueryClientProvider>
      </Provider>
    </StylesProvider>
  );
}

export default App;
