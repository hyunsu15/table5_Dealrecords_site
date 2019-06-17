import React from "react";
import DealDelete from "./DealDelete";
import CheckBox from "./CheckBox";
import {Typography,Button,Grid,Table,TableRow,TableHead,TableCell,TableBody,Box} from '@material-ui/core/';
import { makeStyles } from "@material-ui/styles";
import { borderRight } from "@material-ui/system";
import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey';



const useStyles = makeStyles(theme=>({
    Typography:{
        textAlign: "center"
    
    }
    
}));

function Deal(props){
   const classes= useStyles();
    
    return(
        <React.Fragment>
            <Box container ={props.ID} p={2} m={1}style={{backgroundColor:grey[50]}}>
                <Grid container  justify="flex-end"><DealDelete ID={props.ID} /></Grid>
                <Grid container justify ="center">
                    {_textDealList(classes, props)}
                    <CheckBox isDeliver={props.isDeliver} isAllPay={props.isAllPay} ID={props.ID}/>
                </Grid>
            </Box>
     </React.Fragment>
    )

    
}

export default Deal;

function _textDealList(classes, props) {
    
    return <div>
        <Typography variant="body1" className={classes.Typography} gutterBottom>
            기간:{props.createdAt}
        </Typography>
        <Typography variant="body1" className={classes.Typography} gutterBottom>
            주소:{props.address}
        </Typography>
        <Typography variant="body1" className={classes.Typography} gutterBottom>
            구매자:{props.userName}/{props.userPhonNumber}
        </Typography>
        {_priceList()}
        {console.log(props.isAllPay)}
        <Typography variant="body1" className={classes.Typography} gutterBottom>
            
            배달현황: {props.isDeliver || false ? "o" : "x"}&nbsp; 결제현황: {props.isAllPay || false ? "o" : "x"}
        </Typography>
    </div>;


    function _priceList() {
        return<div>
            <Table>
                {_TableBody()}
            </Table>
        </div>;
        function _TableBody(){
            return <div>
                    <TableBody>
                        {createTableRow("제품","수량","가격")}
                        {createTableRow(props.productName,props.productNum,props.productCost)}
                        {createTableRow("청구금액"," ",props.productCost)}
                        {createTableRow("결제자",props.bank=="미정"||"직거래"? props.bank:props.bank+"은행",props.payPerson)}                        
                    </TableBody>
                    </div>

            function createTableRow(par1,par2,par3) {
                return <TableRow>
                    <TableCell align="center">{par1}</TableCell>
                    <TableCell align="center">{par2}</TableCell>
                    <TableCell align="center">{par3}</TableCell>
                </TableRow>;
            }
        }
    }
}

