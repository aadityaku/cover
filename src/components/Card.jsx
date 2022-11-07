import { Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import { Navigate,useNavigate } from "react-router-dom";

import { useGetAllProductQuery } from "../features/Category/Category";
import CardList from "./CardList";

export default function Card(){
    
    const navigate = useNavigate()

    const { data , error , isLoading} = useGetAllProductQuery()
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
    console.log(data);
    return (
        <Container maxWidth="xl" sx={{marginTop:4}}>
            <Grid container spacing={3}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={2}>
                    {
                    data?.map((key,value)=>(
                        <Grid item xs={3} key={value} style={{}} onClick={() => navigate(`/product/${key.slug}`)}>
                            <CardList title={key.title} category={key.subCategory} image={key.image} price={key.price}/> 
                        </Grid>
                    ))
                }
                    </Grid>
                </Grid>
               
                

               
            </Grid>
        </Container>
    )
}