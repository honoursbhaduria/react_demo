import React from 'react'

const ProductInfo = () => {
    const  hello   = "hello my name is honours  and i am learning python  and react  "; 
    const date = new Date()



    // working with dict in react @@ honours bhadauria 
    const product = {
        name : "laptop" ,
        price : "45000",
        company :  "acer",
        availability : "In stock ",
        

    }
    const numbers = [1,2,3,4,56,3,2,1,3,543,23,4,2342,342,34]
  return (
   <div>
        <h1>{hello}</h1>
        <h2>{Date}</h2>
        <h3>{product.name}</h3>



       

    </div>
  )
}

export default ProductInfo