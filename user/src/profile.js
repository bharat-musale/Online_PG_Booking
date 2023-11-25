import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function Profile(){

    const [user,setUser] = useState([]);
    const [userss, setUserss] = useState({user_id:"", user_first_name:"", user_last_name:"",user_email:"",user_password:"",user_mobile:"", user_profileImage:""})
    const history = useHistory();

    useEffect(()=>{
        Select();
    }, []);

    const user_id = sessionStorage.getItem("user_id")


    var Select=()=>{
        debugger;
        axios.get("http://localhost:5000/user/getuserbyid/"+user_id).then((result)=>{  
        setUser(result.data.data);
        console.log(result)
        
        debugger;
            
        })
    }

    let viewbooking =()=>{
        history.push('/viewbookings')
    }

    var TextChanged=function (args)
    {
        debugger;
        var copyOfUser = {...userss};
        copyOfUser[args.target.name] = args.target.value;
        setUserss(copyOfUser);
    }

    var Edit= function(user_id){
        for(var i=0; i< user.length; i++)
        {
            if(user[i].user_id == user_id)
            {
                var copyOfUser = {...user[i]};
                setUserss(copyOfUser);
                break;
            }
        }
    }


    return(

        <>
        
       
        
        {user.map((p)=>{     
                return(    
                    <div align='center' > 
                     <h1>My Profile </h1>
                    <div class="card" style={{marginLeft:400, marginRight:400,width:500}}>
                        <div class="card-body">
                            {/* <img src={getImg(p.owner_profileImage)} class="card-img-top" alt="..."/> */}
                            <h5 class="card-title">Name: {p.user_first_name}</h5>
                            <h10 class="card-text">Email: {p.user_email}</h10><br/>
                            <h10 class="card-text">Mobile_No.: {p.user_mobile}</h10><br/>
                            <hr size="10" width="100%" color="red"></hr><br/>
                            <h7></h7><br/>                       
                        </div>
                        <tr >

                            <td align='center' colSpan={2}>
                            <button  className='btn btn-outline-warning' onClick={viewbooking}>
                                            View Bookings
                            </button>
                            </td>

                        </tr>
                        <tr >

                            <td align='center' colSpan={2}>
                            <button  className='btn btn-outline-warning' onClick={()=>{Edit(user_id)}}>
                                            Edit
                            </button>
                            </td>

                        </tr>

                    </div>
                    </div>
                    
                )}
        )} 
<br></br>
<table align='center'>
            <tbody>
            <tr>
                    <td>user_id:</td>
                    <td>
                        <input type='text' name='user_id' value={user_id} onChange={TextChanged}></input>
                    </td>
                </tr>
                <tr>
                    <td>owner_first_name:</td>
                    <td>
                        <input type='text' name='user_first_name' value={userss.user_first_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>owner_last_name:</td>
                    <td>
                        <input type='text' name='user_last_name' value={userss.user_last_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>owner_password:</td>
                    <td>
                        <input type='text' name='user_email' value={userss.user_email} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>owner_password:</td>
                    <td>
                        <input type='text' name='user_password' value={userss.user_password} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>owner_mobile:</td>
                    <td>
                        <input type='text' name='user_mobile' value={userss.user_mobile} onChange={TextChanged}></input>
                    </td>
                </tr>
<br />
                
                <tr >

                    <td align='center' colSpan={2}>
                        <button  className='btn btn-success' >
                                            Update
                        </button>
                    </td>
                
                </tr>
            </tbody>
        </table><br/>





        
        </>

    )


}