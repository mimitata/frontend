import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from '../redux/slices/ProductSlice'
import Itemcard from '../Components/Item/Itemcard'

const ShopCategory = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getproducts())
  },[])
  const {products}=useSelector(state=>state.products)
  return (
    <div>{products? products.map(el=><><Itemcard product={el}/></>) : null}</div>
  )
}

export default ShopCategory