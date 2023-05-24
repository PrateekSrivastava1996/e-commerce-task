import React, { useContext, useEffect, useState } from 'react'
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
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';

const DetailPage = () => {
     const { addToCart, addToFavorites } = useContext(CartContext);
     const { id } = useParams();
     const [product, setProduct] = useState(null);
     const [quantity, setQuantity] = useState(1);
     const [addedCart, setAddedCart] = useState(false)

     // const handleAddToCart = (prd) => {
     //      let data = JSON.stringify(prd)
     //      addToCart(data);
     // };

     const getData = async (id) => {
          const resp = await axios.get(`https://dummyjson.com/products/${id}`)
          console.log(resp)
          setProduct(resp?.data)
     }

     const addFavorites = (product) => {
          toast.success("Added successfully")
          addToFavorites(product)
     };

     const handleIncrement = () => {
          setQuantity(prevQuantity => prevQuantity + 1);
     };

     const handleDecrement = () => {
          if (quantity > 1) {
               setQuantity(prevQuantity => prevQuantity - 1);
          }
     };

     useEffect(() => {
          getData(id)
     }, [id]);

     useEffect(() => {
          let cart = JSON.parse(localStorage.getItem("cart-items"))
          if (cart?.length > 0) {
               const data = cart?.find(item => item.id === id)
               console.log(data, ":::data")

               if (data) {
                    setAddedCart(true)
               }
          }
     }, [])
     return (
          <>
               <ToastContainer />
               <MDBContainer fluid className="my-5">
                    <MDBRow className="justify-content-center">
                         <MDBCol md="6">
                              <MDBCard className="text-black">
                                   <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                                   <MDBCardImage
                                        src={product?.images[0]}
                                        position="top"
                                        alt={product?.description}
                                   />
                                   <MDBCardBody>
                                        <div className="text-center">
                                             <MDBCardTitle>{product?.title}</MDBCardTitle>
                                             <p className="text-muted mb-4">{product?.description}</p>
                                        </div>
                                        <div>
                                             <div className="d-flex justify-content-between">
                                                  <span>Brand</span>
                                                  <span>{product?.brand}</span>
                                             </div>
                                             <div className="d-flex justify-content-between">
                                                  <span>Category</span>
                                                  <span>{product?.category}</span>
                                             </div>
                                             <div className="d-flex justify-content-between">
                                                  <span>Price</span>
                                                  <span>₹{product?.price}</span>
                                             </div>
                                             <div className="d-flex justify-content-between">
                                                  <span>Stock</span>
                                                  <span>{product?.stock} unit</span>
                                             </div>
                                             <div className="d-flex justify-content-between">
                                                  <span>Ratings</span>
                                                  <span>{product?.rating}</span>
                                             </div>
                                             <div className="d-flex justify-content-between">
                                                  <span>Discount</span>
                                                  <span>{product?.discountPercentage}%</span>
                                             </div>
                                        </div>
                                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                             <Button onClick={() => addFavorites(product)}>Add to Favorites</Button>
                                             <Button onClick={handleDecrement}>-</Button>
                                             <span>{quantity}</span>
                                             <Button onClick={handleIncrement}>+</Button>
                                        </div>
                                        {/* <Button onClick={() => handleAddToCart(product)} style={{ marginTop: "10px" }}>{addedCart ? "Added to Cart" : "Add to Cart"}</Button> */}
                                   </MDBCardBody>
                              </MDBCard>
                         </MDBCol>
                    </MDBRow>
               </MDBContainer>
          </>
     )
}

export default DetailPage