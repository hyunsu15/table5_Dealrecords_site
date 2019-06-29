import React, { useState, useContext } from "react";
import Header from "./Header";
import CreateTabs from "./CreateTabs";
import {ModifyTabStore} from "../Store"
import CreatePayPerson from "./CreatePayPerson";
import {Grid,Paper,Button} from '@material-ui/core'
import {Store,CreateBankInfo,CreatePayPersonInfo,ModifyDealID,ConnectPayPersonID,varyIsAllPayInfo} from "../Store"
import {useMutation} from "react-apollo-hooks";
import {CreatePayPerson_Mutation,UpdateIsAllPay} from "../schema/Mutation";
import ConnectPayPerson from "./ConnectPayPerson";



function  ModifyPayPerson(){
    const [choose,setChoose]=useState(0);
    const [name,setName]= useState("");  
    const [bank,setBank]= useState("");  
    const [connectPayPerson,setConnectPayPerson]=useState("");
    
    const [,setOriginState]= useContext(varyIsAllPayInfo)
    const [appChoose,setAppChoose]= useContext(Store)
    const [DealID,setDealID]= useContext(ModifyDealID);
     
    
    
    const createPayPerson=useMutation(CreatePayPerson_Mutation);
    const updateIsAllPay= useMutation(UpdateIsAllPay);


    function _controller(){
        if(choose==0)
         return <CreateBankInfo.Provider value={[bank,setBank]} >
             <CreatePayPersonInfo.Provider value ={[name,setName]}>
             <CreatePayPerson/>
             </CreatePayPersonInfo.Provider>
             </CreateBankInfo.Provider>
        if(choose==1) //연결
        return <ConnectPayPerson/>
    } 
    function _saveClick(){
        if(choose==0){  
            let ID=createPayPerson({variables:{bank:bank,payPerson:name}})
            ID.then(function(result){
                updateIsAllPay({variables:{PayPerson:result.data.createPayPerson.ID,Deal:DealID}})//만든 결제자 ID
            })               
        }
        if(choose==1) {
            updateIsAllPay({variables:{PayPerson:connectPayPerson,Deal:DealID}})
        }

        return setOriginState(true)

    }
    return (
    <React.Fragment>
    <Header name ={"결제자수정"}/>
    <ModifyTabStore.Provider value ={[choose,setChoose]}>
    <CreateTabs array={["생성","연결"]} fx={ModifyTabStore}/>
    </ModifyTabStore.Provider>
    <Paper>
    <ConnectPayPersonID.Provider value={[connectPayPerson,setConnectPayPerson]}>
    {_controller()}
    <Grid container justify="flex-end" alignItems="center" alignContent="center" >
    <Button onClick={(e)=>{_saveClick();setAppChoose(1)}}>저장</Button>
    <Button onClick={(e)=>{setAppChoose(1)}}>돌아가기</Button>
    </Grid>
    
    </ConnectPayPersonID.Provider>
    </Paper>
    </React.Fragment>        
    )


}

export default ModifyPayPerson;