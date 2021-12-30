import React from "react";

function UserTableBody({
	picture,
	firstName,
	lastName,
	email,
	country,
	registered,
}) {
	return (
		<div>
			<table className="table">
				<tbody>
					<tr>
						<th scope="row">
							<img src={picture} alt="pic" />
							{` ${firstName}  ${lastName}`}
						</th>
						<td>{email}</td>
						<td>{country}</td>
						<td>{registered}</td>
						<td>User</td>
						<td>
							<button className="btn btn-warning">Modify</button>
						</td>
						<td>
							<button className="btn btn-warning">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default UserTableBody;
