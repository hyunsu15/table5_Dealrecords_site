import React,{useState} from "react";
import {useMutation} from "react-apollo-hooks";
import {ChangeTrueIsDeliver} from "../schema/Mutation";
import {ChangeFalseIsDeliver} from "../schema/Mutation";
import {ChangeFalseIsAllPay} from "../schema/Mutation";
import {TButton,Checkbox,Grid,Button,Box} from '@material-ui/core/';
import { grey } from "@material-ui/core/colors";

 function CheckBox({isDeliver,isAllPay,ID}){
    const [checkBox,setCheckBox]= useState({
        value1:isDeliver,
        value2:isAllPay,
    });
    const changeTrueDeliver= useMutation(ChangeTrueIsDeliver)
    const changeFalseDeliver = useMutation(ChangeFalseIsDeliver)
    const changeFalseAllPay = useMutation(ChangeFalseIsAllPay)
    const _ChangeState=()=>{
      
        if(!checkBox.value1&&!checkBox.value2){changeFalseDeliver({variables:{ID:ID}});changeFalseAllPay({variables:{ID:ID}})}
        if(!checkBox.value1&&checkBox.value2){changeFalseDeliver({variables:{ID:ID}}); window.open("https://db-layer-de1a8af52f.herokuapp.com/data-layer/dev/_admin",'_blank')}
        if(checkBox.value1&&!checkBox.value2){changeTrueDeliver({variables:{ID:ID}});changeFalseAllPay({variables:{ID:ID}})}
        if(checkBox.value1&&checkBox.value2){changeTrueDeliver({variables:{ID:ID}}); window.open("https://db-layer-de1a8af52f.herokuapp.com/data-layer/dev/_admin",'_blank')}
         return window.location.reload();
    }  
    function checkBoxList() {
        return <Grid container justify="center" >
                    <Box container ="span" >
                    배달 반전<input type="checkbox" name="isDeliver" value="배달" onClick={() => { setCheckBox({ ...checkBox, value1: !checkBox.value1 }); }} />
                    결제반전<input type="checkbox" name="isPay" value="결제" onClick={() => {
                        setCheckBox({ ...checkBox, value2: !checkBox.value2 });
                    }} />
                    <Button style={{ fontWeight: "bold" }} onClick={() => { _ChangeState(); }}> 저장</Button>
                    </Box>
                </Grid>;
    }
    return(
        <React.Fragment>
        {checkBoxList()}
        </React.Fragment>
    )

    
}



export default CheckBox;