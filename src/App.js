import './App.css';
import Router from './router/Router.js';
import { BrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout.js";


function App() {
  return (
    <div className="">
       <BrowserRouter>
       <Layout> 
     <Router></Router>
     </Layout> 
     </BrowserRouter>
      
    </div>
  );
}

export default App;
