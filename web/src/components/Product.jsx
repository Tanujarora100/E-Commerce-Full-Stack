import React from 'react'

const Product = ({ title, description, price, rating, category, thumbnail }) => {
    return (
        <div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <img src={thumbnail} alt={title} />
            </div>
            <div>
                <p>{price}</p>
            </div>
            <button>
                selected ?
                <p>Remove Item</p>: <p>Add To Cart</p>
            </button>
        </div>
    )
}

export default Product
