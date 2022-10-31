import { CardContent, Grid, Typography,Card, TextField, Link, Autocomplete} from "@mui/material";
import { Container } from "@mui/system";

const gender=[
    {label:"Male"},
    {label:"FeMale"},
    {label:"Others"},

]

export default function  CheckOut(){
    return (
        <Container maxWidth="xl" sx={{marginTop:5}}>
        <Grid container sx={{justifyContent:"center",alignItems:"center"}} spacing={3}>
            
            <Grid item xs={9}>
                <Card fullWidth>
                    <CardContent>
                    
                        <Typography sx={{marginTop:1,flexDirection:"row"}} style={{borderBottom:"2px solid grey",borderWidth:2}}><Typography sx={{fontWeight:"500",fontSize:20,marginLeft:3}} >Add New Addess</Typography></Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={6} sx={{marginTop:3}}>
                                <TextField fullWidth label="Name"></TextField>
                            </Grid>
                        
                        
                            <Grid item xs={6} sx={{marginTop:3}}>
                                <TextField fullWidth label="Email"></TextField>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={6} sx={{marginTop:3}}>
                               <Autocomplete fullWidth  options={gender} renderInput={(params)=><TextField {...params} label="Gender" />}></Autocomplete>
                            </Grid>
                            <Grid item xs={6} sx={{marginTop:3}}>
                               <Autocomplete fullWidth renderInput={(params)=><TextField {...params} label="Gender" />}></Autocomplete>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={6} sx={{marginTop:3}}>
                               
                            </Grid>
                            <Grid item xs={6} sx={{marginTop:3,justifyContent:"flex-end",alignItems:"flex-end",textAlign:"end"}}>
                            
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                
            </Grid>
        </Grid>
        
        
    </Container>
    )
}
