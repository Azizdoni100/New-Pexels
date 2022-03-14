import React from 'react'
import "./Admin.scss"
import House from "../House/House"
import Slidebar from '../Slidebar/Slidebar'
import { Routes, Route } from "react-router-dom";
import Users from "../Pages/Users/Users"
import Products from "../Pages/Products/Products"

const Admin = () => {
  return (
    <div className='parent-admin'>
      <Slidebar />
      <div className='child-admin'>
        <Routes>
          <Route path="/" element={<House />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin