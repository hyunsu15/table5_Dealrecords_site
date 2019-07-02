import React,{useContext,useState} from "react";
import DealDelete from "./DealDelete";
import CheckBox from "./CheckBox";
import {Typography,Grid,Table,TableRow,TableCell,TableBody,Box} from '@material-ui/core/';
import {ModifyDealID} from "../Store"
import grey from '@material-ui/core/colors/grey';


                    
const changeState=(props,checkBox,setCheckBox)=>{
    if(checkBox.value1!=props.isDeliver) return setCheckBox({...checkBox,value1:props.isDeliver})
    if(checkBox.originV2!=props.isAllPay) return setCheckBox({...checkBox,originV2:props.AllPay})

}



function Deal(props){
    
    const [modifyDealID,setDealID]= useContext(ModifyDealID);
    
    return(
        <React.Fragment>        
            
                <Box container ={props.ID} p={2} m={1}style={{backgroundColor:grey[50]}}>
                <Grid container  justify="flex-end"><DealDelete ID={props.ID} /></Grid>
                <Grid container justify ="center">
                    {_textDealList(props)}                     
                    <CheckBox isAllPay={props.isAllPay} isDeliver ={props.isDeliver}ID= {props.ID}/>
                </Grid>
            </Box>
     </React.Fragment>
    )    
}

export default Deal;

const createTableRow=(par1,par2,par3)=> {
    return <TableRow>
        <TableCell align="center">{par1}</TableCell>
        <TableCell align="center">{par2}</TableCell>
        <TableCell align="center">{par3}</TableCell>
    </TableRow>;
}

 const _TableBody=(props)=>{
        return<TableBody>
                    {createTableRow("제품","수량","가격")}
                    {createTableRow(props.productName,props.productNum,props.productCost)}
                    {createTableRow("청구금액"," ",props.productCost)}                        
                    {createTableRow("결제자",props.bank=="미정"||props.bank=="직거래"? props.bank:props.bank+"은행",props.payPerson)}                        
                </TableBody>
    }
    const _priceList=(props)=> {
        return<Table>
                {_TableBody(props)}
            </Table>        
    }


const _textDealList=(props)=>{
    

    return <Grid >
        <Typography variant="body1" align='center' gutterBottom>
            기간:{props.createdAt}
        </Typography>
        <Typography variant="body1" align= 'center' gutterBottom>
            주소:{props.address}
        </Typography>
        <Typography variant="body1" align='center' gutterBottom>
            구매자:{props.userName}/{props.userPhonNumber}
        </Typography>
        {_priceList(props)}
        <Typography variant="body1"align='center' gutterBottom>
            배달현황: {props.isDeliver || false ? "o" : "x"}&nbsp; 결제현황: {props.isAllPay || false ? "o" : "x"}
        </Typography>
    </Grid>;


    
}

