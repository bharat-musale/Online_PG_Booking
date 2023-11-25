import Navbar from './navbar';
import {Link,Switch,Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import Home from './home';
import Login from './login';
import DisplayPg from './displaypg';
import ProtectedRoute from './ProtectedRoute';
import ViewPg from './viewpg';
import RegisterUser from './registeruser';
import ViewPgDetails from './viewpgdetails';
import BookPg from './bookpg';
import ContactOwner from './contactowner';
import Profile from './profile';
import ViewBookings from './viewbookings';
import { ToastContainer } from 'react-toastify';



export default function App()
{
    
    const [state, setState] = useState("");

    useEffect(()=>{
     
    },[])

   

    return <>
              
                     <Navbar />
                     <Switch>

                            <Route exact path='/home'
                                   component={Home}></Route>        
                            <Route exact path='/login'>
                                   <Login  setState={setState}/>
                            </Route>
                            <ProtectedRoute exact path='/displaypg'
                                   component={DisplayPg}></ProtectedRoute>
                            <ProtectedRoute exact path='/viewpg'
                                   component={ViewPg}></ProtectedRoute>
                            <ProtectedRoute exact path='/viewpgdetails'
                                   component={ViewPgDetails}></ProtectedRoute>
                            <ProtectedRoute exact path='/bookpg'
                                   component={BookPg}></ProtectedRoute>
                            <ProtectedRoute exact path='/contactowner'
                                   component={ContactOwner}></ProtectedRoute>
                            <ProtectedRoute exact path='/profile'
                                   component={Profile}></ProtectedRoute>
                            <ProtectedRoute exact path='/viewbookings'
                                   component={ViewBookings}></ProtectedRoute>

                            <Route exact path='/registeruser'
                                   component={RegisterUser}></Route> 

                     </Switch>
                     <ToastContainer />
        </>
}

