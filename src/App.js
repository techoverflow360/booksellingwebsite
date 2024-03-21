import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorElement from './pages/ErrorElement';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import CardDetails from './components/Card/CardDetails';
import { useState } from 'react';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root loginMode={loginMode} loginModelOpen={loginModelOpen} loginModelClose={loginModelClose} />,
//     errorElement: <ErrorElement />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/sell', element: <Form /> },
//       { path: '/product', element: <CardDetails /> }
//     ]
//   }
// ])

function App() {

  const [loginMode, setLoginMode] = useState(false);
  console.log("logged : ", loginMode);
  const [signupMode, setSignupMode] = useState(false);
  console.log("signin : ", signupMode)
  const loginModelOpen = () => {
    setLoginMode(true);
  }
  const loginModelClose = () => {
    setLoginMode(false);
  }
  const signupModelOpen = () => {
    setSignupMode(true);
  }
  const signupModelClose = () => {
    setSignupMode(false);
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root loginMode={loginMode} loginModelOpen={loginModelOpen} loginModelClose={loginModelClose} signupMode={signupMode} signupModelOpen={signupModelOpen} signupModelClose={signupModelClose} />,
      errorElement: <ErrorElement />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/sell', element: <Form /> },
        { path: '/product', element: <CardDetails /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
