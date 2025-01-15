import AuthForm from "./pages/AuthForm/AuthForm";
import Home from "./pages/Home/Home";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Session_checker from "./protectors/auth/session_checker";

const router = createBrowserRouter([
  {path: '/login', element: <AuthForm />},
  {path: '/', element:<Session_checker> <Home /> </Session_checker> , 
    children:[{}]
  }

]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
