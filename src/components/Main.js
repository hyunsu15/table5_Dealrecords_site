import React,{useState} from "react";
import Deal from "./Deal";
import {Query} from "react-apollo";
import {isDeliverList} from "../schema/Queries";
import {isAllPayList} from "../schema/Queries";
import {notBothList} from "../schema/Queries";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {AppBar,Toolbar,Typography,Card,Tabs,GridList,GridListTile,Paper} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme=>({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justify: 'center',
        
      }
  }));


function Main(){
    const [records,setRecord]= useState(null);
    const [isEmpty,setEmpty]=useState(false);
    const [choose,setChoose]=useState(0);
    const classes= useStyles();
    const _isDeliver_Query=()=>{  
        return <Query query= {isDeliverList}> 
        {
               ({loading,data,error})=> 
               {   
                   if(loading) return <h2>Loading</h2>
                   if(error) return  <h2>error, retry again</h2>
                   if(data)  {
                        if(data.deals.length==0){     
                            setEmpty(true);
                        }
                        else{
                            setEmpty(false);  
                        }
                        setRecord(data.deals);
                        return <br/>
                    }                   
               }
        }</Query>

    }
    const _isAllPay_Query=()=>{
        return <Query query= {isAllPayList}> 
            {
                   ({loading,data,error})=> 
                   {   
                       if(loading) return <h2>Loading</h2>
                       if(error) return  <h2>error, retry again</h2>
                       if(data)  {
                            if(data.deals.length==0){
                                
                                setEmpty(true);
                            }
                            else{
                                setEmpty(false);     
                            }
                        console.log(data.deals);
                        setRecord(data.deals);
                        return <br/>
                       }                   
                   }
            }</Query>
    }
    const _notBoth_Query=()=>{
        return <Query query= {notBothList}> 
        {
            ({loading,data,error})=> 
                   {   
                       if(loading) return <h2>Loading</h2>
                       if(error) return  <h2>error, retry again</h2>
                       if(data)  {
                        console.log(data.notBoth_list);
                        if(data.deals.length==0){
                        setEmpty(true);
                        }
                        else{
                            setEmpty(false);    
                            console.log(isEmpty);    
                        }

                       setRecord(data.deals);
                       return <br/>
                    }
                }
        }</Query>
    }
    const _checkState=()=>{
        if(isEmpty)return <h2>없음</h2>;
        if(records!=null){
            return <GridList  cellHeight=""  cols={2}>
        
                {
                    records.map(record=>{
                    return _CreateDeal(record)
                    })
                }
        
                
        </GridList>  
        
        }
    
    }

    const _controller=()=>{
      
        if(choose==3){ 
            window.open("https://db-layer-de1a8af52f.herokuapp.com/data-layer/dev/_admin",'_blank')
        }
        if(choose==0)return _isDeliver_Query();
        if(choose==1)return _isAllPay_Query();
        if(choose==2)return _notBoth_Query();
        
    }
    const _Header=()=>{
        function handleChange(event, newValue) {
            setChoose(newValue);
          }
          function _Tabs(){
            return<div>
                <Tabs
                    value={choose}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    >
                    <Tab label="미배달"/>
                    <Tab label="미결제"/>
                    <Tab label="완료"/>
                    <Tab label="추가"/>
                </Tabs>
            </div>       
          }     
          return (
           <React.Fragment>   
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" gutterBottom>맞춤거래기록부</Typography>
                </Toolbar>
            </AppBar>
                {_Tabs()}
            </React.Fragment>
            
            )
       
    }
    
    return(    
        <React.Fragment>
        {_Header()}
        {_controller()}
        {_checkState()}
        </React.Fragment>
        );
    
    

    function _CreateDeal(record) {
        return <Deal key={record.ID} ID={record.ID} createdAt={record.createdAt} address={record.address} userName={record.user.userName} userPhonNumber={record.user.userPhonNumber} payPerson={record.payPerson.payPerson} productName={record.product.productName} productNum={record.productNum} productCost={record.productCost} isAllPay={record.payPerson.isAllPay} isDeliver={record.isDeliver} bank={record.payPerson.bank} />;
    }
}








export default Main;