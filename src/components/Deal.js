import React,{useContext} from "react";
import DealDelete from "./DealDelete";
import CheckBox from "./CheckBox";
import {Typography,Grid,Table,TableRow,TableCell,TableBody,Box} from '@material-ui/core/';

import grey from '@material-ui/core/colors/grey';
import {varyIsAllPayInfo} from '../Store';





function Deal(props){
    const [varyIsAllPay,setVaryAllPay]= useContext(varyIsAllPayInfo);
    return(
        <React.Fragment>
            <Box container ={props.ID} p={2} m={1}style={{backgroundColor:grey[50]}}>
                <Grid container  justify="flex-end"><DealDelete ID={props.ID} /></Grid>
                <Grid container justify ="center">
                    {_textDealList(props)}
                    {props.isAllPay!=varyIsAllPay&&setVaryAllPay(props.isAllPay)}
                    {props.isAllPay==varyIsAllPay&&<varyIsAllPayInfo.Provider value ={[varyIsAllPay,setVaryAllPay]}>               
                    <CheckBox isDeliver={props.isDeliver} ID={props.ID}/>            
                    </varyIsAllPayInfo.Provider>
                    }
                </Grid>
            </Box>
     </React.Fragment>
    )    
}

export default Deal;

const _textDealList=(props)=>{
    const createTableRow=(par1,par2,par3)=> {
        return <TableRow>
            <TableCell align="center">{par1}</TableCell>
            <TableCell align="center">{par2}</TableCell>
            <TableCell align="center">{par3}</TableCell>
        </TableRow>;
    }
    const _TableBody=()=>{
        return<TableBody>
                    {createTableRow("제품","수량","가격")}
                    {createTableRow(props.productName,props.productNum,props.productCost)}
                    {createTableRow("청구금액"," ",props.productCost)}                        
                    {createTableRow("결제자",props.bank=="미정"||props.bank=="직거래"? props.bank:props.bank+"은행",props.payPerson)}                        
                </TableBody>
    }
    

    const _priceList=()=> {
        return<Table>
                {_TableBody()}
            </Table>        
    }
    

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
        {_priceList()}
        <Typography variant="body1"align='center' gutterBottom>
            배달현황: {props.isDeliver || false ? "o" : "x"}&nbsp; 결제현황: {props.isAllPay || false ? "o" : "x"}
        </Typography>
    </Grid>;


    
}

