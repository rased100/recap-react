import './App.css';
// import Home from './pages/Home';
import router from './pages/Router';
import {
    RouterProvider,
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
