import AuthForm from "./pages/AuthForm/AuthForm";
import Home from "./pages/Home/Home";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/Auth', element: <AuthForm />},

]);

function App() {
  return (
    <>
     <Home/>
    </>
  );
}

export default App;
