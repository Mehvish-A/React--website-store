import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container, Table} from "reactstrap";
import{Button} from "reactstrap";
import { Cart}  from "../Slice/cart";
import { useNavigate, useParams } from "react-router-dom";
import { BestSellingData, NewArrivalData } from "../Data";
 export default function Index() {
  
 const {productId} = useParams();
 console. log ("productId",productId,tabIndex);
useEffect(()=>{
  if( tabIndex ===1){
    let data =[];
   data= NewArrivalData.find
  } 
  else{
   data =  BestSellingData.find
  }
  console.log (data);
  const product = data.find((item) => item.id === productId);
  console.log ("product===", product);
},[productId,tabIndex]);





  return ( 
      
        <Container fluid>Product Details Page
        
      ,<p>  {selectedProduct.description}</p>{""}
        
        
        </Container>

                ) ;
}
