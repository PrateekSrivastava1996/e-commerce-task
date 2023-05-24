import React, { useContext } from 'react';
import logoImage from '../assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
     const { cartItemCount } = useContext(CartContext);
     const navigate = useNavigate()

     const handleLogout = () => {
          toast.success("Logged out")
          setTimeout(() => {
               localStorage.clear()
               navigate("/")
          }, 2000);
     }
     return (
          <>
               <ToastContainer />
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                         <a className="navbar-brand" href="/">
                              <img src={logoImage} alt="Logo" style={{ height: "60px", width: "80px" }} />
                         </a>

                         <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarNav"
                              aria-controls="navbarNav"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                         >
                              <span className="navbar-toggler-icon"></span>
                         </button>

                         <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav ms-auto">
                                   <Link className="nav-link" onClick={handleLogout}>
                                        Logout
                                   </Link>
                                   <Link className="nav-link" to="/cart">
                                        <i className="bi bi-cart-fill"></i> Cart
                                        {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
                                   </Link>
                                   <Link className="nav-link" to="/favorites">
                                        <i className="bi bi-heart-fill"></i> Favorites
                                   </Link>
                              </ul>
                         </div>
                    </div>
               </nav>
          </>
     );
};

export default Header;
