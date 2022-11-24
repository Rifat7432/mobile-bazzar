import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router'
function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
