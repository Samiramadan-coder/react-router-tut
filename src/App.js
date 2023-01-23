import React from 'react';

import {Routes, Route} from 'react-router-dom';
// import About from './componenets/About';
import Admin from './componenets/Admin';
import { AuthProvider } from './componenets/Auth';
import FeaturedProducts from './componenets/FeaturedProducts';
import Home from './componenets/Home';
import Login from './componenets/Login';
import Navbar from './componenets/Navbar';
import NewProducts from './componenets/NewProducts';
import NoMatch from './componenets/NoMatch';
import OrderSummary from './componenets/OrderSummary';
import Products from './componenets/Products';
import Profile from './componenets/Profile';
import RequireAuth from './componenets/RequireAuth';
import UserDetails from './componenets/UserDetails';
import Users from './componenets/Users';

const LazyAbout = React.lazy(() => import('./componenets/About'));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={
        <React.Suspense fallback="Loading...">
          <LazyAbout />
        </React.Suspense>} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='/products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='/users' element={<Users />}>
          <Route path=':id' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
