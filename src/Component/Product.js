import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const product = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await product.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
      <div className="row">
      <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300}/>
          <Skeleton height={75}/>
          <Skeleton height={25} width={150}/>
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100}/>

        </div>
      </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container " key={product.id}>
          <div className="row py-4">
            <div className="col text-center">
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col p-4">
              <h4 className="text-uppercase text-black-50">
                Category: {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button 
                className="btn btn-primary bt-outline-primary px-4 py-2"
                  onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container py-5">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </>
  );
}

export default Product;
