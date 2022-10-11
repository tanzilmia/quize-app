
import './App.css';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './Layout/Main';
import Home from './component/Home/Home';

function App() {

const router = createBrowserRouter([
  {path : '/', element : <Main></Main>, children : [
    {path : '/', element : <Home></Home>}
  ]}
])

  return (
    <div>
     <RouterProvider router = {router} ></RouterProvider>
    </div>
  );
}

export default App;
