import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


function RegisterUser()
{
    var [userss, setUserss] = useState([]);
    var [message, setMessage] = useState("");
    var [user, setUser] = useState({user_first_name:"",user_last_name:"",user_email:"",user_password:"",user_mobile:""});


    useEffect(()=>{

    }, []);

  

    var TextChanged = function(args)
    {
        var copyOfOwner = {...user};
        copyOfOwner[args.target.name] = args.target.value;
        setUser(copyOfOwner);
    }

    var Insert = function()
    {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{

            if(helper.readyState == 4 && helper.status == 200)
            {
                var result = JSON.parse(helper.responseText);
                if(result.data.affectedRows > 0)
                {
                    setMessage("Record Added Successfully !!");
                    setUser({user_first_name:"",user_last_name:"",user_email:"",user_password:"",user_mobile:""});
                }
            }
        }

        helper.open("POST", "http://localhost:5000/user/register");

        helper.setRequestHeader("Content-Type", "application/json");

        var dataToBePassedInStringFormat = JSON.stringify(user);
        helper.send(dataToBePassedInStringFormat);
    }
     

    return(
        <>

        <table align='center'>
            <tbody>
                <tr>
                    <td>User_First_Name:</td>
                    <td>
                        <input type='text' name='user_first_name' value={user.user_first_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>User_Last_Name:</td>
                    <td>
                        <input type='text' name='user_last_name' value={user.user_last_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>User_Email:</td>
                    <td>
                        <input type='text' name='user_email' value={user.user_email} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>User_Password:</td>
                    <td>
                        <input type='text' name='user_password' value={user.user_password} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>User_Mobile:</td>
                    <td>
                        <input type='text' name='user_mobile' value={user.user_mobile} onChange={TextChanged}></input>
                    </td>
                </tr>
                <tr >

                    <td align='center' colSpan={2}>
                <button  className='btn btn-success' onClick={Insert}>
                                    Register
                </button>
                    </td>
                
                </tr>
            </tbody>
        </table>






        
        </>
    )
}

            
export default RegisterUser;