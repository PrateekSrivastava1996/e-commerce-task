import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
     MDBContainer,
     MDBRow,
     MDBCol,
     MDBCard,
     MDBCardBody,
     MDBCardImage,
     MDBCardTitle,
     MDBIcon,
} from "mdb-react-ui-kit";
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const ProductList = () => {
     const { addToFavorites } = useContext(CartContext);
     const [products, setProducts] = useState([]);

     const navigate = useNavigate()
     useEffect(() => {
          getData()
     }, [])

     const getData = async () => {
          const resp = await axios.get("https://dummyjson.com/products")
          console.log(resp?.data?.products, ":::")
          setProducts(resp?.data?.products)

     }

     const addFavorites = (productId) => {
          const product = products.find(p => p.id === productId);
          if (product) {
               addToFavorites(product)
               toast.success("Added successfully")
          }
     };

     const handleClick = (id) => {
          navigate(`/product/details/${id}`)
     }

    
     return (
          <>
               {products.map(prod => (
                    <>
                         <MDBContainer fluid className="my-5">
                              <MDBRow className="justify-content-center">
                                   <MDBCol md="6">
                                        <MDBCard className="text-black">
                                             <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                                             <MDBCardImage
                                                  src={prod?.images[0]}
                                                  position="top"
                                                  alt="Apple Computer"
                                             />
                                             <MDBCardBody>
                                                  <div className="text-center">
                                                       <MDBCardTitle>{prod?.title}</MDBCardTitle>
                                                       <p className="text-muted mb-4">{prod?.description}</p>
                                                  </div>
                                             </MDBCardBody>
                                        </MDBCard>
                                        <Button onClick={() => handleClick(prod?.id)}>View Details</Button>
                                        <Button onClick={() => addFavorites(prod?.id)} style={{ marginLeft: "10px" }}>Add to Favorites</Button>
                                   </MDBCol>
                              </MDBRow>
                         </MDBContainer>
                    </>
               ))}

               <ToastContainer />
          </>
     )
}

export default ProductList