import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


export default function ViewBookings(){

    const[booking, setBooking] = useState([]);
    const[bookingss, setBookingss] = useState({user_id:"", pg_id:"",pg_Image:"", pg_name:"", pg_city:"", pg_rent:""})

    useEffect(()=>{
        Select();
    }, []);

    const user_id = sessionStorage.getItem("user_id")

    var Select=()=>{
        debugger;
        axios.get("http://localhost:5000/user/viewbookings/"+user_id).then((result)=>{  
        setBooking(result.data.data);
        console.log(result)
        
        debugger;
            
        })
    }


    let getImg = (img) =>{
        return "http://localhost:5000/"+img
    } 


    return(
        <>
        <h1> Inside View Bookings</h1>
        
        {booking.map((p)=>{     
                return(    
                    // <div class="card" style={{marginLeft:400, marginRight:400,width:500}}>
                    //     <div class="card-body">
                    //         { <img src={getImg(p.pg_Image)} class="card-img-top" alt="..."/> }
                    //         <h5 class="card-title">Name: {p.pg_name}</h5><br/>
                    //         <h10 class="card-text">City: {p.pg_city}</h10><br/>
                    //         <h10 class="card-text">Mobile_No.: {p.pg_rent}</h10><br/>
                    //         <hr size="10" width="100%" color="red"></hr><br/>
                    //         <h7></h7><br/>                       
                    //     </div>
                        

                    // </div>
                    
                    <div className="container mt-5">
                  <div className="card w-50 mx-auto">
                      <div className="card-header" style={{ backgroundColor: '#0f74e1' }}>
                        My Bookings : 
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
                                 
                              
                               <h10 class="card-text">Rent: ₹{p.pg_rent}</h10><br/>
                       
                               <br /><br /><br />
                             
                   
                       
                      </div>
                    </div>
                  </div>

                )}
        )} 

        
        
        </>




    )



}