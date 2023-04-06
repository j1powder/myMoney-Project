import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Homepage';
import Root from './Root';
//import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {path: '/', 
  element: <Root/>,
  children: [
  {path: '/', element: <Home/>}, 
  {path:'/Login', element: <Login/>},
  {path: '/Signup', element: <Signup/> }
  ],
}
])

function App() {

  return (
    <div className="App">
     
<RouterProvider router={router} />
    </div>
  );
}

export default App;
