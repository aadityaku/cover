import {  Grid, Typography,Card, TextField, Button, Link,Box} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate} from "react-router-dom";
import { useLoginUserMutation } from "../features/Category/Category";
import { getToken, storeToken } from "../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../features/auth/authSlice";
import { useEffect } from "react";

export default function Login(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[loginUser,{isLoading}]=useLoginUserMutation()
    const handleLogin = async (e) => {
        e.preventDefault();
        const data=new FormData(e.currentTarget)
        const actualData={
            username:data.get('username'),
            password:data.get('password'),
        }
        const res = await loginUser(actualData);
        
        if(isLoading){
            return (
                <div className="h2">Isloading</div>
            )
        }
        if(res.data){
            storeToken(res.data);
            let {access_token} = getToken()
            dispatch(setUserToken({access_token:access_token}))
            navigate('/')
        }
    }
    let {access_token} = getToken()
    useEffect(()=> {
        dispatch(setUserToken({access_token:access_token}))
    },[access_token,dispatch])

    return(
        <Container maxWidth="xl" sx={{marginTop:5}}>
            <Grid container sx={{justifyContent:"center",alignItems:"center"}}>
                <Grid item xs={4}>
                    <Card sx={{maxWidth:370}}>
                        <Box component="form" sx={{p:2}} onSubmit={handleLogin}>
                        
                            <Typography sx={{marginTop:1,flexDirection:"row"}} style={{borderBottom:"2px solid grey",borderWidth:2}}><Typography sx={{fontWeight:"500",fontSize:20,marginLeft:3}} >Login Here</Typography></Typography>
                            <Grid container>
                                <Grid item xs={12} sx={{marginTop:3}}>
                                    <TextField fullWidth label="UserName/Email" name="username"></TextField>
                                    
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sx={{marginTop:3}}>
                                    <TextField fullWidth label="Password" name="password"></TextField>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sx={{marginTop:3}}>
                                    <Button fullWidth label="Password" variant="contained" type="submit">Login</Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} sx={{marginTop:3}}>
                                    <Typography> <Link underline="hover" href="#"> Forgat Password ?</Link></Typography>
                                </Grid>
                                <Grid item xs={6} sx={{marginTop:3,justifyContent:"flex-end",alignItems:"flex-end",textAlign:"end"}}>
                                    <Typography> <Link underline="hover" href="/register">Register ? New</Link></Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            
            
        </Container>
    )
}