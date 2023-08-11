import React from "react";
import { Container } from "react-bootstrap";

const Map = () => {
	return (
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.013153802077!2d55.36742347609007!3d25.236481930107068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dfa1ba5abaf%3A0x8872b0a542b6121b!2sUmme%20ramol%20warehouse!5e0!3m2!1sen!2s!4v1691134986231!5m2!1sen!2s"
			width="100%"
			height="450"
			style={{ border: 0 }}
			loading="lazy"
		/>
	);
};

export default Map;
