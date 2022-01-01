import React from "react";
import AddNewUser from "./AddNewUser";

function UserTableHead() {
	return (
		<div>
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>User Manager</h2>
					</div>
					<div className="col-sm-6">
						<AddNewUser />
					</div>
				</div>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Full Name</th>
						<th scope="col">Email Address</th>
						<th scope="col">Location</th>
						<th scope="col">Joined</th>
						<th scope="col">Permission</th>
					</tr>
				</thead>
			</table>
		</div>
	);
}

export default UserTableHead;
