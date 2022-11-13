import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect,useState } from "react";


import { useNavigate, useParams } from "react-router-dom";
import {  useAddProductQuery, useGetAllProdutByIdQuery } from "../features/Category/Category";
import { getToken} from "../services/LocalStorageService";
import ProductAddTable from "./ProductAddTable";
export default function Fotter(){
    const a = useParams();
    const {data,error,isLoading} = useGetAllProdutByIdQuery(a.slug);
    const[counter,setCounter] = useState(0)
   
    
    const {access_token} = getToken()
   const arr =[]
   
    if(isLoading){
        return(
            <div className="h2">Loading...</div>
        )
    }
    if(error){
        return(
            <div className="h2">Error...</div>
        )
    }
   
    const image = "http://127.0.0.1:8000" + data.image 
    if(data.image1 !== "" || data.image2 !== "" || data.image3 !=="" || data.image4 !==" "){
       arr.push(image)
       arr.push("http://127.0.0.1:8000" + data.image1)
       arr.push("http://127.0.0.1:8000" + data.image2)
       arr.push("http://127.0.0.1:8000" + data.image3)
       arr.push("http://127.0.0.1:8000" + data.image4)
    }
    
    // useEffect(() => {
    //     const internalData = setInterval(() => {
    //             (counter == 5) ? setCounter(0) : setCounter(counter + 1)
    //         },2000)
    //         return () => clearInterval(internalData)
    // },[counter])
    
    return (
        <Container>
            <Grid container sx={{mt:5}}>
                <Grid item={4}>
                <Card sx={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia component="img" height="170" image={image}/>
            
            </CardActionArea>
            
        </Card>
                </Grid>
                <Grid item={6} style={{alignItems:"center"}}>
                
                        <ProductAddTable data={data} access_token={access_token} />
                            
                        
                </Grid>
            </Grid>
        </Container>
    )
}