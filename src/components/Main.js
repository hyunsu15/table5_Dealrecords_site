import React,{useState,useEffect} from "react";
import Deal from "./Deal";
import {notBothList,isAllPayList,isDeliverList} from "../schema/Queries";
import {GridList} from '@material-ui/core';
import {MainTabStore} from "../Store";
import Header from "./Header";
import CreateTabs from "./CreateTabs";
import { Query } from 'react-apollo';


    const _connectDbAdmin=(choose)=>{
        if(choose==3)window.open("https://db-layer-de1a8af52f.herokuapp.com/data-layer/dev/_admin",'_blank')
    }

  

const Main=()=>{
    const [choose,setChoose]=useState(0);
    
    const _PaperQuery=(Query_name)=>{
       return <Query query= {Query_name}  pollInterval={100}> 
        {
            ({loading,error,data})=> 
                   {   
                        
                        if(loading) return <h2>Loading..</h2>
                       if(error) return  <h2>에러</h2>
                       if(data.deals.length==0) return <h2>없음</h2>
                       return<GridList>
                               {
                                   data.deals.map((record)=>(
                                       <Deal key={record.ID} ID={record.ID} createdAt={record.createdAt} address={record.address} userName={record.user.userName} userPhonNumber={record.user.userPhonNumber} payPerson={record.payPerson.payPerson} productName={record.product.productName} productNum={record.productNum} productCost={record.productCost} isAllPay={record.payPerson.isAllPay} isDeliver={record.isDeliver} bank={record.payPerson.bank} />
                                   ))
                               }
                           </GridList>
                       
                    }
        }</Query>
    }
        
        
        
   

    return(    
        <React.Fragment>
            <Header name={"맞춤거래기록부"}/>
            <MainTabStore.Provider  value ={[choose,setChoose] }>
                <CreateTabs array={["미배달","미결제","완료","추가"]} fx={MainTabStore}/>
            </MainTabStore.Provider >
        
            {_connectDbAdmin(choose)}
            {choose==0&& _PaperQuery(isDeliverList)}
            {choose==1&& _PaperQuery(isAllPayList)}
            {choose==2&& _PaperQuery(notBothList)}     
        </React.Fragment>
        );
    
    
}

export default Main;


