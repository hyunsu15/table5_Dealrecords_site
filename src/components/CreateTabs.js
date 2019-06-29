import React, { useContext } from "react"
import {Tabs,Tab} from '@material-ui/core/';



const CreateTabs=({array,fx})=>{
    const handleChange=(event, newValue) =>{
        setChoose(newValue);
    }   
    const [choose,setChoose]= useContext(fx);
    
    return<Tabs
            value={choose}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            >
            {array.map((ele,index)=>(<Tab key={index} label= {""+ele}/>))}


        </Tabs>
          
  }

  export default CreateTabs;