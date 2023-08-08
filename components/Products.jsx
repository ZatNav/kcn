import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";

function Products({ items }) {
  function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  return (
    <section style={{ padding: "50px 0", textAlign: "-webkit-center" }}>
      <Container>
        {chunkArray(items, 3).map((rowItems, rowIndex) => (
          <Row key={rowIndex}>
            {rowItems.map((item, colIndex) => (
              <Col key={colIndex}>
                <div
                  className="card"
                  style={{ width: "18rem", margin: "30px 0" }}
                >
                  <img
                    src={item.imageSrc}
                    className="card-img-top"
                    alt={item.name}
                  />

                  <div className="card-body">
                    <Link href={`/products/${item.id}`} passHref>
                      {/* <a style={{ textDecoration: "none", color: "inherit" }}> */}
                      {item.name}
                      {/* </a> */}
                    </Link>
                    <a href={`/products/${item.id}`} className="card-link">
                      View Details
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </section>
  );
}

Products.defaultProps = {
  items: [
    {
      id: 1,
      imageSrc: "product1.png",
      name: "Item 1",
    },
    {
      id: 2,
      imageSrc: "product1.png",
      name: "Item 2",
    },
    {
      id: 3,
      imageSrc: "product1.png",
      name: "Item 3",
    },
    {
      id: 4,
      imageSrc: "product1.png",
      name: "Item 4",
    },
    {
      id: 5,
      imageSrc: "product1.png",
      name: "Item 5",
    },
    {
      id: 6,
      imageSrc: "product1.png",
      name: "Item 6",
    },
  ],
};

export default Products;
