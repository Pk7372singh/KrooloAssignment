import Header from "./components/Header";
import ProjectTable from "./components/Project";
import Sidebar from "./components/sidebar";


const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <ProjectTable />
      </div>
    </div>
  );
};

export default App;