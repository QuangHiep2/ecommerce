import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart, addCart, removeCart } from "../redux/action";

function Cart() {
  const product = useSelector((state) => state.handleCart);
  console.log(product);

  const totalPrice = product.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);
  console.log(totalPrice);

  const dispatch = useDispatch();
  const decrementCart = (product) => {
    dispatch(deleteCart(product));
  };
  const increaseCart = (product) => {
    dispatch(addCart(product));
  };
  const removeCart1 = (product) => {
    dispatch(removeCart(product));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th></th>
                  <th>Image</th>
                  <th>Price</th>
                  <th >Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody className="">
                {product &&
                  product.map((product, index) => {
                    return (
                      <tr key={index} className="text-center">
                        <td>
                          <i
                            className="fa fa-trash"
                            onClick={() => removeCart1(product)}
                          ></i>
                        </td>
                        <td>
                          <img
                            src={product.image}
                            alt={product.title}
                            height="100px"
                            width="80px"
                          />
                        </td>
                        <td>{product.price} $</td>
                        <td>
                            <button className="btn btn-outline-dark me-4"
                            onClick={()=>decrementCart(product)}
                            >
                                <i className="fa fa-minus"></i>
                            </button>
                            <span className="me-4">{product.qty}</span>
                            <button className="btn btn-outline-dark me-4"
                            onClick={()=>increaseCart(product)}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </td>
                        <td>
                            {product.qty * product.price}$
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="d-flex justify-content-end fw-bold">Total Price: {totalPrice} $</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
