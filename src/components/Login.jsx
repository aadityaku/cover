import { CardContent, Grid, Typography,Card, TextField, Button, Link} from "@mui/material";
import { Container } from "@mui/system";


export default function Login(){
    return(
        <Container maxWidth="xl" sx={{marginTop:5}}>
            <Grid container sx={{justifyContent:"center",alignItems:"center"}}>
                <Grid item xs={4}>
                    <Card sx={{maxWidth:370}}>
                        <CardContent>
                        
                            <Typography sx={{marginTop:1,flexDirection:"row"}} style={{borderBottom:"2px solid grey",borderWidth:2}}><Typography sx={{fontWeight:"500",fontSize:20,marginLeft:3}} >Login Here</Typography></Typography>
                            <Grid container>
                                <Grid item xs={12} sx={{marginTop:3}}>
                                    <TextField fullWidth label="UserName/Email"></TextField>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sx={{marginTop:3}}>
                                    <TextField fullWidth label="Password"></TextField>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sx={{marginTop:3}}>
                                    <Button fullWidth label="Password" variant="contained">Login</Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} sx={{marginTop:3}}>
                                    <Typography> <Link underline="hover" href="#"> Forgat Password ?</Link></Typography>
                                </Grid>
                                <Grid item xs={6} sx={{marginTop:3,justifyContent:"flex-end",alignItems:"flex-end",textAlign:"end"}}>
                                    <Typography> <Link underline="hover" href="#">Register ? New</Link></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
            
        </Container>
    )
}