import AuthForm from "./pages/AuthForm/AuthForm";
import Home from "./pages/Home/Home";
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Session_checker from "./protectors/auth/session_checker";
import MessageDashboard from "./pages/Messaging_dashboard/Messaging_dashboard";
import ProfilePage from "./pages/profile/profile";
import Feedtoggle from "./Components/Home/feed";

const router = createBrowserRouter([
  {path: '/login', element: <AuthForm />},
  {path: '/', element:<Session_checker> <Home /> </Session_checker> , 
    children:[
      {path:'messaging', element: <MessageDashboard />},
      {path:'profile', element: <ProfilePage />},
      {path:'', element: <Feedtoggle />},

    ]
  }

]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
