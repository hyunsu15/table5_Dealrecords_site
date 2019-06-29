import React,{useContext} from "react";
import {Remove_Deal} from "../schema/Mutation";
import { useMutation } from 'react-apollo-hooks';

import {Button} from '@material-ui/core/';
import {optimalRequest} from "../Store";

const DealDelete=({ID})=>{

const deleteDeal = useMutation(Remove_Deal);
const [optimunReq,setOptimunReq]= useContext(optimalRequest);
return(
    <React.Fragment>
        {optimunReq==0&&setOptimunReq(1)}
        {console.log("삭제버튼에서 이거는?"+optimunReq)}
        <Button   style={{fontWeight:"bold",fontSize:'20px'}}onClick= {(e)=>{deleteDeal({variables:{ID:ID}})}}> 삭제</Button>
    </React.Fragment>
)
}


export default DealDelete;