import React from 'react';
import LoginForm from './components/LoginForm';
import PrivateRoute from './HOC/PrivateRoute'
import ProtectedRoute from './HOC/ProtectedRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/productList';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from './components/detail';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import Header from './components/Header';
import FavoriteListPage from './components/FavoriteListPage';
import CartPage from './components/CartPage';

const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
          <Header />
          <Routes>

            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <LoginForm />
                </ProtectedRoute>
              }
              exact
            />

            <Route
              path='/product/list'
              element={
                <PrivateRoute>
                  <ProductList />
                </PrivateRoute>
              }
              exact
            />

            <Route
              path='/product/details/:id'
              element={
                <PrivateRoute>
                  <DetailPage />
                </PrivateRoute>
              }
              exact
            />

            <Route
              path='/favorites'
              element={
                <PrivateRoute>
                  <FavoriteListPage />
                </PrivateRoute>
              }
              exact
            />

            <Route
              path='/cart'
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
              exact
            />

            <Route
              path='*'
              element={<h2 style={{ display: "flex", justifyContent: "center" }}>Page Not Found</h2>}
              exact
            />

          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </>
  )
};

export default App;
