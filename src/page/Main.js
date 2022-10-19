import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductImage from "../component/ProductImage";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  const [productList, setProductList] = useState([]);
  const getProductList = async () => {
    let url = `http://localhost:5000/products/`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <Container>
      <Row>
        {productList.map((item, i) => (
          <Col lg={3} width={100}>
            <ProductImage item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
