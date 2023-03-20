import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Search.css'

export function Search() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filterItem, setFilterItem] = useState(data);
  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      const products = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await products.json());
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  console.log(data);
  console.log(filterItem);

  const handleSearch = (e, data) => {
    let filter = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if(e.target.value === ''){
      setFilterItem('')
    }
    else {
      setFilterItem(filter);
    }
  };

  return (
    <>
    <div className="search-container">
    <Form className="d-flex" style={{ marginTop: 10 }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 "
          aria-label="Search"
          onChange={(e) => handleSearch(e, data)}
        />
        <Button onClick={() => navigate("/show")} variant="outline-success">
          Search
        </Button>
      </Form>
      <div className="drop d-flex">
        {filterItem &&
          filterItem.map((product) => (
            <div className="display-5" style={{ width: 280 }} key={product.id}>
              <NavLink
                to={`/products/${product.id}`}
                className="text-dark text-decoration-none"
              >
                <div className="row mt-2 p-2">
                  <div className="col-4 text-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="col ms-4">
                    <h1 className="h6">{product.title.substring(0, 12)}</h1>
                    <p className="lead h6">
                      Rating {product.rating && product.rating.rate}
                      <i className="fa fa-star"></i>
                    </p>
                    <h3 className="h5 fw-bold my-4">${product.price}</h3>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
    </>
  );
}

// export const ShowResult = ({ filterItem }) => {
//   console.log(filterItem);
//   return (
//     <>
//       <div className="drop d-flex">
//         {filterItem &&
//           filterItem.map((product) => (
//             <div className="display-5" style={{ width: 280 }} key={product.id}>
//               <NavLink
//                 to={`/products/${product.id}`}
//                 className="text-dark text-decoration-none"
//               >
//                 <div className="row mt-2 p-2">
//                   <div className="col-4 text-center">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       height="100px"
//                       width="100px"
//                     />
//                   </div>
//                   <div className="col ms-4">
//                     <h1 className="h6">{product.title.substring(0, 12)}</h1>
//                     <p className="lead h6">
//                       Rating {product.rating && product.rating.rate}
//                       <i className="fa fa-star"></i>
//                     </p>
//                     <h3 className="h5 fw-bold my-4">${product.price}</h3>
//                   </div>
//                 </div>
//               </NavLink>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };
