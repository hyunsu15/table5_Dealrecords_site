import React,{ useContext} from "react";
import {TextField,Grid} from '@material-ui/core';
import {CreateBankInfo,CreatePayPersonInfo} from "../Store"

function CreatePayPerson(){
    const [bank,setBank]=useContext(CreateBankInfo);
    const [name,setName]=useContext(CreatePayPersonInfo);
  return (
    <React.Fragment>  
         {_TextField("은행",bank,setBank)}
         {_TextField("입금자명",name,setName)}
    </React.Fragment>
        
    )    

}

const _TextField=(name,info,setInfo)=>{
    return<Grid container justify="center" alignItems="center" alignContent="center">
      <TextField
      required
      id="standard-required2"
      label={name}
      margin="normal"
      onChange={(e)=>{setInfo(e.target.value )}}
    /> 
    </Grid> 

}



export default CreatePayPerson;