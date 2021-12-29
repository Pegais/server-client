import Navbar from './components/Navbar';
import './App.css';
import Page1_home from './components/page1_home';
import {BrowserRouter as Router,Switch,Route,BrowserRouter} from 'react-router-dom'
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
       <Switch>
        <Route path='/' exact render={(prop)=>(
            <>
           <Navbar/>
           <Page1_home/>
            </>
        )}/>
           <Route path='/home' component={Homepage}/> 
        

         </Switch>
     
  </Router>
    
   
  )
  
}
export default App;