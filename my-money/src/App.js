import React from 'react';
import  useAuthContext  from './hooks/useAuthContext';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
//import { projectFirestore } from './config'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/home/Homepage';
import Root from './Root';
//import Navbar from './components/Navbar';

function App() {
  const { authIsReady, user } = useAuthContext();

const checkAuthLoader = () => {
  if (user){
    return redirect('/');
  } 
  return null
}

const router = createBrowserRouter([
  {path: '/', 
  element: <Root/>,
  children: [
  {path: '/', element: <Home/>}, 
  {path:'/Login', element: <Login/>, loader: checkAuthLoader},
  {path: '/Signup', element: <Signup/>, loader: checkAuthLoader}
  ],
}
])







/*   const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [pending, setPending] = useState(); */



/*   useEffect(()=>{
    setPending(true)
  
  projectFirestore.collection('Courses').get().then((snapshot)=>{
   if (snapshot.empty){
    setError('no courses')
    setPending(false);
   } else {
    let results = [];
     snapshot.docs.forEach(doc => {
       results.push({id: doc.id, ...doc.data() })
    })
    setData(results)
    setPending(false) 
    //console.log(results);
  }
  
  }).catch(err => {
    setError(err.message)
    setPending(false)
  })
  
  }, [])
  console.log(data) */

  return (
    <div className="App">
     { authIsReady && (
<RouterProvider router={router} />
     )
}
    </div>
  )
}

export default App;
