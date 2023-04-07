import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
//import { projectFirestore } from './config'; 
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
     
<RouterProvider router={router} />
    </div>
  )
}

export default App;
