
import './App.css';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import Quizediv from './component/quizediv/Quizediv';

function App() {

const router = createBrowserRouter([
  {path : '/', element : <Main></Main>, children : [
    {path : '/',
    loader : () => fetch(`https://openapi.programming-hero.com/api/quiz`),
    element : <Home></Home>},
    {path : '/statistics',
    loader : () => fetch(`https://openapi.programming-hero.com/api/quiz`),
    element : <Statistics></Statistics>},
    {path :'/blog', element : <Blog></Blog>},
    {
      path :'/quize/:id',
      loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      element : <Quizediv></Quizediv>
    }
  ]}
])

  return (
    <div>
     <RouterProvider router = {router} ></RouterProvider>
    </div>
  );
}

export default App;
