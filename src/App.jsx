import { useState, useEffect } from 'react'
import './App.css'

function App() {
        const [fetchedData, setFetchedData]=useState([

{availabilityStatus: "In Stock",
brand: "Essence",
category: "beauty",
description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
dimensions: {width: 15.14, height: 13.08, depth: 22.99},
discountPercentage: 10.48,
id: 1,
images: ['https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp'],
meta: {createdAt: '2025-10-09T14:47:01.588Z', updatedAt: '2026-05-23T11:27:41.868Z', barcode: '5784719087687', qrCode: 'https://cdn.dummyjson.com/public/qr-code.png'},
minimumOrderQuantity: 48,
price: 9.99,
rating: 2.56,
returnPolicy: "No return policy",
reviews: [],
shippingInformation: "Ships in 3-5 business days",
sku: "BEA-ESS-ESS-001",
stock: 99,
tags:  ['beauty', 'mascara'],
thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
title: "Essence Mascara Lash Princess",
warrantyInformation: "1 week warranty",
weight: 4
}
        ]);

        useEffect(() => {
          async function fetchData()
          {
            let response = await fetch("https://dummyjson.com/products");
            let data    = await response.json();

            console.log(data.products);
            try {
              if(data)
              {
                setFetchedData(data.products);
              }
            }
            catch(err)
            {
              console.log(err);
            }
            
          }
           
           fetchData(); 

        }, [])


  return (
    <>
       <div>
        <nav className="navigation">
          <div className="nav-left">
            <div>Home</div>
            <div>About Us</div>
            <div>Products</div>
            <div>Contact Us</div>
            
          </div>
          <div className="nav-right">
              <button>Log In</button>
          </div>
        </nav>
        <div className="product-list">
          <h2>Products</h2>
          <div className="product-cards">
            {
              fetchedData.map((product) => {
                return (
                  <div key={product.id} className='card'>
                      <div className='prdt-title'>{product.title}</div>
                      <div><img src={`${product.images[0]}`} height="120rem" width="120rem"/></div>
                      <div style={{fontSize:"10px",lineHeight:"14px"}}>{product.description}</div>
                      <div>Price: <span className='prdt-title'>${product.price}</span></div>
                      <div><button className="cart-btn">Add to Cart</button></div>
                  </div>
              )
              })
            }
          </div>

          <div>

          </div>
        </div>
       </div>
      
    </>
  )
}

export default App
