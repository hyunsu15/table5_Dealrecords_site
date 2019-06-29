import React,{useState} from 'react';


import Login from './components/Login'
import Main from './components/Main'
import {Store,ModifyDealID,varyIsAllPayInfo} from './Store';
import ModifyPayPerson from './components/ModifyPayPerson';


/** 모달작업때문에 지금 논리 위아래바꿈 */
function App() {
 const [choose,setChoose]= useState(0);
  const [DealID,setDealID]= useState("");
  const [varyIsAllPay,setVaryAllPay]= useState("");
  
  return (  
      <Store.Provider value = {[choose,setChoose]}>
        {choose==0&&<Login/>}
        <ModifyDealID.Provider value ={[DealID,setDealID]}>
            <varyIsAllPayInfo.Provider value ={[varyIsAllPay,setVaryAllPay]}>
              {choose==1&&<Main/>}            
            {choose==2 &&<ModifyPayPerson />}
            </varyIsAllPayInfo.Provider>
            
        </ModifyDealID.Provider>
      </Store.Provider>
  );
}

export default App;
         
