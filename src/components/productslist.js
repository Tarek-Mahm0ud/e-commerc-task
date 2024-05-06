import { useEffect, useState } from "react";
import Products from "./products";

function ProductsList() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setproducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setproducts(data));
    }

    const getCategories = () => {

        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));

    }

    const getProductsInCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then(res => res.json())
            .then(data => setproducts(data));
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <>
            <h2 className="text-center p-3"> Our Products </h2>
            <div className="container">
                
                <button onClick={() => { getProducts() }} className="btn btn-info"> All </button>

                {
                    categories.map((cat) => {
                        return (<button key={cat} onClick={() => { getProductsInCategory(cat) }} className="btn btn-info"> {cat} </button>);
                    })
                }

                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Products product={product} showButton={true} />
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    );
}



export default ProductsList;
