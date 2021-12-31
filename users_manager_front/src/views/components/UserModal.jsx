import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function UserModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add a new User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" />
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" />
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" />
							<Form.Label>Location</Form.Label>
							<Form.Control type="text" />
							<Form.Label>Permission</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" variant="warning" onClick={handleClose}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default UserModal;