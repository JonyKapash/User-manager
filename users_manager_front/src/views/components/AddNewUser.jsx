import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Axios from "axios";

function AddNewUser() {
	const [show, setShow] = useState(false);
	const [permission, setPermission] = useState("User");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [newUser, setNewUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		country: "",
		permission: permission,
	});

	const handleChange = e => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		});
	};

	const addNewUser = () => {
		Axios.post("http://localhost:4000/addNewUser", newUser);
		handleClose();
	};

	return (
		<>
			<div className="input-group add-user-button">
				<Button variant="success" onClick={handleShow}>
					Add New User
				</Button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add a new User</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlInput1"
							>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									name="firstName"
									type="text"
									onChange={handleChange}
								/>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									name="lastName"
									type="text"
									onChange={handleChange}
								/>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									name="email"
									type="email"
									onChange={handleChange}
								/>
								<Form.Label>Location</Form.Label>
								<Form.Control
									name="country"
									type="text"
									onChange={handleChange}
								/>
								<Form.Label>Permission</Form.Label>
								<Form.Control
									name="permission"
									value={permission}
									type="text"
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit" variant="warning" onClick={addNewUser}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
}

export default AddNewUser;
