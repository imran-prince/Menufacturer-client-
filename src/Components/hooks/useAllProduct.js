import React, { useEffect, useState } from 'react';

const useAllProduct = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/product`)
        .then(rs=>rs.json())
        .then(data=>setProducts(data))
    },[])
    return [products,setProducts]
         
};

export default useAllProduct;