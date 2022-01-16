import { BrowserRouter } from 'react-router-dom';
import RouterManager from './commons/constants/RouterManager';
import { StylesProvider, jssPreset } from '@mui/styles';
import { create } from 'jss';

import rtl from 'jss-rtl';

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function App() {
  return (
    <StylesProvider jss={jss}>
      <BrowserRouter>
        <RouterManager />
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
