import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function DisplayPg()
{
    var [pg, setPg] = useState([]);
    var [pgs,setPgs] = useState({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""});
    var [image,setImage] = useState({pg_Image:""})
    const history = useHistory();
   
    let viewpg = (input)=>{

        history.push({

            pathname : "/viewpg",
            state: input
        })
    }

    

    return(
        <>
           
             <button type="button" class="btn btn-outline-info" onClick={()=>{viewpg("Pune")}}>Pune</button>
             <button type="button" class="btn btn-outline-info" onClick={()=>{viewpg("Banglore")}}>Banglore</button>
             <button type="button" class="btn btn-outline-info" onClick={()=>{viewpg("Hyderabad")}}>Hyderabad</button>
             <button type="button" class="btn btn-outline-info" onClick={()=>{viewpg("Mumbai")}}>Mumbai</button>



    {/* <div className="container mt-5">
      <div className="card">
        <div className="card-header" style={{ backgroundColor: '#0f74e1' }}>
          PG Information (Owner side)
        </div>
        <div className="card-body" style={{ backgroundColor: '#007bff80' }}>
          <img
            src="./image/room1.jpg"
            className="float-right class"
            style={{ width: '280px' }}
            alt="Owner Image"
          />
          <h5 className="card-title">PG Name: Menlo</h5>

          <p className="card-text">Address: Hinjewadi</p>
          <p className="card-text">Booking (Count): 5</p>
          <p className="card-text">Is Vacant: Yes</p>

          <a href="#" className="btn btn-success">
            Book Now
          </a>
        </div>
      </div>
    </div> */}




            
        </>
    )
}

export default DisplayPg;