import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from  'react-router-dom'

//Pages and Layouts
import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='profile' element={<Profile />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router= {router} />
  );
}

export default App;
