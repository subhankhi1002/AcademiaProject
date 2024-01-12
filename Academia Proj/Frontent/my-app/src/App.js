import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Form from './Form';
import { Link,Route,Routes,Router } from 'react-router-dom';
import Nav from './Nav';
import HrForm from './HrForm';
import ViewOrg from './ViewOrg';
import Profile from './Profile';
import HrDet from './HrDet';
import OrgDet from './OrgDet';



function App() {
  return (

    <div className='All'>
    <div className='navbar'>

    <header className="Header">
            
            <img src="https://www.iiitb.ac.in/includefiles/userfiles/images/iiitb_logo.jpg" alt="Logo" class="logoNav"/>
            <div>
                <h1>Welcome Outreach User</h1>
            <h2>Empowering Connections</h2>
            </div>
    
            <img src="https://www.state.gov/wp-content/uploads/2021/04/Outreach-Logo.png" alt="Logo" class="outreach"/>
            
          
            
        </header>
    



    </div>




    <div className='App'>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path='/hrForm' element={<HrForm/>}/>
      <Route path ="/viewOrg" element={<ViewOrg/>}/>
      <Route path='/hrDet' element={<HrDet/>}/>
      <Route path='/orgDet' element={<OrgDet/>}/>


      
    </Routes>
    </div>
    </div>
  )
}

export default App;
