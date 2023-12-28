import React from 'react'
import './Item.css'

const Itemcard = ({product}) => {
  return (
    <div className='item'>
        <img src={product.poster} alt="" />
        <p>{product.name}</p>
        <div className="item-prices">
          <div className="item-price-new">  
            {product.price}
          </div>
          <div className="item-price-old">
          {product.description}   
          </div>
        </div>

    </div>
  )
}

export default Itemcard