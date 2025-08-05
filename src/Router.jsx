import { createBrowserRouter } from 'react-router-dom';
import Booth from './pages/Booth';
import About from './pages/About';
import Session from './pages/Session';
import Archiving from './pages/Archiving';
import Participation from './pages/Participation';
import Landing from './pages/Landing';
import Header from './components/common/Header';
import Error from './pages/Error';
import BoothDetail from './pages/BoothDetail';

const router = createBrowserRouter([
  {
    element: <Header />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/booth',
        element: <Booth />
      },
      {
        path: '/boothDetail/:boothId',
        element: <BoothDetail />
      },
      {
        path: '/session',
        element: <Session />
      },
      {
        path: '/archiving',
        element: <Archiving />
      },
      {
        path: '/participation',
        element: <Participation />
      }
    ]
  }
]);

export default router;
