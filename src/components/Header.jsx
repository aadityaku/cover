import {AppBar, Button, Toolbar, Typography} from "@mui/material"

import { Link} from "react-router-dom"
import { useGetAllCategoryQuery } from "../features/Category/Category";
export default function Header(){
    
    const { data, error, isLoading }  = useGetAllCategoryQuery()
    // console.log(data)
    if(isLoading) {
        return (
            <div className="h2">Loading..</div>
        )
    }
    if(error) {
        return (
            <div className="h2">Error..</div>
        )
    }
    return(
        <>
        <AppBar position="static" sx={{}}>
           <Toolbar>
               <Typography variant="h3"component="h3" to="/" sx={{marginLeft:20,flexGrow:1,fontSize:24}} style={{cursor:"pointer"}}>
                   Ecomerce 
               </Typography>
            
               
                
                <Button title="Login" variant="inherit"  sx={{fontSize:16}} component={Link} to="/">Home</Button>
                <Button title="Login" variant="inherit"  sx={{fontSize:16}} component={Link} to="/login">Login</Button>
            
                <Button title="Cart" variant="inherit" sx={{fontSize:16}} component={Link} to="/cart">Cart</Button>

                <Button title="Myorder" variant="inherit" sx={{fontSize:16}}>MyOrder</Button>
                <Button title="Profile" variant="inherit" sx={{fontSize:16}} component={Link} to="/checkout">Profile</Button>
               
            </Toolbar>
        </AppBar>
        <AppBar position="sticky" sx={{backgroundColor:"#ddd",padding:0,height:40,justifyContent:"center",alignItems:"center"}}>
           <Toolbar >
               
                {
                    data?.map((item,key) => (
                        <Button   sx={{padding:0,marginRight:3}} color="primary" key={key}>{item.cat_title}</Button>
                    ))
                }

            </Toolbar>
        </AppBar>
        </>
    )
}