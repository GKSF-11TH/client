import { RouterProvider } from 'react-router-dom';
import './style/font.css';
import router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
