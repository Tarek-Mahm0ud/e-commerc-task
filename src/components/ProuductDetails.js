import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./products";


function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product));
    }, []);
    return (
        <Products product={product} showButton={false} />
    );
}


export default ProductDetails;