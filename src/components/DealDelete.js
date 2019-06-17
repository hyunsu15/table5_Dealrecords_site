import React from "react";
import {Remove_Deal} from "../schema/Mutation";
import { useMutation } from 'react-apollo-hooks';

import {Button} from '@material-ui/core/';


function DealDelete({ID}){

const deleteDeal = useMutation(Remove_Deal);
return(
    <React.Fragment>
        <Button   style={{fontWeight:"bold",fontSize:'20px'}}onClick= {(e)=>{deleteDeal({variables:{ID:ID}})}}> 삭제</Button>
    </React.Fragment>
)

}


export default DealDelete;