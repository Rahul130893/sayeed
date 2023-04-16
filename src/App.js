import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import Main from "./components/Main"
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <div style={{display:"flex"}}>
      <div>
        <ProSidebarProvider>
          <SideMenu />
        </ProSidebarProvider>
      </div>

      <div>
        <div><Navbar/></div>
        <div><Main/></div>
      </div>
    </div>
  );
}

export default App;
