import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardList(props){
    const image = "https://ecom-aaditya.herokuapp.com" + props.image
    return (
        <Card sx={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia component="img" height="170" image={image}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">{props.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{props.price}/-</Typography>
                </CardContent>
               
            </CardActionArea>
            <CardActions>
                <Button color="secondary" sx={{flexGrow:10}} variant="outlined">Buy Now</Button>
                <Button sx={{flexGrow:10}} variant="outlined" color="success">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}