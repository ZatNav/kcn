import React from "react";
import { Button, Form } from "react-bootstrap";

function ContactForm() {
	return (
		<Form style={{ color: "white" }}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button
				variant="primary"
				type="submit"
				style={{ backgroundColor: "white", color: "#2f455c", border: "none" }}
			>
				Submit
			</Button>
		</Form>
	);
}

export default ContactForm;
