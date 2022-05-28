import React, { useEffect, useState } from 'react';

const useAllProduct = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`https://guarded-inlet-86447.herokuapp.com/product`)
        .then(rs=>rs.json())
        .then(data=>setProducts(data))
    },[])
    return [products,setProducts]
         
};

export default useAllProduct;