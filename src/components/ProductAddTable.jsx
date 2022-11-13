import { Card, CardActionArea, Table, TableBody, TableCell, TableRow,Button,CardActions } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddProductMutation } from '../features/Category/Category'

const ProductAddTable = ({data,access_token}) => {
    const navigate= useNavigate()
    const [cart,{isLoading,error}] = useAddProductMutation()
    const  AddToCart = async (slug) => {
        const res = await cart({slug , access_token})
          
       }
       if(isLoading){
        return(
            <div className="h2">Loadding..</div>
        )
      }
      if(error){
        return (
            <div className="h3">Error...</div>
        )
      }
  return (
   <Card>
        <CardActionArea>
        <Table>
         <TableBody>
             <TableRow>
                 <TableCell>Product name</TableCell>
                 <TableCell>{data.title}</TableCell>
             </TableRow>
             <TableRow>
                 <TableCell>Price</TableCell>
                 <TableCell><del color='red'>{data.price}</del> {data.discount_price}</TableCell>
             </TableRow>
             <TableRow>
                 <TableCell>Company</TableCell>
                 <TableCell>{data.subCategory.cat_id.cat_title}</TableCell>
             </TableRow>
             <TableRow>
                 <TableCell>Model</TableCell>
                 <TableCell>{data.subCategory.sub_title}</TableCell>
             </TableRow>
             <TableRow>
                 <TableCell>product name</TableCell>
                 <TableCell>lether</TableCell>
             </TableRow>
         </TableBody>
     </Table>
        </CardActionArea>
        <CardActions>
                            <Button color="secondary" sx={{flexGrow:10}} variant="outlined" >Buy Now</Button>
                            <Button  sx={{flexGrow:10}} onClick={() => AddToCart(data.slug)} variant="outlined" color="success">Add to Cart</Button>
                        </CardActions>
   </Card>
  )
}

export default ProductAddTable