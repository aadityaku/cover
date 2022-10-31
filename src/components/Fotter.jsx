import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetAllProdutByIdQuery } from "../features/Category/Category";

export default function Fotter(){
    const a = useParams();
    const {data,error,isLoading} = useGetAllProdutByIdQuery(a.slug)
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
                <Button sx={{flexGrow:10}} variant="outlined" color="success">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}