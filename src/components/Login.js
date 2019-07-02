import React,{useState, useContext} from "react";

import { useQuery } from 'react-apollo-hooks';
import {Login_Query} from "../schema/Queries";
import {Typography,Button,Grid,TextField} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import {Store} from "../Store";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  
}));


const Login=()=>{ 
    const [count,setCount]= useState(0);
    const [password,setPassword]= useState("");
    const [challenge,setChallenge]=useState("");
    const [isOpen,setIsOpen]=useState(false);
    const { data, error, loading } = useQuery(Login_Query);
    const [choose,setChoose]= useContext(Store)
    const _compare=()=>{
    if(isOpen) setChoose(1)
    else if(count !=1) return<h3>Login failed</h3>  
    }
    const _passwordTextField=()=>{
        return <div>
          <TextField
              id="standard-password-input"
              label="비밀번호"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              onKeyPress={(e) =>{
              if (e.key === "Enter"&&password==challenge)setIsOpen(true)
              else if(e.key==="Enter"){
                setIsOpen(false);
                setCount(count+1);}}}
              onChange={(e)=>{setChallenge(e.target.value)}}
            />
          </div>    
    }
    const classes = useStyles();
   
    const _loginButton=()=>{
      return <div>
        <Button onClick={(e)=>{
                    if(password == challenge){setIsOpen(true); }
                    else{setIsOpen(false);}
                    setCount(count+1);}}>로그인
          </Button>
      </div>
    }
    if (loading) return <h2>Loading...</h2>;

    if (error) return <div>Error! {error.message}</div>;
    return (
      <React.Fragment>
          {count==0&&(setPassword(data.admins[0].password),setCount(count+1))}   
            {_HeaderText()}
            <Grid container justify="center" alignItems="center" alignContent="center" > 
              {_passwordTextField()}
              {_loginButton()}
              </Grid>
              <Grid container justify="center" alignItems="center" alignContent="center" >        
              {_compare()}
              </Grid > 
        </React.Fragment>
    );
    
};
const _HeaderText=()=>{
  return <div>
  <Typography variant="h2"align ="center" gutterBottom>
  Login
</Typography><br/>
</div>
}




export default Login;





