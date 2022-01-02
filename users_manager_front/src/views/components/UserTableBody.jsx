import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Axios from "axios";

function UserTableBody({
	userId,
	picture,
	firstName,
	lastName,
	email,
	country,
	registered,
}) {
	const [show, setShow] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [permission, setPermission] = useState("User");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleCloseDelete = () => setShowDelete(false);
	const handleShowDelete = () => setShowDelete(true);

	const [updatedUser, setUpdatedUser] = useState({
		id: userId,
		firstName: firstName,
		lastName: lastName,
		email: email,
		country: country,
		permission: permission,
	});

	const handleChange = e => {
		setUpdatedUser({
			...updatedUser,
			[e.target.name]: e.target.value,
		});
	};

	const updateUserInMongoDB = () => {
		console.log(updatedUser);
		Axios.put("http://localhost:4000/updateUser", updatedUser);
		handleClose();
	};

	const deleteUserFromMongoDB = () => {
		Axios.delete(`http://localhost:4000/deleteUser/${userId}`);
		handleCloseDelete();
	};

	return (
		<tr>
			<th scope="row">
				<img className="rounded-circle" src={picture} alt="pic" />
				{` ${firstName}  ${lastName}`}
			</th>
			<td>{email}</td>
			<td>{country}</td>
			<td>{registered}</td>
			<td>{permission}</td>
			<td>
				<Button onClick={handleShow} className="btn btn-warning">
					Modify
				</Button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modify User</Modal.Title>
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
									defaultValue={firstName}
									onChange={handleChange}
								/>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									name="lastName"
									type="text"
									defaultValue={lastName}
									onChange={handleChange}
								/>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									name="email"
									type="email"
									defaultValue={email}
									onChange={handleChange}
								/>
								<Form.Label>Location</Form.Label>
								<Form.Control
									name="country"
									type="text"
									defaultValue={country}
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
						<Button
							type="submit"
							variant="warning"
							onClick={updateUserInMongoDB}
						>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			</td>
			<td>
				<Button onClick={handleShowDelete} className="btn btn-danger">
					Delete
				</Button>
				<Modal show={showDelete} onHide={handleCloseDelete}>
					<Modal.Header closeButton>
						<Modal.Title>
							Are you sure you want to delete this user?
						</Modal.Title>
					</Modal.Header>

					<Modal.Footer>
						<Button variant="warning" onClick={deleteUserFromMongoDB}>
							Yes
						</Button>
						<Button variant="warning" onClick={handleCloseDelete}>
							No
						</Button>
					</Modal.Footer>
				</Modal>
			</td>
		</tr>
	);
}

export default UserTableBody;
