import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/category/:category',
      element: <Category />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
};

export default App;