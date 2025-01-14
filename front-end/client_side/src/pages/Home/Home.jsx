import NavBar from "../../Components/Home/NavBar";
import Sidebar from "../../Components/Home/SideBar";
const Home = () => {
    return (
      <div className="flex min-h-screen bg-white">
        {/* Left Sidebar - Fixed */}
        <div className="fixed left-0 h-screen border-r border-gray-200">
          <NavBar />
        </div>
  
        {/* Main Content Area - Scrollable */}
        <main className="flex-1 ml-72 mr-96">
          {/* Your feed content will go here */}
        </main>
  
        {/* Right Sidebar - Fixed position with independent scroll */}
        <aside className="fixed right-0 top-0 bottom-0 w-96 overflow-y-scroll">
        <div className="h-full border-l border-gray-200">
          <Sidebar />
        </div>
      </aside>
      </div>
    );
  };
  
export default Home;