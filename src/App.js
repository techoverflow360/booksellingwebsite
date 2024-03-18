import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorElement from './pages/ErrorElement';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
