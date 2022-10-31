import {  CardContent, Grid, Typography,Card } from "@mui/material";
import { Container } from "@mui/system";
//import Card from "./Card";

export default function Cart(){
    return (
        <Container maxWidth="xl" sx={{marginTop:3}}>
            <Container>
                <Grid Container xs={12} spacing={3}>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Card sx={{minWidth:345}}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h5">This is myCart</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                   
                    </Grid>
                    <Grid item xs={9}>

                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}