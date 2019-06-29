import React,{useState,useContext} from "react";
import {useMutation} from "react-apollo-hooks";
import {ChangeTrueIsDeliver} from "../schema/Mutation";
import {ChangeFalseIsDeliver} from "../schema/Mutation";
import {ChangeFalseIsAllPay} from "../schema/Mutation";
import {Grid,Button,Box} from '@material-ui/core/';
import {Store,ModifyDealID,varyIsAllPayInfo,optimalRequest} from "../Store"; 

 function CheckBox({isDeliver,ID}){
    const [varyIsAllPay,setVaryAllPay]= useContext(varyIsAllPayInfo)


    const [checkBox,setCheckBox]= useState({
        value1:isDeliver,
        value2:varyIsAllPay,
    });
    const [originalState,setOrigin] = useState(varyIsAllPay);
    //context
    const [DealID,setDealID]= useContext(ModifyDealID);
    const [,setAppChoose]=useContext(Store)
    const [optimalReq,setOptimalReq]= useContext(optimalRequest);
    
    
    //쿼리
    const changeTrueDeliver= useMutation(ChangeTrueIsDeliver)
    const changeFalseDeliver = useMutation(ChangeFalseIsDeliver)
    const changeFalseAllPay = useMutation(ChangeFalseIsAllPay)
    


    const _ChangeState=()=>{
       if(!checkBox.value1) changeFalseDeliver({variables:{ID:ID}})
       else changeTrueDeliver({variables:{ID:ID}})
        if(originalState==checkBox.value2);
       else if(originalState&&!checkBox.value2){setVaryAllPay(false);changeFalseAllPay({variables:{ID:ID}})}
        else {setDealID(ID);setAppChoose(2)}
       {optimalReq==0&&setOptimalReq(1)} 
    }  
    const checkBoxList=() =>{
        const _unCheckBox =()=>{
            let obj = document.getElementsByName("checkbox1");
            for(let i=0;i<obj.length;i++)
                if(obj[i].checked=true)obj[i].checked=false;         
        }
        function onClick (){
            _ChangeState();
            _unCheckBox()
            
        }
      
        return <Grid container justify="center">
                    <Box container ="span">
                    배달반전<input type="checkbox" name="checkbox1" value="배달" onChange={() => { setCheckBox({ ...checkBox, value1: !checkBox.value1 }); }} />
                    결제반전<input type="checkbox" name="checkbox1" value="결제" onChange={() => { 
                        setCheckBox({ ...checkBox, value2: !checkBox.value2 });
                    }} />
                    <Button style={{ fontWeight: "bold" }} onClick={onClick}>저장</Button>
                    </Box>
                </Grid>;
    }
    
    return(
        <React.Fragment>
        
        {console.log("원상태"+originalState+" 반전?"+checkBox.value2)}
        
        {checkBoxList()}
        </React.Fragment>
    )




}
    
    





export default CheckBox;



