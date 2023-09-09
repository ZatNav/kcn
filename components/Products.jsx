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
                    <Link href={`/products/${item.id}`} passHref>
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
      description:
        "Our Power Systems for Telecom are designed to provide reliable and uninterrupted power to your critical telecom infrastructure. From power distribution units to backup generators, we offer a comprehensive range of solutions to keep your network operational at all times.",
    },
    {
      id: 2,
      imageSrc: "product1.png",
      name: "Batteries & backup Power Solutions",
      description:
        "Ensure continuous uptime for your telecom network with our high-performance Batteries and Backup Power Solutions. We provide cutting-edge battery technology and backup systems to keep your operations running smoothly, even during power outages.",
    },
    {
      id: 3,
      imageSrc: "product1.png",
      name: "Data Centre Rack and Cabinets",
      description:
        "Maximize the efficiency and organization of your data center with our Data Centre Rack and Cabinets. Our solutions offer secure and organized storage for your servers and networking equipment.",
    },
    {
      id: 4,
      imageSrc: "product1.png",
      name: "UPS & Inverter System Solutions",
      description:
        "Protect your sensitive telecom equipment from power fluctuations and outages with our UPS and Inverter System Solutions. We offer a range of systems to provide clean and stable power, ensuring the reliability of your network.",
    },
    {
      id: 5,
      imageSrc: "product1.png",
      name: "Fiber Patch Cords",
      description:
        "Our Fiber Patch Cords are the backbone of high-speed data transmission. With a focus on quality and performance, our patch cords enable seamless data connectivity and reliability in your telecom network.",
    },
    {
      id: 6,
      imageSrc: "product1.png",
      name: "OSP and ISP Passive materials",
      description:
        "We provide a wide range of OSP (Outside Plant) and ISP (Inside Plant) Passive Materials to support your telecom infrastructure needs. From cables and connectors to enclosures and splicing tools, we've got you covered.",
    },
    {
      id: 7,
      imageSrc: "product1.png",
      name: "Indoor Building Solutions Components",
      description:
        "Enhance indoor network coverage and capacity with our Indoor Building Solutions Components. Our products include antennas, amplifiers, and other components to ensure seamless connectivity within buildings.",
    },
    {
      id: 8,
      imageSrc: "product1.png",
      name: "RF Antenna & Components",
      description:
        "Our RF Antenna & Components are designed to optimize wireless network performance. Whether you need antennas, connectors, or amplifiers, we offer solutions to enhance signal strength and coverage.",
    },
    {
      id: 9,
      imageSrc: "product1.png",
      name: "AC or DC Power Cable",
      description:
        "We provide high-quality AC/DC Power Cables to efficiently transmit electrical power to your telecom equipment. Our cables are designed for durability and safe power distribution.",
    },
    {
      id: 10,
      imageSrc: "product1.png",
      name: "Solar power Solutions",
      description:
        "Embrace sustainable energy with our Solar Power Solutions. We offer solar panels, inverters, and complete solar energy solutions to reduce your carbon footprint and lower energy costs for your telecom operations.",
    },
    {
      id: 11,
      imageSrc: "product1.png",
      name: "EV charging Stations",
      description:
        "Stay ahead in the transition to electric vehicles with our EV Charging Stations. We offer state-of-the-art charging solutions that support the growing demand for electric mobility, providing convenience for your customers and employees.",
      technical: `Charge Amps Dawn: (Single outlet end consumer or corporate semi-public, 22kW but can be set lower, 1 or 3 phase, Wifi, RFID, 4G LTE-M, ISO 15118 Ready (V2G)) Accessories: Pole mounts for one or two charging stations, Cable with wall holders.
			Charge Amps Aura: (Dual-end consumer or corporate semi-public, 2x22 kW but can be set lower, 1 or 3 phase, Wifi, RFID, LTE, Load balance between sockets) Accessories: Pole mounts for one or two charging stations, Cable with wall holders.
			Charge Amps Halo: (End consumer or corporate, 7.4 kW/11 kW, 1 or 3 phase, Fixed 7.5m cable, Wifi and RFID) Accessories: Pole mount
			Charge Amps Beam: (Flexible cable, Delivers 7.4/13.8/22 kW, European standard, 6 meters long)
			Charge Amps Pole Mount: (pole mount for Charge Amps Hola & Charge Amps Aura)
			Charge Amps Cable Holder: (Enables user to neatly hang cable when not in use)`,
      details:
        "At KCN, we take pride in being a prominent supplier of top-notch products tailored to meet the diverse needs of the telecommunications industry. Our extensive product catalog includes Telecom Network solutions that ensure seamless communication, Power Systems that guarantee uninterrupted operations, and Data Centre products designed for efficient data management. With a commitment to excellence, we specialize in delivering high-quality solutions that empower our clients to thrive in the dynamic world of telecommunications. Explore our range of products, and discover how KCN can elevate your telecom infrastructure to new heights of reliability and performance.",
    },
  ],
};

export default Products;
