import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router'
import Loader from './Pages/Shered/Loader/Loader';
function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
    <RouterProvider router={router} fallbackElement={<Loader></Loader>}></RouterProvider>
    </div>
  );
}

export default App;