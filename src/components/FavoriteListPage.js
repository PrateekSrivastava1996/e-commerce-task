import React, { useEffect, useState } from 'react';
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
const FavoriteListPage = ({ favorites }) => {
     const [product, setProduct] = useState([])

     useEffect(() => {
          const data = JSON.parse(localStorage.getItem("favorite-items"))
          if (data.length > 0) {
               setProduct(data)
          }
     })
     return (
          <div>
               <h1>Favorite List</h1>
               {product.map(prod => (
                    <MDBContainer fluid className="my-5">
                         <MDBRow className="justify-content-center">
                              <MDBCol md="6">
                                   <MDBCard className="text-black">
                                        <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                                        <MDBCardImage
                                             src={prod?.images[0]}
                                             position="top"
                                             alt={prod?.description}
                                             style={{ height: "200px", width: "200px" }}
                                        />
                                        <MDBCardBody>
                                             <div className="text-center">
                                                  <MDBCardTitle>{prod?.title}</MDBCardTitle>
                                                  <p className="text-muted mb-4">{prod?.description}</p>
                                             </div>
                                             <div>
                                                  <div className="d-flex justify-content-between">
                                                       <span>Brand</span>
                                                       <span>{prod?.brand}</span>
                                                  </div>
                                                  <div className="d-flex justify-content-between">
                                                       <span>Category</span>
                                                       <span>{prod?.category}</span>
                                                  </div>
                                                  <div className="d-flex justify-content-between">
                                                       <span>Price</span>
                                                       <span>₹{prod?.price}</span>
                                                  </div>
                                                  <div className="d-flex justify-content-between">
                                                       <span>Stock</span>
                                                       <span>{prod?.stock} unit</span>
                                                  </div>
                                                  <div className="d-flex justify-content-between">
                                                       <span>Ratings</span>
                                                       <span>{prod?.rating}</span>
                                                  </div>
                                                  <div className="d-flex justify-content-between">
                                                       <span>Discount</span>
                                                       <span>{prod?.discountPercentage}%</span>
                                                  </div>
                                             </div>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                         </MDBRow>
                    </MDBContainer>
               ))}
          </div>
     );
};

export default FavoriteListPage;
