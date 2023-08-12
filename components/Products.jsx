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
				<h2>Our Latest Innovations</h2>
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
										<Link href={`/products/${item.name}`} passHref>
											{/* <a style={{ textDecoration: "none", color: "inherit" }}> */}
											{item.name}
											{/* </a> */}
										</Link>
										{/* <a href={`/products/${item.id}`} className="card-link">
											View Details
										</a> */}
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
			name: "Power Systems for Telecom",
		},
		{
			id: 2,
			imageSrc: "product1.png",
			name: "Batteries & backup Power Solutions",
		},
		{
			id: 3,
			imageSrc: "product1.png",
			name: "Data Centre Rack and Cabinets",
		},
		{
			id: 4,
			imageSrc: "product1.png",
			name: "UPS & Inverter System Solutions",
		},
		{
			id: 5,
			imageSrc: "product1.png",
			name: "Fiber Patch Cords",
		},
		{
			id: 6,
			imageSrc: "product1.png",
			name: "OSP and ISP Passive materials",
		},
		{
			id: 7,
			imageSrc: "product1.png",
			name: "Indoor Building Solutions Components",
		},
		{
			id: 8,
			imageSrc: "product1.png",
			name: "RF Antenna & Components",
		},
		{
			id: 9,
			imageSrc: "product1.png",
			name: "AC or DC Power Cable",
		},
		{
			id: 10,
			imageSrc: "product1.png",
			name: "Solar power Solutions",
		},
		{
			id: 11,
			imageSrc: "product1.png",
			name: "EV charging Stations",
		},
	],
};

export default Products;
