import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import SidebarComponent from './components/Sidebar';
import NavSideBarComponent from './components/NavSidebar';

import Register from './pages/Register';
import Login from './pages/Login';
import FileList from './pages/FileList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleSheet/index.scss';
import Home from './pages/Home';
import QuestionsCount from "./services/QuestionsCount";
import { useState } from 'react';


function App() {
  const [data, setData] = useState<any>(null);
  return (
    <>


      <BrowserRouter>

        <Routes>

          <Route path='/' element={<NavSideBarComponent />}>
            <Route path="/home" element={<Home numQuestions={data} />} />
            <Route path="/download" element={<FileList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App


/*     <div>
                  <NavbarComponent/>
    <SidebarComponent/>

      <SidebarComponent/>
      <QuestionsCount setData={setData} />

      <BrowserRouter>
        
            <Routes>            
              <Route path="/register" element= { <Register/>} />
              <Route path="/home" element= { <Home numQuestions={data}/>} />
              <Route path="/login" element= { <Login/>} />
              <Route path="/download" element= { <FileList/>} />
            </Routes>
        </BrowserRouter>
    </div>  */