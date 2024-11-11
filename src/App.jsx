import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import './App.css'
import Note from './Note';
import Create from './Create'

function App() {
  const router=createBrowserRouter([
      {
        path:'/',element:<Note/>
      },
      {
        path:'/create',element:<Create/>
      }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
