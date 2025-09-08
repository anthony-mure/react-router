// https://fakestoreapi.com/products/:id

import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() =>{
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((resp) =>{
      setProduct(resp.data)
    });
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Dettaglio Prodotto</h1>
        </div>
          <div className="col-3" key={product.id}>
            <div className="card h-100">
              <img className="object-fit-cover" src={product.image} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.category}</p>
                <p className="card-text"><strong>{product.price} €</strong></p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default DetailProduct
