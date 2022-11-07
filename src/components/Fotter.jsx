import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import {  useAddProductQuery, useGetAllProdutByIdQuery } from "../features/Category/Category";
import { getToken} from "../services/LocalStorageService";
export default function Fotter(){
    const a = useParams();
    const {data,error,isLoading} = useGetAllProdutByIdQuery(a.slug);
    // const cart = useAddProductQuery(a.slug);
    const navigate= useNavigate()
    
    // console.log(typeof(useAddProductQuery(a.slug)));
   
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
    const {access_token} = getToken()
    
    
    const  AddToCart =  (slug) => {
        const addToCart = useAddProductQuery({slug , access_token})
        //  const res= await addToCart({slug,access_token})
        //  if(res.error){
        //     navigate('/')
        //  }
        //  if(res.data){
        //     navigate('/cart')
        //  }
        
    }
   
    const image = "http://127.0.0.1:8000" + data.image
    return (
        <Card sx={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia component="img" height="170" image={image}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">{data.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{data.price}/-</Typography>
                </CardContent>
               
            </CardActionArea>
            <CardActions>
                <Button color="secondary" sx={{flexGrow:10}} variant="outlined" >Buy Now</Button>
                <Button  sx={{flexGrow:10}} onClick={() => AddToCart(a.slug)} variant="outlined" color="success">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}