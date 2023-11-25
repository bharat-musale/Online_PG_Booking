import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


function AddPG()
{
   
    var [pgs,setPgs] = useState({pg_id:"",   pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:"", owner_id:""});
    var [message, setMessage] = useState( "");
    var [img, setImg] = useState();

    useEffect(()=>{

    }, []);

    var ShowMessage = function(msg)
    {
        setMessage(msg);
        setTimeout(() => 
                        {
                            setMessage("");
                        }, 5000);
                    }

    var TextChanged=function (args)
    {
        debugger;
        var copyOfPg = {...pgs};
        copyOfPg[args.target.name] = args.target.value;
        setPgs(copyOfPg);
    }
     
    const owner = sessionStorage.getItem("owner_id")

    var Insert = function()
    {
        var obj ={ pg_name: pgs.pg_name, pg_type: pgs.pg_type, pg_city: pgs.pg_city, pg_isVacaent: pgs.pg_isVacaent, pg_rent: pgs.pg_rent, pg_address: pgs.pg_address,pg_foodType: pgs.pg_foodType, owner_id: owner}
       axios.post("http://localhost:5000/owner/addpg", obj).then((result)=>{
        if(result.data.status === "success"){
            console.log("success")
        }
       })
    }

    // let uploadImg =()=>{
    //     const formData = new FormData()
    //     formData.append("image",img,img.name)
    
    //     axios.post("http://localhost:5000/owner/uploadPgImage/"+pgg, formData).then((result)=>{
    //         if(result.data.status === "success"){
                
    //             Select();
                
    //         }
    //     })
    // }
  
    let handleImg =(e)=>{
        setImg(e.target.files[0])
    }



    return(
        <>

        <table align='center'>
            <tbody>
                <tr>
                    <td>pg_name:</td>
                    <td>
                        <input type='text' name='pg_name' value={pgs.pg_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_type:</td>
                    <td>
                        <input type='text' name='pg_type' value={pgs.pg_type} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_city:</td>
                    <td>
                        <input type='text' name='pg_city' value={pgs.pg_city} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_isVacaent:</td>
                    <td>
                        <input type='text' name='pg_isVacaent' value={pgs.pg_isVacaent} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_rent:</td>
                    <td>
                        <input type='text' name='pg_rent' value={pgs.pg_rent} onChange={TextChanged}></input>
                    </td>
                </tr>
                <tr>
                    <td>pg_address:</td>
                    <td>
                        <input type='text' name='pg_address' value={pgs.pg_address} onChange={TextChanged}></input>
                    </td>
                </tr>
                <tr>
                    <td>pg_foodType:</td>
                    <td>
                        <input type='text' name='pg_foodType' value={pgs.pg_foodType} onChange={TextChanged}></input>
                    </td>
                </tr>
               <tr>

               <div align="center">
                    <input type="file" name="image" onChange={handleImg} />

             
      </div>



               </tr>
                <tr >
                    <td align='center' colSpan={2}>
                <button  className='btn btn-success' onClick={Insert}>
                                    ADD Pg
                </button>
                    </td>
                
                </tr>
            </tbody>
        </table>







        
        </>
    )
}

            
export default AddPG;