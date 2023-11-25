import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import viewpg from './viewpg';
import { useHistory } from 'react-router-dom';


function DisplayPg()
{
    var [pg, setPg] = useState([]);
    var [pgs,setPgs] = useState({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""});
    var [image,setImage] = useState({pg_Image:""})
    const history = useHistory();
    
    useEffect(()=>{
        Select();
    }, []);

    var Select=()=>{
        debugger;
        const owner_id = sessionStorage.getItem("owner_id")
        axios.get("http://localhost:5000/owner/viewpg/"+owner_id).then((result)=>{  
        setPg(result.data.data);
        console.log(result)
        
        console.log(setPgs)
        debugger;
            
        })
    }

    var image = () =>{
        axios.get("http://localhost:5000/owner/viewpgimage/").then((result)=>{
            setImage(result.data.data.pg_Image);
        })
    }

    let viewpg = (input, owner)=>{

        history.push({

            pathname : "/viewpg",
            state: {input:input, owner:owner}
        })
    }

let del = (pg, owner) =>{
    console.log(pg)
    console.log(owner)
    var obj = {pg_id: pg, owner_id: owner}


    axios.post("http://localhost:5000/owner/deletepg",obj).then((result)=>{
        if(result.data.status === "success"){
                Select();
        }
  
    })
}


    let getImg = (img) =>{
        return "http://localhost:5000/"+img
    } 

    return(
        <>
                    {pg.map((p)=>{     
                        return(    
                            <div className="container mt-5">
                      <div className="card w-50 mx-auto">
                              <div className="card-header" style={{ backgroundColor: '#0f74e1' }}>
                                All PG List : 
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
                                         
                                       <h10 class="card-text">Vacant or Not : {p.pg_isVacaent}</h10><br/>
                                        
                                       <h10 class="card-text">Rent: ₹{p.pg_rent}</h10><br/>
                               
                                       <br /><br /><br />
                                       <button type="button" class="btn btn-outline-info" onClick={()=>{
                        viewpg(p.pg_id,p.owner_id)
                        }}>
                             ViewPg
                         </button><br/>
                         <br />

                         <button type="button" class="btn btn-outline-danger" onClick={()=>{
                             del(p.pg_id, p.owner_id)
                         }}> Delete</button>
                                     
                                       
                               
                              </div>
                            </div>
                          </div>

                    // <div class="card" style={{marginLeft:400, marginRight:400,width:500}}>
                    // <img src={getImg(p.pg_Image)} class="card-img-top" alt="..."/>
                    // <div class="card-body">
                    //     <h5 class="card-title">Name: {p.pg_name}</h5>
                    //     <h10 class="card-text">City: {p.pg_city}</h10><br/>
                    //     <h10 class="card-text">pg_id: {p.pg_id}</h10><br/>
                    //     <hr size="10" width="100%" color="red"></hr><br/>
                    //     <span class="material-symbols-outlined">Rent: ₹{p.pg_rent}</span>
                    //     <h7></h7><br/>
                    //     <button type="button" class="btn btn-outline-info" onClick={()=>{
                    //         viewpg(p.pg_id,p.owner_id)
                    //     }}>
                    //         ViewPg
                    //     </button><br/>

                    //     <button type="button" class="btn btn-outline-danger" onClick={()=>{
                    //         del(p.pg_id, p.owner_id)
                    //     }}> Delete</button>
                        
                    // </div>
                    // </div>
                    
                    )}
        )} 
                
            
        </>
    )
}

export default DisplayPg;