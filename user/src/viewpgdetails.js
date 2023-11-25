import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './viewpgdetails.css'; // Import your custom CSS file

export default function ViewPgDetails(){

    var [pg, setPg] = useState([]);
    var [pgs,setPgs] = useState({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""});
    const location = useLocation()


    const history = useHistory();
    let pg_id = location.state

    console.log(pg_id)

    useEffect(()=>{
        Select();
    }, []);

    var Select=()=>{
        debugger;
        axios.get("http://localhost:5000/user/viewpgbyid/"+pg_id).then((result)=>{  
        setPg(result.data.data);
        console.log(result)
        
        debugger;
            
        })
    }

    let getImg = (img) =>{
        return "http://localhost:5000/"+img
    } 

    const user_id = sessionStorage.getItem("user_id")
    console.log(user_id);

    let bookpg = (user_id, owner_id, pg_id) =>{

        var obj = {user_id: user_id, owner_id: owner_id, pg_id: pg_id}
        console.log(obj)
        axios.post("http://localhost:5000/user/bookpg", obj).then((result)=>{
            console.log("booking successful")
            toast.success("Booking successful");
            history.push("/bookpg")
        })
    }

    let contact = (input)=>{

        history.push({

            pathname : "/contactowner",
            state: input
        })
    }

    
return(

    <>
    
   
    
        {pg.map((p)=>{     
                        return(    
  


<div className="container mt-5">
<div className="card w-50 mx-auto">
        <div className="card-header" style={{ backgroundColor: '#0f74e1' }}>
          PG Details : 
        </div>
        <div className="card-body" style={{ backgroundColor: '#ffffff' }}>
          <img
            src={getImg(p.pg_Image)}
            className="float-right class"
            style={{ width: '280px' }}
            alt="Owner Image"
          />
          <h5 className="card-title">PG Name: {p.pg_name}</h5>

          <h10 class="card-text">City: {p.pg_city}</h10><br/>
                    <h10 class="card-text">Address : {p.pg_address}</h10><br/>
                    <h10 class="card-text">Food Type : {p.pg_foodType}</h10><br/>
                 <h10 class="card-text">Vacant or Not : {p.pg_isVacaent}</h10><br/>
                    {/* <h10 class="card-text">pg_name: {p.pg_name}</h10><br/> */}
                 <h10 class="card-text">Type: {p.pg_type}</h10><br/>
         
                 <br /><br />
               
                 <a href="#" className="btn btn-outline-primary" onClick={()=>{contact(p.owner_id)}}>
                 Contact Owner
          </a>
          &nbsp; &nbsp;
          <a href="#" className="btn btn-outline-success" onClick={()=>{
                             bookpg(user_id, p.owner_id, p.pg_id)
                      }}>
            Book Now
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>



                    
                    )}
        )} 
            
    
    </>
)



}