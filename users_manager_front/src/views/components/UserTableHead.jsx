import React from "react";

function UserTableHead() {
	return (
		<div>
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
