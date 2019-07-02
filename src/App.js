import React,{useState, useContext} from 'react';


import Login from './components/Login'
import Main from './components/Main'
import {Store,ModifyDealID,v1Info} from './Store';
import ModifyPayPerson from './components/ModifyPayPerson';


/** 모달작업때문에 지금 논리 위아래바꿈 */
function App() {
 const [choose,setChoose]= useState(1);
  const [DealID,setDealID]= useState("");
  const [originV1,setOriginV1]=useState("");
  
  return (  
      <Store.Provider value = {[choose,setChoose]}>
        {choose==0&&<Login/>}
        <ModifyDealID.Provider value ={[DealID,setDealID]}>
          <v1Info.Provider value ={[originV1,setOriginV1]}>                
                {choose==1&&<Main/>}            
                {choose==2 &&<ModifyPayPerson />}
          </v1Info.Provider>
        </ModifyDealID.Provider>
      </Store.Provider>
  );
}

export default App;
         

 