import React from "react"
import {AppBar,Toolbar,Typography} from '@material-ui/core';


const Header=({name})=>{
               
    return (
     <React.Fragment>   
      <AppBar position="static">
          <Toolbar>
              <Typography variant="h5" gutterBottom>{name}</Typography>
          </Toolbar>
      </AppBar>   
      </React.Fragment>
      
      )
 
}
export default Header;