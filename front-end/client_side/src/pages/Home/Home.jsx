import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Components/Home/NavBar";
import Sidebar from "../../Components/Home/SideBar";
const Home = () => {
  const location = useLocation();
  const path = location.pathname;
    return (
      <div className="flex min-h-screen bg-white">
        <div className="fixed left-0 h-screen border-r border-gray-200">
          <NavBar />
        </div>
  
        <main className={`flex-1 ml-72 ${path === '/messaging'  ? '' : 'mr-96'}`}>
          <Outlet/>
        </main>
         { path === '/messaging' ? null :
                 <aside className="fixed right-0 top-0 bottom-0 w-96 overflow-y-scroll">
        <div className="h-full border-l border-gray-200">
          <Sidebar />
        </div>
      </aside>
}
      </div>
    );
  };
  
export default Home;